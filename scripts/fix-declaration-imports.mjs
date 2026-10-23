// TypeScript writes the declarations in dist/types with the source's
// extensionless relative imports ('./classes/MoebiusColor', '../types'), which
// consumers using `moduleResolution: node16` or `nodenext` can't resolve. Point
// each one at the file it means ('./classes/MoebiusColor.js',
// '../types/index.js'). Runs as part of `npm run build`.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const TYPES = fileURLToPath(new URL('../dist/types/', import.meta.url));
const SPECIFIER = /((?:from|import\()\s*')(\.{1,2}\/[^']*)(')/g;
const unresolved = [];

let rewritten = 0;

for (const file of readdirSync(TYPES, { recursive: true })) {
  if (!file.endsWith('.d.ts')) continue;

  const path = join(TYPES, file);
  const text = readFileSync(path, 'utf8').replace(
    SPECIFIER,
    (match, before, specifier, after) => {
      if (/\.js$/.test(specifier)) return match;

      const base = join(dirname(path), specifier);
      const target = existsSync(`${base}.d.ts`)
        ? `${specifier}.js`
        : existsSync(join(base, 'index.d.ts'))
          ? `${specifier}/index.js`
          : undefined;

      if (!target) {
        unresolved.push(`${relative(TYPES, path)}: ${specifier}`);

        return match;
      }

      rewritten += 1;

      return `${before}${target}${after}`;
    }
  );

  writeFileSync(path, text);
}

if (unresolved.length > 0) {
  console.error('Imports in dist/types that point at no declaration file:');
  for (const entry of unresolved) console.error(`  - ${entry}`);
  process.exit(1);
}

console.log(`dist/types: ${rewritten} relative imports point at .js files`);
