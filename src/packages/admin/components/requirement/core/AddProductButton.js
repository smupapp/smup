import React from 'react';

import { Container, Text } from '../../../../../components';

import { COLORS } from '../../../../../constants';


const TEXT = '+ Add New Product'

const STYLE = {
  margin: '5px',
  cursor: 'pointer'
};


class AddProductButton extends React.Component {

  render() {
    return (
      <Container theme={STYLE} onClick={this.props.onClick}>
        <Text color={COLORS.PALETTE.LINK_COLOR} fontSize='15px' fontWeight='bold'>
          {TEXT}
        </Text>
      </Container>
    )
  }
}


export default AddProductButton;