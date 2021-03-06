import React from 'react';

import { Container, Text } from '../../../components';

import { COLORS } from '../../../constants';


const STYLE = {
  container: {
    maxWidth: '100%',
    margin: '5px'
  },
  text: {
    fontSize: '15px',
    overflow: 'hidden',
    fontWeight: '300',
    lineHeight: '1.7',
    color: COLORS.PALETTE.TEXT_PRIMARY
  }
};


class Content extends React.Component {

  render() {
    return (
      <Container theme={STYLE.container}>
        <Text theme={STYLE.text}>{this.props.children}</Text>
      </Container>
    )
  }
}


export default Content;