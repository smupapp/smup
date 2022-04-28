import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${COLORS.PALETTE.TEXT_PRIMARY};
  background-color: ${COLORS.PALETTE.PRIMARY};
  text-align: center;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  font-size: 15px;
  font-weight: 400;
  border: 1px solid ${COLORS.PALETTE.PRIMARY};
  border-radius: 0px;
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  user-select: none;
  &:hover {
    background-color: ${COLORS.PALETTE.PRIMARY_LIGHT};
  }
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

