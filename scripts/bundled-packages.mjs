// The third-party packages rollup bundled into dist, read from dist's source
// map: each entry under node_modules points into the package it came from.
// Used by sbom.mjs and third-party-licenses.mjs. Run after `npm run build`.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const DIST = new URL('../dist/', import.meta.url);

/**
 * @param {URL} [dist] - The directory holding moebius.js.map.
 * @returns {{ name: string, version: string, license: string, dir: string }[]}
 *   One entry per bundled package, with its directory on disk.
 */
export const bundledPackages = (dist = DIST) => {
  const map = JSON.parse(readFileSync(new URL('moebius.js.map', dist), 'utf8'));
  const dirs = new Map();

  for (const source of map.sources) {
    const match = source.match(/^(.*node_modules\/((?:@[^/]+\/)?[^/]+))\//);

    if (match) dirs.set(match[1], match[2]);
  }

  return [...dirs].map(([dir, name]) => {
    const path = fileURLToPath(new URL(dir, dist));
    const { version, license } = JSON.parse(
      readFileSync(`${path}/package.json`, 'utf8')
    );

    return { name, version, license, dir: path };
  });
};
