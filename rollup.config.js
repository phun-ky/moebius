import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import typescript from 'typescript';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/main.ts',
    output: {
      name: 'moebius',
      file: './moebius.js',
      format: 'es',
      sourcemap: true,
      exports: 'named',
      assetFileNames: '[name][extname]'
    },
    plugins: [
      nodeResolve(),
      commonjs({
        requireReturnsDefault: true
      }),
      ts({
        useTsconfigDeclarationDir: true,
        sourceMap: false,
        typescript
      }),
      terser({
        format: {
          comments: false
        }
      })
    ]
  },
  {
    input: './dts/main.d.ts',
    output: [{ file: './moebius.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
