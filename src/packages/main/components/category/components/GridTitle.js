import React from 'react';

import { Container, Text } from '../../../../../components';

import { COLORS } from '../../../../../constants';

const STYLE = {
  container: {
    margin: '5px'
  },
  text: {
    color: COLORS.PALETTE.TEXT_PRIMARY,
    fontSize: '18px'
  }
};


class GridTitle extends React.Component {

  render() {
    return (
      <Container theme={STYLE.container}>
        <Text theme={STYLE.text}>{this.props.children}</Text>
      </Container>
    )
  }
}


export default GridTitle;