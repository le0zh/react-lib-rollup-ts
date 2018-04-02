import resolve from 'rollup-plugin-node-resolve'; // node-resolve will resolve all the node dependencies
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss-modules';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import url from 'rollup-plugin-url';
import typescript from 'rollup-plugin-typescript2';
import autoprefixer from 'autoprefixer';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
			// extract: true,  // extracts to `${basename(dest)}.css`
			plugins: [autoprefixer()],
			writeDefinitions: true,
			// modules: { ... }
		}),
    typescript({
      clean: true,
      typescript: require('typescript'),
      verbosity: 0,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
};
