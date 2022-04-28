import React from 'react';

import { Container, Text } from '../../../components';

import { COLORS } from '../../../constants';


const STYLE = {
  container: {
    width: 'fit-content',
    margin: '0px',
    backgroundColor: COLORS.PALETTE.MEDIUM_GRAY,
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '2px',
    paddingBottom: '2px'
  },
  text: {
    color: COLORS.PALETTE.TEXT_BLACK,
    fontSize: '13px',
    fontWeight: '400'
  }
};


class Code extends React.Component {

  render() {
    return (
      <Container theme={STYLE.container}>
        <Text theme={STYLE.text}>{this.props.children}</Text>
      </Container>
    )
  }
}


export default Code;