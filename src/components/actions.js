import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/


const ActionsWrapper = styled('div')(props => ({
  gridArea: '3 / 3 / 4 / 4',
  backgroundColor: '#F7F7F7',
  margin: '10px'
}))

/*----------------------------------------------------------
   Actions and Sharing Bar
----------------------------------------------------------*/


export class Actions extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    let { children, ...rest } = this.props;
    return (
      <ActionsWrapper {...rest}>
        {children}
      </ActionsWrapper>);
  }
}

