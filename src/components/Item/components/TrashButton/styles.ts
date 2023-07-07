import { styled } from '../../../../styles'

export const TrashButtonContainer = styled('button', {
  border: 'none',
  backgroundColor: 'transparent',
  lineHeight: 0,

  img: {
    aspectRatio: 1,
    objectFit: 'cover',
    width: 'auto',
    height: 'auto',

    '@sm': {
      width: '1.6rem',
      aspectRatio: 0.89,
    },
  },
})
