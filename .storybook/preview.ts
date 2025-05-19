import '@hn/assets/styles/main.scss'
import type { Preview } from '@storybook/vue3'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  tags: ['autodocs']
}

export default preview
