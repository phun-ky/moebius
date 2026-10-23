// Write dist/THIRD_PARTY_LICENSES.txt with the licence of every package rollup
// bundled into dist, so the notices those licences require ship with the code.
// A package's own LICENSE file is used; a package that ships none needs a copy
// in scripts/licenses/<name>.txt. Runs as part of `npm run build`.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { bundledPackages } from './bundled-packages.mjs';

const FALLBACKS = new URL('licenses/', import.meta.url);
const OUT = new URL('../dist/THIRD_PARTY_LICENSES.txt', import.meta.url);
const missing = [];
const sections = bundledPackages().map(({ name, version, license, dir }) => {
  const file = readdirSync(dir).find((entry) =>
    /^(licen[cs]e|copying)(\.(md|txt))?$/i.test(entry)
  );
  const fallback = new URL(`${name.replace('/', '__')}.txt`, FALLBACKS);

  let text;

  if (file) text = readFileSync(join(dir, file), 'utf8');
  else if (existsSync(fallback)) text = readFileSync(fallback, 'utf8');
  else missing.push(`${name}@${version}`);

  return `${name}@${version}\nLicense: ${license}\n\n${(text ?? '').trim()}\n`;
});

if (missing.length > 0) {
  console.error(`No licence text for: ${missing.join(', ')}`);
  console.error('Add scripts/licenses/<name>.txt for a package without one.');
  process.exit(1);
}

writeFileSync(
  OUT,
  `@phun-ky/moebius bundles the following third-party packages into
dist/moebius.js. Their licences follow.

${sections.join(`\n${'-'.repeat(79)}\n\n`)}`
);
console.log(
  `dist/THIRD_PARTY_LICENSES.txt: ${sections.length} bundled packages`
);
