import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      blue: '#009EDD',

      green: '#039B00',

      gray100: '#D9D9D9',
      gray300: '#999999',
      gray500: '#333333',
      gray900: '#2F2E41',
    },
  },
  media: {
    sm: '(max-width: 480px)',
    md: '(max-width: 960px)',
  },
})
