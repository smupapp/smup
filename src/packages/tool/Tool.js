import React from 'react';

import { Container } from '../../components';
import { Back, Body, Description, Header, Title } from './components';

import { COLORS } from '../../constants';
import { Context } from '../../lib';


const STYLES = {
  head: {
    main: {
      width: '100%',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '40px',
      paddingBottom: '40px',
      paddingLeft: '100px',
      paddingRight: '100px',
      backgroundColor: COLORS.PALETTE.LIGHT_GRAY
    },
    header: {
      width: '100%',
      margin: '10px',
      textAlign: 'center',
      backgroundColor: COLORS.PALETTE.LIGHT_GRAY,
      paddingLeft: '0px',
      paddingRight: '0px'
    },
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
      alignItems: 'left',
      textAlign: 'left',
      backgroundColor: COLORS.PALETTE.WHITE
    }
  },
  body: {
    main: {
      width: '70%',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'left',
      flexDirection: 'column',
      paddingTop: '40px',
      paddingBottom: '40px',
      paddingLeft: '100px',
      paddingRight: '100px',
      backgroundColor: COLORS.PALETTE.WHITE
    },
  }
};

const SELECTED_TOOL = 'selected_tool';


class Tool extends React.Component {

  constructor(props) {
    super(props);
  }


  getData() {
    return Context.get(SELECTED_TOOL, {});
  }


  render() {

    const data = this.getData();

    return (
      <React.Fragment>
        <Container theme={STYLES.head.main}>
          <Container theme={STYLES.head.header}>
            <Back onClick={this.props.onHome} />
            <Header data={data}/>
          </Container>
        </Container>
        <Container theme={STYLES.body.main}>
          <Body data={data} />
        </Container>
      </React.Fragment>
    )
  }
}


export default Tool;
