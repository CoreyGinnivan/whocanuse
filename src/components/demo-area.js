import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const DemoAreaWrapper = styled('span')(props => ({
  gridArea: '2 / 3 / 3 / 4',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  color: '#' + props.color,
  fontSize: props.size + 'px',
  lineHeight: props.size + 'px',
  fontWeight: props.bold && '700',
  textShadow: props.shadow && '0 1px 0 rgba(0,0,0,0.27)',
}))


const TextWrapper = styled('div')({
  maxWidth: '500px'
})


/*----------------------------------------------------------
   Demo Area
----------------------------------------------------------*/

export default class DemoArea extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.string,
    bold: PropTypes.bool,
    shadow: PropTypes.bool,
  }
  render() {
    let { children, ...rest } = this.props;
    return (
      <DemoAreaWrapper {...rest}>
        <TextWrapper>The quick brown fox jumps over the lazy dog</TextWrapper>
      </DemoAreaWrapper>);
  }
}

