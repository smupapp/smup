import React from 'react';

import { Container } from '../../../../../components';

import { GridRow, Title } from '.';

import { DATA } from '../../../../../constants';


const STYLE = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    marginBottom: '10px',
    justifyContent: 'space-between',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  item: {
    marginTop: '20px',
    marginBottom: '20px'
  }
};


class Grid extends React.Component {

  render() {
    return (
      <Container theme={STYLE.container}>
        {DATA.map(data => {
          return (
            <Container theme={STYLE.item}>
              <Title>{data.title}</Title>
              <GridRow data={data.tools} />
            </Container>
          )
        })}
      </Container>
    )
  }
}


export default Grid;