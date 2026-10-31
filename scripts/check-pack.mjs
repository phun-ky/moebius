// Check what npm would publish: pack the package, check the tarball holds the
// files package.json points at, its LICENSE and README, and no tests, lint it
// with publint and @arethetypeswrong/cli, then install the tarball in an empty
// project, check every source map resolves and that dependencies are imported,
// not bundled, and import it. Run after `npm run build`.
import {
  createProgram,
  getPreEmitDiagnostics,
  ModuleKind,
  ModuleResolutionKind,
  ScriptTarget
} from 'typescript';

import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const BIN = join(ROOT, 'node_modules', '.bin');
/** Run a linter; return its output if it fails. */
const lint = (command, args, cwd = ROOT) => {
  try {
    execFileSync(join(BIN, command), args, {
      cwd,
      encoding: 'utf8',
      stdio: 'pipe'
    });

    return undefined;
  } catch (error) {
    return `${error.stdout ?? ''}${error.stderr ?? ''}`.trim();
  }
};
/** Every .map file under dir. */
const mapsIn = (dir) =>
  readdirSync(dir, { recursive: true })
    .filter((file) => file.endsWith('.map'))
    .map((file) => join(dir, file));
const npm = (args, cwd) =>
  execFileSync('npm', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit']
  });
/** Every file path a package.json points at, without the leading ./ */
const entryPoints = (pkg) => {
  const paths = [];
  const collect = (value) => {
    if (typeof value === 'string') paths.push(value);
    else if (value && typeof value === 'object')
      Object.values(value).forEach(collect);
  };

  collect(pkg.exports);
  collect(pkg.main);
  collect(pkg.types);

  return paths.map((path) => path.replace(/^\.\//, ''));
};
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
const work = mkdtempSync(join(tmpdir(), 'moebius-pack-'));
const problems = [];

try {
  const output = JSON.parse(
    npm(['pack', '--json', '--pack-destination', work], ROOT)
  );
  // An array in npm 11; npm 12 may key it by package name
  const packed = Array.isArray(output) ? output[0] : Object.values(output)[0];
  const files = new Set(packed.files.map((file) => file.path));

  // npm adds LICENSE and README.md on its own; CHANGELOG.md is in files
  for (const path of [
    ...entryPoints(pkg),
    'LICENSE',
    'README.md',
    'CHANGELOG.md'
  ]) {
    if (!files.has(path)) problems.push(`${path} is not in the tarball`);
  }

  for (const path of files) {
    if (/(^|\/)__tests__\/|\.tsbuildinfo$/.test(path)) {
      problems.push(`${path} should not be published`);
    }
  }

  const tarball = join(work, packed.filename);
  // ESM only on purpose, so CommonJS callers needing import() is expected
  const types = lint('attw', [tarball, '--profile', 'esm-only']);
  const publint = lint('publint', ['--strict']);

  if (types) problems.push(`@arethetypeswrong/cli:\n${types}`);

  if (publint) problems.push(`publint:\n${publint}`);

  console.log(
    `${pkg.name}@${pkg.version}: ${files.size} files, ${packed.size} bytes`
  );

  if (problems.length === 0) {
    const app = join(work, 'app');

    mkdirSync(app);
    writeFileSync(
      join(app, 'package.json'),
      '{ "name": "app", "private": true, "type": "module" }\n'
    );
    npm(
      [
        'install',
        '--no-audit',
        '--no-fund',
        '--ignore-scripts',
        '--prefer-offline',
        tarball
      ],
      app
    );

    // Every source map entry must point at a published file, or embed the
    // source in sourcesContent
    const installed = join(app, 'node_modules', pkg.name);

    for (const map of mapsIn(installed)) {
      const { sources, sourcesContent = [] } = JSON.parse(
        readFileSync(map, 'utf8')
      );

      sources.forEach((source, index) => {
        if (
          typeof sourcesContent[index] !== 'string' &&
          !existsSync(join(dirname(map), source))
        ) {
          problems.push(
            `${relative(installed, map)} points at ${source}, which isn't published or embedded`
          );
        }
      });
    }

    // Runtime dependencies are imported, never bundled: the published code
    // imports exactly the packages in dependencies, and no source map embeds
    // code from node_modules
    const runtimeDependencies = Object.keys(pkg.dependencies ?? {}).sort();
    const code = readFileSync(join(installed, pkg.main), 'utf8');
    const packageOf = (specifier) =>
      specifier
        .split('/')
        .slice(0, specifier.startsWith('@') ? 2 : 1)
        .join('/');
    const imported = [
      ...new Set(
        [...code.matchAll(/\b(?:from|import)\s*\(?\s*["']([^"']+)["']/g)]
          .map(([, specifier]) => specifier)
          .filter((specifier) => !/^(\.|\/|node:)/.test(specifier))
          .map(packageOf)
      )
    ].sort();

    if (imported.join() !== runtimeDependencies.join()) {
      problems.push(
        `${pkg.main} imports [${imported.join(', ')}], but dependencies are [${runtimeDependencies.join(', ')}]`
      );
    }

    for (const map of mapsIn(installed)) {
      const bundled = JSON.parse(readFileSync(map, 'utf8')).sources.filter(
        (source) => source.includes('node_modules')
      );

      if (bundled.length > 0) {
        problems.push(
          `${relative(installed, map)} bundles code from node_modules: ${bundled.slice(0, 3).join(', ')}`
        );
      }
    }

    // Import the package and build a palette with it
    const smoke = `
      const { default: Moebius } = await import(${JSON.stringify(pkg.name)});
      const { MoebiusColor, MoebiusPalettes } = await Moebius({ colorNames: false });
      const palettes = new MoebiusPalettes({
        baseColor: new MoebiusColor('#003f5c'),
        secondaryColor: new MoebiusColor('#ff9900'),
        divergentColor: '#f5f5f5'
      });
      const count = palettes.colors.luminanceShift.length;
      if (count === 0) throw new Error('the luminance shift palette is empty');
      console.log('imported and built a palette: ' + count + ' luminance shift colors');
    `;

    try {
      execFileSync('node', ['--input-type=module', '-e', smoke], {
        cwd: app,
        stdio: 'inherit'
      });
    } catch {
      problems.push('the installed tarball could not be imported or used');
    }

    // Compile the documented usage against the published declarations, so
    // types that don't match the docs fail here
    writeFileSync(
      join(app, 'consumer.ts'),
      `import Moebius, {
  type MoebiusColor as MoebiusColorType,
  type MoebiusPalettes as MoebiusPalettesType
} from ${JSON.stringify(pkg.name)};

const { MoebiusColor, MoebiusPalettes } = await Moebius({ colorNames: false });
const baseColor = new MoebiusColor('#003f5c');
const palettes = new MoebiusPalettes({
  baseColor,
  secondaryColor: new MoebiusColor('#ff9900'),
  divergentColor: '#f5f5f5'
});
const name: string = baseColor.name;
const colors: string[] = palettes.colors.luminanceShift;
// Code written against older types passes a name, which is ignored
const legacy = new MoebiusColor('#f5f5f5', '');
const fromObject = new MoebiusColor({ h: 36, s: 1, l: 0.5 });
// toObject() and toFloat() return the shape of the requested color space
const hue: number = baseColor.toObject('hsl').h;
const red: number = baseColor.toObject('rgb').r + baseColor.toObject().g;
const lightness: number = baseColor.toFloat('hsl').l;
const blue: number = baseColor.toFloat().b;

// The class types are exported for typing instances
const typed: MoebiusColorType = baseColor;
const typedPalettes: MoebiusPalettesType = palettes;

console.log(name, colors, legacy.hex, fromObject.hex, hue, red, lightness, blue);
console.log(typed.hex, typedPalettes.colors.interpolate);
`
    );

    const typecheck = lint(
      'tsc',
      [
        '--noEmit',
        '--strict',
        '--target',
        'es2022',
        '--module',
        'esnext',
        '--moduleResolution',
        'bundler',
        '--skipLibCheck',
        'consumer.ts'
      ],
      app
    );

    if (typecheck) {
      problems.push(
        `the documented usage doesn't compile against the published types:\n${typecheck}`
      );
    } else {
      console.log('the documented usage compiles against the published types');
    }

    // Every value the declarations export must exist at runtime. List what
    // the declarations export, then use each name as a value: type-only exports
    // and types fail to compile (fine), so a name that compiles but isn't a
    // runtime export would crash a consumer that imports it
    const runtimeExports = JSON.parse(
      execFileSync(
        'node',
        [
          '--input-type=module',
          '-e',
          `console.log(JSON.stringify(Object.keys(await import(${JSON.stringify(pkg.name)}))))`
        ],
        { cwd: app, encoding: 'utf8' }
      )
    );
    const compilerOptions = {
      noEmit: true,
      strict: true,
      target: ScriptTarget.ES2022,
      module: ModuleKind.ESNext,
      moduleResolution: ModuleResolutionKind.Bundler,
      skipLibCheck: true
    };
    const listFile = join(app, 'list-exports.ts');

    writeFileSync(listFile, `export * from ${JSON.stringify(pkg.name)};\n`);

    const listProgram = createProgram([listFile], compilerOptions);
    const checker = listProgram.getTypeChecker();
    const moduleSymbol = checker.getSymbolAtLocation(
      listProgram.getSourceFile(listFile).statements[0].moduleSpecifier
    );
    const declared = checker
      .getExportsOfModule(moduleSymbol)
      .map((symbol) => symbol.name)
      .filter((name) => !runtimeExports.includes(name));
    const probeFile = join(app, 'value-exports.ts');

    // A named import, as consumers write it: TypeScript rejects a type-only
    // export used as a value this way, but not through a namespace import
    writeFileSync(
      probeFile,
      `${declared
        .map(
          (name, index) =>
            `import { ${name} as value${index} } from ${JSON.stringify(pkg.name)}; console.log(value${index});`
        )
        .join('\n')}\n`
    );

    const probe = createProgram([probeFile], compilerOptions);
    const failingLines = new Set(
      getPreEmitDiagnostics(probe)
        .filter((diagnostic) => diagnostic.file?.fileName === probeFile)
        .map(
          (diagnostic) =>
            diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start).line
        )
    );
    const phantom = declared.filter((name, index) => !failingLines.has(index));

    if (phantom.length > 0) {
      problems.push(
        `the published types declare values the module doesn't export: ${phantom.join(', ')} (runtime exports: ${runtimeExports.join(', ')})`
      );
    } else {
      console.log(
        `every value the types export exists at runtime (${runtimeExports.join(', ')}; ${declared.length} type-only exports)`
      );
    }
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

if (problems.length > 0) {
  console.error('\nThe package would not publish correctly:\n');
  for (const problem of problems) console.error(`  - ${problem}`);
  console.error(
    '\nCheck "files" in package.json, and run npm run build first.'
  );
  process.exit(1);
}

console.log(`\n${pkg.name} packs, installs and imports.`);
