import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { theme } from '../components/theme';



/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const CheckContainer = styled('span')(props => ({
   display: 'inline-block',
   height: '16px',
   width: '16px',
   verticalAlign: 'middle',
   'svg, g': {
      display: 'block',
      height: '100%',
      width: '100%',
      fill: theme.color.green,
   },
   'svg': {
      margin: 'auto'
   }
}))

const CrossContainer = styled('span')(props => ({
   display: 'inline-block',
   height: '16px',
   width: '16px',
   verticalAlign: 'middle',
   'svg, g': {
      display: 'block',
      height: '100%',
      width: '100%',
      fill: theme.color.red,
   },
   'svg': {
      margin: 'auto'
   }
}))

/*----------------------------------------------------------
   Check Icon
----------------------------------------------------------*/

export class Check extends Component {
   static propTypes = {
      children: PropTypes.node,
   }
   render() {
      let { children, ...rest } = this.props;
      return (
         <CheckContainer {...rest}>
            <svg height="10" viewBox="0 0 12 10" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9.97905192.57115535c.48338148-.5181681 1.24279048-.49038854 1.69618758.06204736.4533971.55243591.42909 1.42033194-.0542914 1.93850003l-6.39679575 6.85714246c-.46139753.4946021-1.17951853.49490955-1.64124018.00070268l-3.20320426-3.42857123c-.48372102-.51775405-.5085971-1.38562901-.05556228-1.938453.45303481-.55282398 1.21242545-.58125379 1.69614646-.06349975l2.38229604 2.5499066z" fillRule="evenodd" /></svg>
         </CheckContainer>);
   }
}

export class Cross extends Component {
   static propTypes = {
      children: PropTypes.node,
   }
   render() {
      let { children, ...rest } = this.props;
      return (
         <CrossContainer {...rest}>
            <svg height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m3.87867966 6-3.43933983-3.43933983c-.58578644-.58578644-.58578644-1.5355339 0-2.12132034s1.5355339-.58578644 2.12132034 0l3.43933983 3.43933983 3.43933983-3.43933983c.58578647-.58578644 1.53553387-.58578644 2.12132037 0 .5857864.58578644.5857864 1.5355339 0 2.12132034l-3.43933986 3.43933983 3.43933986 3.43933983c.5857864.58578647.5857864 1.53553387 0 2.12132037-.5857865.5857864-1.5355339.5857864-2.12132037 0l-3.43933983-3.43933986-3.43933983 3.43933986c-.58578644.5857864-1.5355339.5857864-2.12132034 0-.58578644-.5857865-.58578644-1.5355339 0-2.12132037z" fill="#bf2500"/></svg>
         </CrossContainer>);
   }
}
