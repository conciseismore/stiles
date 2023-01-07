import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'

const isProd = process.env.NODE_ENV === 'prod'

export default {
  input: 'src/index.js',
  output: {
    file: isProd ? 'bundle.js' : 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    postcss({
      plugins: [
        autoprefixer(),
        postcssImport(),
        isProd && cssnano(),
      ],
      extract: isProd ? 'stil.css' : 'css/stil.css'
    })
  ]
}
