import React from 'react';

import { Container, Text } from '../../../components';

import { COLORS } from '../../../constants';


const STYLE = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    cursor: 'pointer'
  },
  text: {
    color: COLORS.PALETTE.TEXT_GRAY,
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '1.57',
    marginRight: '10px',
    marginLeft: '15px'
  }
};


class Back extends React.Component {

  render() {
    return (
      <Container theme={STYLE.container} onClick={this.props.onClick}>
        <svg style={STYLE.text} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path>
        </svg>
        <Text theme={STYLE.text}>back to store</Text>
      </Container>
    )
  }
}


export default Back;