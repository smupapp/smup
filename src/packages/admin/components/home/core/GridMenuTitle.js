import React from 'react';

import { Container, Text } from '../../../../../components';

import { COLORS } from '../../../../../constants';


const TEXT = 'Choose an option'

const STYLE = {
  marginTop: '50px'
};


class GridMenuTitle extends React.Component {

  render() {
    return (
      <Container theme={STYLE}>
        <Text color={COLORS.PALETTE.TEXT_SECONDARY} fontSize='15px' fontWeight='bold' letterSpacing='0.5px'>
          {TEXT}
        </Text>
      </Container>
    )
  }
}


export default GridMenuTitle;
