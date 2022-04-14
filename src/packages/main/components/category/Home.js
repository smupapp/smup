import React from 'react';

import { Container } from '../../../../components';

import { GridMenu } from './components';


const styles = {
  container: {
    main: {
      maxWidth: '100%',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '0px',
      paddingBottom: '0px',
      paddingLeft: '20px',
      paddingRight: '20px'
    },
    header: {
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
          <GridMenu />
        </Container>
      </React.Fragment>
    )
  }
}
