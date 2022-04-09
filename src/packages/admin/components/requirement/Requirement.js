import React from 'react';

import { Card, Container } from '../../../../components';

import { AddProductButton, Header, ProductRow } from './core';
import ProductRowHeader from './core/ProductRowHeader';


const STYLES = {
  CONTAINERS: {
    MAIN: {
      width: '100%',
      display: 'block',
      alignItems: 'left'
    },
    CONTENT: {
      margin: '10px 20px',
      paddingLeft: '100px',
      paddingRight: '100px'
    },
    HEADER: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '30px 0px'
    }
  },
  CARD: {
    MAIN: {

    }
  }
};


const DATA = [
  {
    id: 1,
    category: 'Pipes',
    itemName: 'Main Pipe (width 100cm)',
    quantity: 100,
    price: 'Click to add',
    vendor: 'Not Selected'
  },
  {
    id: 2,
    category: 'Taps',
    itemName: 'Normal Tap',
    quantity: 250,
    price: 'Click to add',
    vendor: 'Not Selected'
  }
];


const jsonToBase64 = (data) => {
  return Buffer.from(JSON.stringify(data))
    .toString("base64");
};



class Requirement extends React.Component {

  constructor() {
    super();

    this.state = {
      data: DATA
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }


  // TODO Temporary
  handleOnClick(event) {

    const data = this.state.data;

    data.push({
      id: data.length + 1,
      category: 'Taps',
      itemName: 'Normal Tap',
      quantity: 250,
      price: 'Click to add',
      vendor: 'Not Selected'
    });

    this.setState({
      data: data
    });
  }


  render() {
    return (
      <Container theme={STYLES.CONTAINERS.MAIN}>
        <Container theme={STYLES.CONTAINERS.CONTENT}>
          <Container theme={STYLES.CONTAINERS.HEADER}>
            <Header />
            <AddProductButton onClick={this.handleOnClick} />
          </Container>
          <Container>
            <ProductRowHeader />
            {this.state.data.map(item => {
              return (
                <ProductRow key={jsonToBase64(item)} data={item} />
              )
            })}
          </Container>
        </Container>
      </Container>
    )
  }
};


export default Requirement;
