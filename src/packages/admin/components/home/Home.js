import React from 'react';

import { Container } from '../../../../components';

import { GridMenu, GridMenuTitle, Header, Search, TagLine } from './core';


const styles = {
  container: {
    main: {
      width: '100%',
      display: 'flex',
      overflow: 'hidden'
    },
    leftSideBar: {
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '40px',
      paddingBottom: '40px',
      paddingLeft: '240px',
      paddingRight: '240px',
    },
    rightSideBar: {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px'
    },
    leftHeader: {
      width: '100%',
      marginLeft: '40px',
      marginRight: '40px'
    }
  }
};


export default class AdminHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = (event) => {
    const target = event.currentTarget || event.target;
    if (target) {
      const id = target.id;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container theme={styles.container.main}>
          <Container theme={styles.container.leftSideBar}>
            <Container theme={styles.container.leftHeader}>
              <Header />
              <TagLine />
            </Container>
            <Search />
            <GridMenuTitle />
            <GridMenu />
          </Container>
          <Container theme={styles.container.rightSideBar}>
            Right Side Bar
          </Container>
        </Container>
      </React.Fragment>
    )
  }
}
