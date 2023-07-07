import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  height: '7.2rem',
  padding: '1.8rem 1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h2: {
    fontSize: '2rem',
  },

  'a, a:visited': {
    color: 'inherit',
  },
})

export const HeaderSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',

    p: {
      fontWeight: 600,
      fontSize: '1.4rem',
    },

    span: {
      fontWeight: 600,
      fontSize: '1.2rem',
      color: '$gray300',
    },
  },

  img: {
    aspectRatio: 1,
    objectFit: 'cover',
    width: '3.2rem',
  },

  '@sm': {
    '> div > p': {
      display: 'none',
    },
  },
})
