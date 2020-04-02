import styled from '@emotion/styled'
import { theme } from '../theme'

export const ControlWrapper = styled('div')({
  gridArea: '3 / 2 / 4 / 3',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  '@media screen and (max-width: 540px)': {
    flexDirection: 'column',
  },
})

export const ColourControlWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '200px',
  width: '100%',
  background: '#F2F2F2',
  border: '1px solid #FFFFFF',
  boxShadow: '0 1px 2px 0 rgba(168,168,168,0.50)',
  padding: '10px',
  borderRadius: '6px',
  '&:after': {
    border: '2px solid #E6E6E6',
  },
})

export const ColorWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  maxWidth: '296px',
  '@media screen and (max-width: 540px)': {
    height: '180px',
    maxWidth: 'calc(100% - 25px)',
  },
})

export const BackgroundWrapper = styled('div')(props => ({
  position: 'relative',
  height: '90px',
  backgroundColor: '#' + props.background,
  border: '1px solid #FFFFFF',
  boxShadow: '0 0 2px 0 rgba(0,0,0,0.2)',
  borderRadius: '4px',
  '&:after': {
    border: '2px solid rgba(0, 0, 0, 0.05)',
  },
}))

export const ForegroundWrapper = styled('div')(props => ({
  position: 'relative',
  height: '90px',
  backgroundColor: '#' + props.color,
  border: '1px solid #FFFFFF',
  boxShadow: '0 0 2px 0 rgba(0,0,0,0.2)',
  borderRadius: '4px',
  '&:before': {
    border: '2px solid rgba(0, 0, 0, 0.05)',
  },
}))

export const HexWrapper = styled.input(props => ({
  color: props.textColour,
  position: 'absolute',
  backgroundColor: 'transparent',
  top: '10px',
  left: '24px',
  borderRadius: '3px',
  display: 'flex',
  textTransform: 'uppercase',
  width: '80px',
  padding: '4px',
  fontWeight: theme.weight.bold,
  border: '1px solid #FFFFFF',
  boxShadow: 'inset 0 0 0 1px #E6E6E6',
}))

export const Hash = styled.div(props => ({
  color: props.textColour,
  position: 'absolute',
  top: '14px',
  left: '10px',
}))

export const Fields = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

export const FieldWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '& + &': {
    marginLeft: '20px',
  },
})

export const Button = styled.button(props => ({
  backgroundColor: props.selected ? '#F1F9FF' : '#FFFFFF',
  border: props.selected ? '2px solid #0094FF' : '1px solid #E1E1E1',
  boxShadow: '0 1px 6px 0 rgba(0,0,0,0.13)',
  borderRadius: '3px',
  padding: '6px 30px',
  fontFamily: theme.fontFamily,
  fontSize: '16px',
  fontWeight: theme.weight.bold,
  color: props.selected ? theme.color.dark : theme.color.grey,
  '&:hover': {
    cursor: 'pointer',
  },
}))

export const TextSize = styled.input({
  textAlign: 'center',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E1E1E1',
  borderRadius: '3px',
  padding: '6px 0',
  width: '40px',
  fontFamily: theme.fontFamily,
  fontSize: '14px',
  fontWeight: theme.weight.bold,
  color: theme.color.dark,
  marginRight: '6px',
  cursor: 'ew-resize',
})

export const CheckboxWrapper = styled('label')({
  display: 'flex',
  alignItems: 'center',
  input: {
    marginRight: '6px',
  },
})

export const SwitchIcon = styled('button')({
  height: '20px',
  width: '20px',
  padding: 0,
  cursor: 'pointer',
  border: 0,
  background: '#E7E7E7',
  borderRadius: '4px',
  '&:hover': {
    background: '#DBDBDB',
  },
})

export const ColourHeader = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
})
