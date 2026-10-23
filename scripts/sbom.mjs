// Write a CycloneDX software bill of materials for what ships in the package
// to stdout. Rollup bundles the runtime libraries into dist, so they are
// devDependencies and `npm sbom --omit dev` would leave them out; instead, the
// packages listed in dist's source map are the components. Run after
// `npm run build`.
// Usage: node scripts/sbom.mjs > moebius.cdx.json
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const DIST = new URL('../dist/', import.meta.url);
const map = JSON.parse(readFileSync(new URL('moebius.js.map', DIST), 'utf8'));
/**
 * The bundled packages as name@version, read from the package each source map
 * entry points into, so a nested copy of the same name isn't counted
 */
const bundled = new Set(
  map.sources
    .map((source) => source.match(/^(.*node_modules\/((?:@[^/]+\/)?[^/]+))\//))
    .filter(Boolean)
    .map(([, dir, name]) => {
      const { version } = JSON.parse(
        readFileSync(new URL(`${dir}/package.json`, DIST), 'utf8')
      );

      return `${name}@${version}`;
    })
);
const id = (component) => `${component.name}@${component.version}`;

if (bundled.size === 0) {
  console.error('No bundled packages found in dist/moebius.js.map.');
  console.error('Run npm run build first.');
  process.exit(1);
}

const sbom = JSON.parse(
  execFileSync('npm', ['sbom', '--sbom-format', 'cyclonedx'], {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024
  })
);
const rootRef = sbom.metadata.component['bom-ref'];
const dependsOn = new Map(
  (sbom.dependencies ?? []).map((dependency) => [
    dependency.ref,
    dependency.dependsOn ?? []
  ])
);
// The bundled packages, and anything they depend on in turn
const keep = new Set(
  sbom.components
    .filter((component) => bundled.has(id(component)))
    .map((component) => component['bom-ref'])
);

for (const ref of keep) {
  for (const child of dependsOn.get(ref) ?? []) keep.add(child);
}

const missing = [...bundled].filter(
  (name) => !sbom.components.some((component) => id(component) === name)
);

if (missing.length > 0) {
  console.error(`Bundled but not in the npm tree: ${missing.join(', ')}`);
  process.exit(1);
}

// They ship inside dist, so drop npm's "development" flag from them
sbom.components = sbom.components
  .filter((component) => keep.has(component['bom-ref']))
  .map((component) => ({
    ...component,
    properties: (component.properties ?? []).filter(
      (property) => property.name !== 'cdx:npm:package:development'
    )
  }));
sbom.dependencies = [
  {
    ref: rootRef,
    dependsOn: sbom.components
      .filter((component) => bundled.has(id(component)))
      .map((component) => component['bom-ref'])
  },
  ...[...keep].map((ref) => ({ ref, dependsOn: dependsOn.get(ref) ?? [] }))
];

process.stdout.write(`${JSON.stringify(sbom, null, 2)}\n`);
