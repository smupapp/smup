import React from 'react';

import { Card, Container, Image } from '../../../../../components';
import { GridTitle, GridCardDescription } from '.';

import { COLORS } from '../../../../../constants';


const IMAGE_URLS = {
  'github': 'https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png'
};


const STYLES = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${COLORS.PALETTE.WHITE}`
  },
  card: {
    textAlign: 'left',
    width: '300px',
    height: '150px',
    margin: '5px',
    padding: '1rem',
    background: `${COLORS.PALETTE.LIGHT_GRAY}`,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    userSelect: 'none',
    boxShadow: 'none'
  },
  cardHead: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center'
  },
  cardBottom: {
    padding: '5px'
  }
};


export default class GridCard extends React.Component {

  render() {

    return (
      <Container theme={STYLES.container}>
        <Card theme={STYLES.card}>
          <Container theme={STYLES.cardHead}>
            <Image margin='0px' src={IMAGE_URLS[this.props.data.source]} />
            <GridTitle>{this.props.data.title}</GridTitle>
          </Container>
          <Container theme={STYLES.cardBottom}>
            <GridCardDescription>{this.props.data.description}</GridCardDescription>
          </Container>
        </Card>
      </Container>
    );
  }
}

