import type { StorybookConfig } from '@storybook/vue3-vite'
import svgLoader from 'vite-svg-loader'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json'
      }
    }
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ? config.plugins : []), svgLoader()]
    return config
  }
}
export default config
