import { styled } from '../../styles'

export const ItemContainer = styled('section', {
  width: '100%',
  color: '$gray900',

  display: 'flex',
  alignItems: 'center',
  gap: '5.2rem',

  alignSelf: 'stretch',

  '& > img': {
    aspectRatio: 0.78,
  },

  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '5.2rem',

    '> div': {
      with: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '5.2rem',
    },
  },

  '@sm': {
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    gap: '1.6rem',

    div: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '1.6rem',

      '> div': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '1.6rem',
      },

      '> button': {
        display: 'none',
      },
    },
  },
})

export const SectionDescription = styled('section', {
  width: 'max(100%, 25.3rem)',
  maxWidth: '253px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.8rem',

  p: {
    fontSize: '1.4rem',
  },

  span: {
    fontSize: '1.6rem',
  },

  button: {
    display: 'none',
  },

  '@sm': {
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.6rem',
    alignSelf: 'stretch',

    button: {
      display: 'initial',
    },
  },
})

export const SectionQuantity = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.1rem',

  button: {
    border: 'none',
    backgroundColor: 'transparent',
    lineHeight: 0,

    img: {
      aspectRatio: 1,
      width: 'auto',
      height: 'auto',
    },
  },

  span: {
    width: '6.2rem',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0.35rem 1.6rem',

    border: '1px solid $gray100',
    borderRadius: '4px',

    fontWeight: 400,
    fontSize: '1.4rem',
    textAlign: 'center',
  },

  '@sm': {
    width: '11.7rem',

    span: {
      width: '100%',
      padding: '0.35rem 1.2rem',
    },
  },
})

export const Subtotal = styled('p', {
  width: 'min(100%, 21.369rem)',
  fontSize: '1.6rem',
  color: '$gray900',

  span: {
    display: 'none',
  },

  '@sm': {
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',

    span: {
      display: 'inherit',
      fontSize: '1.2rem',
      color: '$gray300',
      textTransform: 'uppercase',
    },
  },
})
