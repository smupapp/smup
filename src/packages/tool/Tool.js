import React from 'react';

import { Container } from '../../components';
import { Back, Body, Description, Header, Title } from './components';

import { COLORS } from '../../constants';


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


class Tool extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const data = {
      "title": "Sublist3r",
      "url": "https://github.com/aboul3la/Sublist3r",
      "description": "Fast subdomains enumeration tool for penetration testers",
      "source": "github"
    }

    return (
      <React.Fragment>
        <Container theme={STYLES.head.main}>
          <Container theme={STYLES.head.header}>
            <Header data={data}/>
            <Back onClick={this.props.onHome} />
          </Container>
        </Container>
        <Container theme={STYLES.body.main}>
          <Body />    
        </Container>
      </React.Fragment>
    )
  }
}


export default Tool;
