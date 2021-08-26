import React from 'react';

import { Container } from '../../../../../components';

import { CircleButton } from '.';


const STYLE = {
  CONTAINER: {
    width: '100%',
    display: 'flex',
    marginTop: '20px',
    marginBottom: '10px',
    justifyContent: 'space-between'
  }
};


class Grid extends React.Component {

  render() {
    return (
      <Container theme={STYLE.CONTAINER}>
        <CircleButton id='addNew' label='add new' />
        <CircleButton id='hotel' label='hotel' />
        <CircleButton id='school' label='school' />
        <CircleButton id='hospital' label='hospital' />
      </Container>
    )
  }
}


export default Grid;