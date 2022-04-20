import React from 'react';

import { COLORS } from '../../constants';


const theme = {
  width: '15px',
  height: '15px',
  fontSize: '15px',
  color: COLORS.PALETTE.PRIMARY
};


export default class CircleLoader extends React.Component {

  render() {

    const inputTheme = {...theme, ...this.props.theme};

    return (
      <svg x="0px" y="0px" viewBox="0 0 367.136 367.136" style={inputTheme} stroke="currentColor" fill="currentColor">
        <path d="M185.262,1.694c-34.777,0-68.584,9.851-97.768,28.488C59.1,48.315,36.318,73.884,21.613,104.126l26.979,13.119
          c25.661-52.77,78.03-85.551,136.67-85.551c83.743,0,151.874,68.13,151.874,151.874s-68.131,151.874-151.874,151.874
          c-49.847,0-96.44-24.9-124.571-65.042l53.219-52.964H0v113.365l39.14-38.953c13.024,17.561,29.147,32.731,47.731,44.706
          c29.33,18.898,63.353,28.888,98.391,28.888c100.286,0,181.874-81.588,181.874-181.874S285.548,1.694,185.262,1.694z"/>
      </svg>
    );
  }
}

