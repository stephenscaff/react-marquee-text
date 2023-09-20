import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }
import css from 'rollup-plugin-css-only'

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
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'MarqueeText',
      globals: umdGlobals
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
