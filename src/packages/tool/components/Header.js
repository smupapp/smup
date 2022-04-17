import React from 'react';

import { ButtonPrimary, ButtonSecondary, Container, Image } from '../../../components';
import { Description, Title } from '.';

import { COLORS } from '../../../constants';


// TODO Move to constants
const IMAGE_URLS = {
  'github': 'https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png'
};


const STYLES = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: `${COLORS.PALETTE.LIGHT_GRAY}`
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: `${COLORS.PALETTE.LIGHT_GRAY}`
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center'
  },
  bottom: {
    paddingLeft: '5px',
    textAlign: 'left',
    alignItems: 'center'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    paddingLeft: '10px'
  },
  button: {
    marginRight: '20px'
  }
};


class Header extends React.Component {

  render() {

    return (
      <Container theme={STYLES.header}>
        <Container theme={STYLES.top}>
          <Image margin='0px' height='70px' width='70px' src={IMAGE_URLS[this.props.data.source]} />
          <Title>{this.props.data.title}</Title>
        </Container>
        <Container theme={STYLES.bottom}>
          <Description>{this.props.data.description}</Description>
        </Container>
        <Container theme={STYLES.buttons}>
          <Container theme={STYLES.button}>
            <ButtonPrimary>Setup this App</ButtonPrimary>
          </Container>
          <Container theme={STYLES.button}>
            <ButtonSecondary>View Docs</ButtonSecondary>
          </Container>
        </Container>
      </Container>
    );
  }
}


export default Header;
