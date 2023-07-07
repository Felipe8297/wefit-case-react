import { styled } from '../../styles'

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '0.8rem',
  padding: '1rem 1.1rem',
  width: '100%',

  backgroundColor: '$white',
  borderRadius: '4px',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    color: '$gray500',

    p: {
      textAlign: 'center',
    },

    '> div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',

      img: {
        aspectRatio: 0.78,
        objectFit: 'cover',
      },

      'img + p': {
        fontSize: '1.2rem',
        color: '$gray500',
      },
    },

    'div + p': {
      fontSize: '1.6rem',
      color: '$gray900',
    },
  },
})
