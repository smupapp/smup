import React from 'react';

import { Container, Text } from '../../../../../components';

import { COLORS } from '../../../../../constants';


const TEXT = 'Hi, Arshad'

const STYLE = {
  margin: '5px'
};


class Header extends React.Component {

  render() {
    return (
      <Container theme={STYLE}>
        <Text color={COLORS.PALETTE.TEXT_PRIMARY} fontSize='40px' fontWeight='bold'>
          {TEXT}
        </Text>
      </Container>
    )
  }
}


export default Header;