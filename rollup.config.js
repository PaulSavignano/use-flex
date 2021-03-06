import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript'
import { uglify } from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV

export default {
  input: 'src/lib/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: [
    'react',
    'react-proptypes'
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
    }),
    nodeResolve(),
    typescript(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    commonjs(),
    uglify()
  ]
};