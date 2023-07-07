import { globalCss } from '.'

export const globalStyles = globalCss({
  ':root': {
    fontSize: '62.5%',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$white',
    '-webkit-font-smoothing': 'antialiased',
  },

  'button, a': {
    cursor: 'pointer',
  },

  'button:disabled': {
    opacity: '0.6',
    cursor: 'not-allowed',
    transition: 'all 0.4s',
  },

  'body *': {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 700,
    lineHeight: 1.35,
  },

  a: {
    textDecoration: 'none',
  },

  'a:visited': {
    color: 'inherit',
  },

  '.container': {
    width: '100%',
    maxWidth: '960px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '7.6rem',

    '@md': {
      padding: '0 1rem',
    },

    '@sm': {
      padding: '0 1.6rem',
      marginBottom: '1.6rem',
    },
  },
})
