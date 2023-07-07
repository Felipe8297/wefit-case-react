import { styled } from '..'

export const CartWithItemsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.1rem',
  padding: '2.4rem',

  backgroundColor: '$white',
  borderRadius: '4px',

  img: {
    objectFit: 'cover',
  },

  hr: {
    width: '100%',
    border: '1px solid $gray300',
  },

  '@sm': {
    minHeight: 'calc(100vh - 7.2rem - 1.6rem)',
    padding: '1.6rem',

    hr: {
      marginTop: 'auto',
    },
  },
})

export const CartWithItemsHeader = styled('header', {
  width: '100%',
  display: 'flex',
  gap: '5.2rem',

  span: {
    fontSize: '1.4rem',
    color: '$gray300',
    textTransform: 'uppercase',
  },

  'span:first-child': {
    width: 'min(100%, calc(89px + 52px + 253px))',
  },

  'span:nth-child(2)': {
    width: 'min(100%, 12rem)',
  },

  'span:nth-child(3)': {
    width: 'min(100%, 28.4rem)',
  },

  '@sm': {
    display: 'none',
  },
})
