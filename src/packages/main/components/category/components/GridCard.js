import React from 'react';

import { Card, Container } from '../../../../../components';

import { GridTitle } from '.';

import { COLORS } from '../../../../../constants';


const theme = {
  display: 'block',
  padding: 'auto',
  textAlign: 'center',
  border: 'none',
  boxShadow: `0 1px 30px ${COLORS.PALETTE.BACKGROUND}`
}


const STYLES = {
  CONTAINER: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  CARD: {
    width: '200px',
    height: '80px',
    margin: '5px',
    padding: '5px',
    backgroundColor: COLORS.PALETTE.LIGHT_GRAY,
    border: 'none',
    borderRadius: '5px',
    boxShadow: `1px 1px 5px ${COLORS.PALETTE.BORDER_GRAY}`,
    cursor: 'pointer',
    userSelect: 'none'
  }
};


export default class CircleButton extends React.Component {

  render() {

    const inputTheme = { ...theme, ...this.props }
    return (
      <Container theme={STYLES.CONTAINER}>
        <Card theme={STYLES.CARD}>
          <GridTitle>{this.props.title}</GridTitle>
        </Card>
      </Container>
    );
  }
}

