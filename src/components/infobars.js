import React, { Component } from 'react'
import styled from '@emotion/styled';
import { theme } from '../components/theme';
import { Check } from '../components/icons';
import PropTypes from 'prop-types';

import { MediumText, Heading } from '../components/typography';


import 'tippy.js/dist/tippy.css';
import Tippy from '@tippy.js/react';



/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/


const SmallInfoBarWrapper = styled('div')(props => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: theme.color.lightgreen,
   padding: '16px',
   borderRadius: '6px',
   width: '100%',
   marginTop: '10px',
   outline: 0,
   'svg, g': {
      display: 'block',
      height: '100%',
      width: '100%',
      fill: theme.color.green,
   },
   'svg': {
      margin: 'auto'
   },
   Check: {
      marginRight: '20px'
   },
   '& + &': {
      'marginLeft': '20px'
   },
   '@media screen and (max-width: 780px)': {
      '& + &': {
         marginTop: '10px',
         marginLeft: '0'
      },
   }
}))



const LargeInfoBarWrapper = styled('div')(props => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: theme.color.lightgreen,
   padding: '20px',
   borderRadius: '6px',
   width: '100%',
   outline: 0,
   '& + &': {
      'marginLeft': '20px'
   },
   '@media screen and (max-width: 780px)': {
      '& + &': {
         marginTop: '10px',
         marginLeft: '0'
      },
   }
}))


/*----------------------------------------------------------
   Check Icon
----------------------------------------------------------*/

export class SmallInfoBar extends Component {
   static propTypes = {
      name: PropTypes.string,
      tooltip: PropTypes.string,
   }
   render() {
      const { name, tooltip } = this.props
      return (
         <Tippy content={tooltip} placement="top" animation="shift-away">
            <SmallInfoBarWrapper>
               <Check style={{ marginRight: '10px' }} />
               <MediumText>{name}</MediumText>
            </SmallInfoBarWrapper>
         </Tippy>
      );
   }
}




export class LargeInfoBar extends Component {
   static propTypes = {
      name: PropTypes.string,
      percent: PropTypes.string,
   }
   render() {
      const { name, percent } = this.props
      return (
         <LargeInfoBarWrapper>
            <Heading>{percent}%</Heading>
            <MediumText>{name}</MediumText>
         </LargeInfoBarWrapper>
      );
   }
}
