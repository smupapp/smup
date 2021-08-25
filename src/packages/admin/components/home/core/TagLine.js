import React from 'react';

import { Container, Text } from '../../../../../components';

import { COLORS } from '../../../../../constants';


const TEXT = 'Welcome back to the workspace!'

const STYLE = {
  margin: '5px'
};


class TagLine extends React.Component {

  render() {
    return (
      <Container theme={STYLE}>
        <Text color={COLORS.PALETTE.TEXT_SECONDARY} fontSize='15px' letterSpacing='0.5px'>
          {TEXT}
        </Text>
      </Container>
    )
  }
}


export default TagLine;