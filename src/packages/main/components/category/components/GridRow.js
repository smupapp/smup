import React from 'react';

import { Container } from '../../../../../components';

import { GridCard } from '.';


const STYLE = {
  CONTAINER: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
    marginBottom: '10px',
    justifyContent: 'space-between',
    overflow: 'auto',
    whiteSpace: 'nowrap',
  }
};


class Grid extends React.Component {

  render() {
    return (
      <Container theme={STYLE.CONTAINER}>
        {this.props.data.map(data => {
          return (
            <Container>
              <GridCard 
                id={data.id} 
                title={data.title}
                description={data.description}
                tools={data.tools} 
              />
            </Container>
          )
        })}
      </Container>
    )
  }
}


export default Grid;