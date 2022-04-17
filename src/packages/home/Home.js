import React from 'react';

import { Container } from '../../components';
import { CategoriesRow, Description, GridMenu, Search, Title } from './components';

import { COLORS } from '../../constants';


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


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
    this.handleOnChange = this.handleOnChange.bind(this);
  }


  handleOnChange = (event) => {

    const target = event.currentTarget || event.target;
    
    if (target) {

      const id = target.id;
      const value = target.value;

      this.setState({
        [id]: value
      });
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
            <Search onChange={this.handleOnChange} value={this.state.query}>Search tools from the directory</Search>
          </Container>
          <CategoriesRow />
          <GridMenu onClick={this.props.onClick} query={this.state.query} />
        </Container>
      </React.Fragment>
    )
  }
}


export default Home;
