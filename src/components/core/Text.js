import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import COLORS from '../../constants/colors';


const StyledText = styled.div`
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight};
  letter-spacing: ${props => props.theme.letterSpacing};
`;

const theme = {
  color: COLORS.PALETTE.TEXT_BLACK,
  fontSize: '25px',
  fontWeight: 'normal',
  letterSpacing: '0px'
};


export default class Text extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledText theme={{...this.props}}>{this.props.children}</StyledText>
      </ThemeProvider>
    )
  }
}
