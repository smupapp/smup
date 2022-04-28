import React from 'react';

import { COLORS } from '../../constants';


const theme = {
  width: '15px',
  height: '15px',
  fontSize: '15px',
  color: COLORS.PALETTE.PRIMARY
};


export default class CircleCross extends React.Component {

  render() {

    const inputTheme = {...theme, ...this.props.theme};

    return (
      <svg viewBox="0 0 16 16" style={inputTheme} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5"/>
        <circle cx="8" cy="8" r="6.25"/>
      </svg>
    );
  }
}

