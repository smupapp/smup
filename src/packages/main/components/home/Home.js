import React from 'react';

import { Container } from '../../../../components';
import { CategoriesRow, Description, GridMenu, Search, Title } from './components';

import { COLORS } from '../../../../constants';


const STYLES = {
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
      paddingRight: '20px',
      backgroundColor: `${COLORS.PALETTE.WHITE}`
    },
    header: {
      width: '100%',
      margin: '10px',
      textAlign: 'center'
    },
    middle: {
      width: '60%'
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
        <Container theme={STYLES.container.main}>
          <Container theme={STYLES.container.header}>
            <Title>Bug Bounty Tools</Title>
            <Description>100+ bug bounty tools to speed up your bug hunting</Description>
          </Container>
          <Container theme={STYLES.container.middle}>
            <Search>Search tools from the directory</Search>
          </Container>
          <CategoriesRow />
          <GridMenu />
        </Container>
      </React.Fragment>
    )
  }
}
