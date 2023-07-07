import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  width: '100%',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem',
  padding: '0.8rem',

  backgroundColor: '$blue',
  border: 'none',
  borderRadius: '4px',

  fontSize: '1.2rem',
  color: '$white',
  textAlign: 'center',
  textTransform: 'uppercase',

  '&:disabled': {
    opacity: 1,
    backgroundColor: '$green',

    'div + span': {
      minWidth: '15.7rem',
    },
  },

  div: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.4rem',

    img: {
      aspectRatio: 1,
      objectFit: 'cover',
      width: 'auto',
    },

    span: {
      fontWeight: 400,
    },
  },
})
