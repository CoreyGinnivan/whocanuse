import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/


const BackgroundWrapper = styled('div')(props => ({
  gridArea: '1 / 1 / 5 / 4',
  backgroundColor: '#' + props.background,
  boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  zIndex: '-1'
}))


/*----------------------------------------------------------
   Background Strip Component
----------------------------------------------------------*/

export class Background extends Component {
  static propTypes = {
    children: PropTypes.node,
    background: PropTypes.string,
  }
  render() {
    let { children, ...rest } = this.props;
    return (
      <BackgroundWrapper {...rest}>
        {children}
      </BackgroundWrapper>);
  }
}

