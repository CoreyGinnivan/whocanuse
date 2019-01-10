import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/


const BackgroundWrapper = styled('div')(props => ({
  gridArea: '1 / 1 / 3 / 5',
  backgroundColor: '#' + props.background,
  zIndex: '-1',
  '@media screen and (max-width: 960px)': {
    margin: '-20px'
  }
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

