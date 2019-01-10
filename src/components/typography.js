import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { theme } from '../components/theme';


/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/


const SmallTextWrapper = styled.span(props => ({
   margin: 0,
   fontFamily: theme.fontFamily,
   fontSize: '12px',
   textTransform: 'uppercase',
   fontWeight: theme.weight.extraBold,
   color: theme.color.grey,
   textAlign: props.align
}))

const TextWrapper = styled.p(props => ({
   fontFamily: theme.fontFamily,
   fontSize: '16px',
   fontWeight: props.bold ? theme.weight.bold : theme.weight.normal,
   color: props.dark ? theme.color.dark : theme.color.grey,
   textAlign: props.align,
   lineHeight: '1.45em',
   outline: 0,
   '& + &': {
      marginTop: '20px'
   }
}))

const MediumTextWrapper = styled.h2(props => ({
   margin: props.margin,
   fontFamily: theme.fontFamily,
   fontSize: '18px',
   fontWeight: theme.weight.bold,
   color: theme.color.dark,
   textAlign: props.align,
   lineHeight: '1.35em',
}))

const HeadingTextWrapper = styled.h1(props => ({
   margin: props.margin,
   fontFamily: theme.fontFamily,
   fontSize: '30px',
   fontWeight: theme.weight.extraBold,
   color: theme.color.dark,
   textAlign: props.align
}))




/*----------------------------------------------------------
   Type Styles
----------------------------------------------------------*/

// Small Text

export class SmallText extends Component {
   static propTypes = {
      children: PropTypes.node,
      align: PropTypes.string
   }
   render() {
      let { children, ...rest } = this.props;
      return (
         <SmallTextWrapper {...rest}>
            {children}
         </SmallTextWrapper>);
   }
}

// Normal Text

export class Text extends Component {
   static propTypes = {
      children: PropTypes.node,
      bold: PropTypes.bool,
      dark: PropTypes.bool,
      align: PropTypes.string,
      margin: PropTypes.string,
   }
   render() {
      let { children, ...rest } = this.props;
      return (
         <TextWrapper {...rest}>
            {children}
         </TextWrapper>);
   }
}

// Medium Text

export class MediumText extends Component {
   static propTypes = {
      children: PropTypes.node,
      align: PropTypes.string,
      margin: PropTypes.string,
   }
   render() {
      let { children, ...rest } = this.props;
      return (
         <MediumTextWrapper {...rest}>
            {children}
         </MediumTextWrapper>);
   }
}

// Large Text

export class Heading extends Component {
   static propTypes = {
      children: PropTypes.node,
      align: PropTypes.string,
      margin: PropTypes.string,
   }
   render() {
      let { children, ...rest } = this.props;
      return (
         <HeadingTextWrapper {...rest}>
            {children}
         </HeadingTextWrapper>);
   }
}