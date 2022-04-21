import React from 'react';

import { Container, Image } from '../../../components';
import { Code, Content, Title } from '.';


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
  usages: {
    marginTop: '15px',
    marginBottom: '15px'
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
          <Title>Install Location</Title>
          <Content>
              <Container theme={STYLES.usages}>
                <Code>{this.props.data.installLocation}</Code>
              </Container>
          </Content>
        </Container>
        <Container theme={STYLES.overview}>
          <Title>Usage</Title>
          <Content>
            {this.props.data.usages && this.props.data.usages.map(usage => (
              <Container key={usage} theme={STYLES.usages}>
                <Code>{usage}</Code>
              </Container>
            ))}
          </Content>
        </Container>
        <Container theme={STYLES.overview}>
          <Title>Usage with other tools</Title>
          <Content>
            {this.props.data.combineUsages && this.props.data.combineUsages.map(usage => (
              <Container key={usage} theme={STYLES.usages}>
                <Code>{usage}</Code>
              </Container>
            ))}
          </Content>
        </Container>
      </Container>
    );
  }
}


export default Body;
