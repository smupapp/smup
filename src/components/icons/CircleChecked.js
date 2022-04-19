import React from 'react';

import { COLORS } from '../../constants';


const theme = {
  width: '15px',
  height: '15px',
  fontSize: '15px',
  color: COLORS.PALETTE.PRIMARY
};


export default class CircleChecked extends React.Component {

  render() {

    const inputTheme = {...theme, ...this.props.theme};

    return (
      <svg x="0px" y="0px" viewBox="0 0 330 330" style={inputTheme} stroke="currentColor" fill="currentColor">
        <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
        c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z" />
        <path d="M226.872,106.664l-84.854,84.853l-38.89-38.891c-5.857-5.857-15.355-5.858-21.213-0.001
        c-5.858,5.858-5.858,15.355,0,21.213l49.496,49.498c2.813,2.813,6.628,4.394,10.606,4.394c0.001,0,0,0,0.001,0
        c3.978,0,7.793-1.581,10.606-4.393l95.461-95.459c5.858-5.858,5.858-15.355,0-21.213
        C242.227,100.807,232.73,100.806,226.872,106.664z" />
      </svg>
    );
  }
}

