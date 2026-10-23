// Typecheck and run every TypeScript example in docs/guide against the built
// package, so the guide can't show code that doesn't compile or throws.
// Examples that don't import moebius are fragments of the page's running
// example; they get a prelude creating what they use of `Moebius`,
// `MoebiusColor`, `MoebiusPalettes` and `palettes`. fetch is stubbed, so nothing touches the network. Run after
// `npm run build`.
import { execFileSync } from 'node:child_process';
import {
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const GUIDE = join(ROOT, 'docs', 'guide');
const PACKAGE = '@phun-ky/moebius';
/** What a fragment uses from the page's running example, unless it declares it */
const prelude = (code) => {
  const declares = (name) =>
    new RegExp(
      `(const|let|var)\\s+(\\{[^}]*\\b${name}\\b[^}]*\\}|${name}\\b)`
    ).test(code);
  const uses = (name) => new RegExp(`\\b${name}\\b`).test(code);
  const lines = [`import Moebius from '${PACKAGE}';`];
  const classes = ['MoebiusColor', 'MoebiusPalettes'].filter(
    (name) =>
      !declares(name) &&
      (uses(name) || (uses('palettes') && !declares('palettes')))
  );

  if (classes.length > 0) {
    lines.push(
      `const { ${classes.join(', ')} } = await Moebius({ colorNames: false });`
    );
  }

  if (uses('palettes') && !declares('palettes')) {
    lines.push(`const palettes = new MoebiusPalettes({
  baseColor: new MoebiusColor('#003f5c'),
  secondaryColor: new MoebiusColor('#ff9900'),
  divergentColor: '#f5f5f5'
});`);
  }

  return `${lines.join('\n')}\n`;
};
// Answers the color name requests examples make, with a few names
const FETCH_STUB = `globalThis.fetch = async () =>
  new Response(JSON.stringify({ 'Deep Sea': '#003f5c', Orange: '#ff9900' }));
`;
const markdownFiles = (dir) =>
  readdirSync(dir, { recursive: true })
    .filter((file) => file.endsWith('.md'))
    .map((file) => join(dir, file));
const examples = markdownFiles(GUIDE).flatMap((file) => {
  const text = readFileSync(file, 'utf8');

  return [...text.matchAll(/```ts[^\n]*\n([\s\S]*?)```/g)].map((match) => ({
    where: `${relative(ROOT, file)}:${text.slice(0, match.index).split('\n').length}`,
    code: match[1]
  }));
});
const TSCONFIG = {
  compilerOptions: {
    target: 'ES2022',
    module: 'ESNext',
    moduleResolution: 'Bundler',
    lib: ['ES2022', 'DOM'],
    noEmit: true,
    skipLibCheck: true,
    types: []
  }
};
// tsx is resolved from the repository, since examples run in a temp directory
const TSX = import.meta.resolve('tsx');
const work = mkdtempSync(join(tmpdir(), 'moebius-docs-examples-'));
const problems = [];

try {
  mkdirSync(join(work, 'node_modules', '@phun-ky'), { recursive: true });
  symlinkSync(ROOT, join(work, 'node_modules', '@phun-ky', 'moebius'), 'dir');
  writeFileSync(join(work, 'fetch-stub.mjs'), FETCH_STUB);
  writeFileSync(join(work, 'package.json'), '{ "type": "module" }\n');

  const files = examples.map(({ where, code }, index) => {
    const file = `example-${index + 1}.ts`;
    const body = code.includes(PACKAGE) ? code : prelude(code) + code;

    writeFileSync(join(work, file), `${body}\nexport {};\n`);

    return { file, where };
  });
  // tsc skips type errors when any file has a syntax error, so typecheck
  // twice: everything, then again without the files that don't parse
  const typecheck = (only) => {
    writeFileSync(
      join(work, 'tsconfig.json'),
      JSON.stringify({ ...TSCONFIG, files: only.map(({ file }) => file) })
    );

    try {
      execFileSync(join(ROOT, 'node_modules', '.bin', 'tsc'), ['-p', work], {
        cwd: work,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      return [];
    } catch (error) {
      return `${error.stdout}`.split('\n').filter(Boolean);
    }
  };
  const report = (lines) => {
    for (const line of lines) {
      const file = line.match(/^(example-\d+\.ts)/)?.[1];
      const where = files.find((example) => example.file === file)?.where;

      problems.push(`${where ?? ''} ${line}`.trim());
    }
  };
  const first = typecheck(files);
  const unparsable = new Set(
    first
      .filter((line) => /error TS1\d{3}:/.test(line))
      .map((line) => line.match(/^(example-\d+\.ts)/)?.[1])
  );

  report(first.filter((line) => /error TS1\d{3}:/.test(line)));
  report(typecheck(files.filter(({ file }) => !unparsable.has(file))));

  for (const { file, where } of files) {
    try {
      execFileSync(
        process.execPath,
        ['--import', TSX, '--import', './fetch-stub.mjs', file],
        { cwd: work, encoding: 'utf8', stdio: 'pipe' }
      );
    } catch (error) {
      const message = `${error.stderr}`
        .split('\n')
        .find((line) => /Error|error/.test(line));

      problems.push(`${where} throws: ${message ?? 'unknown error'}`);
    }
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

if (problems.length > 0) {
  console.error('\nGuide examples that fail:\n');
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`All ${examples.length} guide examples compile and run.`);
