import React from 'react';
import styled from 'styled-components';

import { Icon, Text } from '.';
import { COLORS } from '../../constants';


const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
  cursor: pointer;
  padding: 16px 40px;
  color: ${COLORS.PALETTE.WHITE};
  background-color: ${COLORS.PALETTE.PRIMARY};
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  border: none;
  border-radius: 100px;
  box-shadow: 0 15px 20px ${COLORS.PALETTE.PRIMARY_VERY_LIGHT};
`;

const ItemContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export default class ButtonIcon extends React.Component {

  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        <ItemContainer>
          <Text fontSize='17px' fontWeight='bold' color={COLORS.PALETTE.WHITE}>{this.props.children}</Text>
        </ItemContainer>
        <ItemContainer>
          <Icon name='ArrowRight' height='15px' width='15px' color={COLORS.PALETTE.WHITE} />
        </ItemContainer>
      </StyledButton>
    );
  }
}

