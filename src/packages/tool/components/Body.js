import React from 'react';

import { Container, Image } from '../../../components';
import { Content, Title } from '.';


const STYLES = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left'
  },
  overview: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left'
  },
  images: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left'
  },
  image: {
    width: '1000px',
    height: '600px'
  }
};


class Body extends React.Component {

  render() {

    return (
      <Container theme={STYLES.container}>
        <Container theme={STYLES.overview}>
          <Title>Overview</Title>
          <Content>
            {this.props.data.fullDescription}
          </Content>
        </Container>
        <Container theme={STYLES.images}>
          {this.props.data.images.map(image => {
            return <Image theme={STYLES.image} key={image} src={image} href={image} />
          })}
        </Container>
      </Container>
    );
  }
}


export default Body;
