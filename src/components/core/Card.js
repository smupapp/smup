import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const StyledBox = styled.div`
  cursor: ${props => props.theme.cursor};
  display: ${props => props.theme.display};
  flex-direction: ${props => props.theme.flexDirection};
  align-items: ${props => props.theme.alignItems};
  justify-content: ${props => props.theme.justifyContent};
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  text-align: ${props => props.theme.textAlign};
  font-size: ${props => props.theme.fontSize};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

const theme = {
  display: 'block',
  height: '100vh',
  padding: 'auto',
  margin: '40px 40px',
  color: COLORS.PALETTE.PRIMARY_DARK,
  backgroundColor: COLORS.PALETTE.WHITE,
  textAlign: 'center',
  fontSize: '45px',
  border: 'none',
  borderRadius: '10px',
  boxShadow: `0 1px 30px ${COLORS.PALETTE.SHADOW}`
}

export default class Card extends React.Component {

  render() {

    return (
      <StyledBox theme={this.props.theme || theme}>{this.props.children}</StyledBox>
    );
  }
}

