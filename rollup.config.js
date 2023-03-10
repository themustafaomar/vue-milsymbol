import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'

export default [{
  input: 'src/index.js',
  output: {
    name: 'VMilsymbol',
    file: 'dist/js/vue-milsymbol.js',
    format: 'umd',
  },
  external: ['vue', 'milsymbol'],
  plugins: [resolve()]
}, {
  input: 'src/index.js',
  output: {
    name: 'VMilsymbol',
    file: 'dist/js/vue-milsymbol.min.js',
    format: 'umd',
    plugins: [terser()],
  },
  external: ['vue', 'milsymbol'],
  plugins: [resolve()]
}]
