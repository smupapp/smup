import React from 'react';

import { Container, Text } from '../../../components';

import { COLORS } from '../../../constants';


const STYLE = {
  container: {
    margin: '5px'
  },
  text: {
    height: '100px',
    fontSize: '15px',
    overflow: 'hidden',
    color: COLORS.PALETTE.TEXT_GRAY
  }
};


class GridCardDescription extends React.Component {

  render() {
    return (
      <Container theme={STYLE.container}>
        <Text theme={STYLE.text}>{this.props.children}</Text>
      </Container>
    )
  }
}


export default GridCardDescription;