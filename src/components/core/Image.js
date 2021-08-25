import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


const StyledImage = styled.img`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  margin: ${props => props.theme.margin};
  cursor: pointer;
`;

const theme = {
  width: '50px',
  hegiht: '50px',
  margin: '10px',
};

export default class Image extends React.Component {

  render() {
    const inputTheme = {...theme, ...this.props}
    return (
      <ThemeProvider theme={inputTheme}>
        <StyledImage src={this.props.src} href={this.props.href} onClick={this.props.onClick} />
      </ThemeProvider>
    )
  }
}