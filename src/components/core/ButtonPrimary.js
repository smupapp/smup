import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 14px 60px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${COLORS.PALETTE.WHITE};
  background-color: ${COLORS.PALETTE.PRIMARY};
  text-align: center;
  font-size: 15px;
  font-weight: normal;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 2px ${COLORS.PALETTE.PRIMARY_VERY_LIGHT};
`;

export default class ButtonPrimary extends React.Component {

  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        {this.props.children}
      </StyledButton>
    );
  }
}

