import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      file: 'dist/blueprint.common.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/blueprint.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/blueprint.min.js',
      format: 'iife',
      name: 'Blueprint',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true
      }
    }),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}