import React from 'react';

import { Container, Text } from '../../../../../components';

import { COLORS } from '../../../../../constants';


const TEXT = 'Product List'

const STYLE = {
  margin: '5px'
};


class Header extends React.Component {

  render() {
    return (
      <Container theme={STYLE}>
        <Text color={COLORS.PALETTE.TEXT_PRIMARY} fontSize='20px' fontWeight='bold'>
          {TEXT}
        </Text>
      </Container>
    )
  }
}


export default Header;