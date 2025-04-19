import type { Preview } from '@storybook/vue3'
import '../src/assets/styles/main.scss'

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
