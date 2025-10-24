import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import css from 'rollup-plugin-css-only'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pkg = JSON.parse(
  readFileSync(path.join(__dirname, 'package.json'), 'utf8')
)

const paths = {
  input: 'src/index.ts',
  types: 'src/types.d.ts' // Replace with your actual types file
}

const plugins = {
  external: external(),
  resolve: resolve(),
  commonjs: commonjs(),
  typescript: typescript({
    exclude: 'node_modules'
  }),
  css: css({
    output: 'styles.css'
  }),
  dts: dts()
}

const umdGlobals = {
  react: 'React',
  'react-marquee-text': 'MarqueeText',
  'react/jsx-runtime': 'jsxRuntime'
}

const umdConfig = {
  external: ['react', 'react-dom'],
  input: paths.input,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner: "'use client';"
    },
    {
      file: pkg.module,
      format: 'es',
      banner: "'use client';"
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'MarqueeText',
      globals: umdGlobals,
      banner: "'use client';"
    }
  ],
  plugins: [
    plugins.external,
    plugins.resolve,
    plugins.commonjs,
    plugins.typescript,
    plugins.css
  ]
}

const typesConfig = {
  input: paths.types,
  output: {
    file: 'dist/types.d.ts'
  },
  plugins: [plugins.dts]
}

const esmConfig = {
  external: ['react', 'react-dom'],
  input: paths.input,
  output: [
    {
      file: pkg.types,
      format: 'es'
    }
  ],
  plugins: [plugins.external, plugins.resolve, plugins.css, plugins.dts]
}

const config = [umdConfig, typesConfig, esmConfig]

export default config
