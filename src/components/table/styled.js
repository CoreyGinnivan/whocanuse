import styled from '@emotion/styled'
import { theme } from '../theme'

export const VisionTableWrapper = styled('table')({
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  'tbody > tr:last-child': {
    borderBottom: 0,
  },
  tbody: {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
})

export const VisionRowWrapper = styled('tr')(({ pass }) => ({
  display: 'flex',
  flexDirection: 'row',
  background: '#FFFFFF',
  borderBottom: '2px solid #f1f1f1',
  boxShadow: '0 -1px 0 0 rgb(255, 255, 255)',
  backgroundColor: pass ? theme.color.white : theme.color.lightred,
  padding: '14px',
  alignItems: 'center',
  '@media screen and (max-width: 560px)': {
    flexDirection: 'column',
  },
  p: {
    color: pass ? null : theme.color.red,
  },
}))

export const VisionCellWrapper = styled('td')(({ pass }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-start',
  '@media screen and (max-width: 560px)': {
    width: '100% !important',
    marginRight: 0,
    justifyContent: 'flex-start !important',
    paddingBottom: '10px',
    marginLeft: '0 !important',
    flexDirection: 'row',
  },
}))

export const PercentWrapper = styled('div')(({ pass }) => ({
  display: 'flex',
  color: pass ? theme.color.green : theme.color.red,
  justifyContent: 'center',
  width: '80px',
  alignItems: 'center',
  height: '60px',
  padding: '5px',
  marginRight: '10px',
  h1: {
    color: pass ? theme.color.green : theme.color.red,
  },
  '@media screen and (max-width: 560px)': {
    justifyContent: 'flex-start',
    width: 'auto',
    height: 'auto',
  },
}))

export const Simulation = styled('div')({
  position: 'relative',
  width: '90px',
  height: '50px',
  userSelect: 'none',
  borderRadius: '6px',
  overflow: 'hidden',
  boxShadow: '0 0 0px 1px rgba(0,0,0,0.1)',
})

export const SimulationFilter = styled('div')((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: '-10px',
  width: '110px',
  height: '50px',
  background: props.background,
  color: props.foreground,
  userSelect: 'none',
  fontWeight: props.bold ? 'bold' : undefined,
  fontSize: `${props.fontSize}px`,
}))

export const PassFailTextWrapper = styled('div')(({ pass }) => ({
  color: pass ? theme.color.green : theme.color.red,
  textTransform: 'uppercase',
  fontSize: '11px',
  fontWeight: 600,
}))
