import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'stretch',
  textTransform: 'uppercase',

  'a, button': {
    width: '23.542rem',
    fontSize: '1.4rem',
  },

  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    p: {
      color: '$gray300',
      fontSize: '1.4rem',
      textAlign: 'center',
    },

    span: {
      fontSize: '2.4rem',
      color: '$gray900',
      textAlign: 'center',
    },
  },

  '@sm': {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    gap: '1.6rem',
    alignSelf: 'stretch',

    'a, button': {
      width: '100%',
    },

    section: {
      p: {
        width: '6.147rem',
      },

      span: {
        width: '13.079rem',
      },
    },
  },
})
