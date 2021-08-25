import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
  align-items: ${props => props.theme.alignItems};
  background: ${props => props.theme.background};
  background-color: ${props => props.theme.backgroundColor};
  border: ${props => props.theme.border};
  border-bottom: ${props => props.theme.borderBottom};
  border-left: ${props => props.theme.borderLeft};
  border-right: ${props => props.theme.borderRight};
  border-top: ${props => props.theme.borderTop};
  box-shadow: ${props => props.theme.boxShadow};
  cursor: ${props => props.theme.cursor};
  display: ${props => props.theme.display};
  flex: ${props => props.theme.flex};
  flex-direction: ${props => props.theme.flexDirection};
  height: ${props => props.theme.height};
  justify-content: ${props => props.theme.justifyContent};
  margin: ${props => props.theme.margin};
  margin-left: ${props => props.theme.marginLeft};
  margin-right: ${props => props.theme.marginRight};
  margin-top: ${props => props.theme.marginTop};
  margin-bottom: ${props => props.theme.marginBottom};
  min-height: ${props => props.theme.minHeight};
  min-width: ${props => props.theme.minWidth};
  overflow: ${props => props.theme.overflow};
  padding: ${props => props.theme.padding};
  padding-left: ${props => props.theme.paddingLeft};
  padding-right: ${props => props.theme.paddingRight};
  padding-top: ${props => props.theme.paddingTop};
  padding-bottom: ${props => props.theme.paddingBottom};
  position: ${props => props.theme.position};
  right: ${props => props.theme.right};
  top: ${props => props.theme.top};
  text-align: ${props => props.theme.textAlign};
  width: ${props => props.theme.width};
  z-index: ${props => props.theme.zIndex};
  &:hover {
    ${props => props.theme['&:hover']};
  }
`;

export default class Container extends React.Component {

  render() {
    return (
      <StyledContainer id={this.props.id} onClick={this.props.onClick} theme={this.props.theme}>
        {this.props.children}
      </StyledContainer>
    );
  }
}

