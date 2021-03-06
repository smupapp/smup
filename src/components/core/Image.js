import React from 'react';
import styled from 'styled-components';


const StyledImage = styled.img`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  margin: ${props => props.theme.margin};
  margin-left: ${props => props.theme.marginLeft};
  margin-right: ${props => props.theme.marginRight};
  cursor: pointer;
`;

const theme = {
  width: '50px',
  hegiht: '50px'
};

export default class Image extends React.Component {

  render() {
    const inputTheme = {...theme, ...this.props.theme};
    return (
      <StyledImage theme={inputTheme} src={this.props.src} href={this.props.href} onClick={this.props.onClick} />
    )
  }
}