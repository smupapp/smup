import React from 'react';
import { ipcRenderer } from 'electron';

import { ButtonPrimary, ButtonSecondary, Container, Image } from '../../../components';
import { Description, ProgressText, Title } from '.';

import { COLORS, EVENTS } from '../../../constants';


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
  },
  footer: {
    width: '100%',
    fontSize: '14px',
    fontWeight: '400',
    textAlign: 'left'
  }
};


let context;
class Header extends React.Component {
  constructor(props) {
    super(props);

    context = this;
    this.state = {};

    // this.initializeIpcListeners = this.addIPCListeneres.bind(this);
    this.handleOpenDocs = this.handleOpenDocs.bind(this);
    this.handleOnSetup = this.handleOnSetup.bind(this);
    this.setupProgress = this.setupProgress.bind(this);
  }


  componentDidMount() {
    this.addIPCListeners();
  }
 
  componentWillUnmount() {
    this.removeIPCListeners();
  }


  handleOpenDocs() {

    ipcRenderer.send(EVENTS.OPEN_EXTERNAL_LINK, this.props.data.url);
  }

  
  handleOnSetup() {

    const data = {
      prerequisites: this.props.data.prerequisites,
      installation: this.props.data.installation
    };

    ipcRenderer.send(EVENTS.SETUP, data);
  }


  addIPCListeners() {
    ipcRenderer.on(EVENTS.SETUP_PROGRESS, this.setupProgress);
  }


  removeIPCListeners() {
    ipcRenderer.removeAllListeners(EVENTS.SETUP_PROGRESS);
  }


  setupProgress(event, data) {

    if (!context) {
      return;
    }

    context.setState({ ...data });
  }


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
            <ButtonPrimary onClick={this.handleOnSetup}>Setup this App</ButtonPrimary>
          </Container>
          <Container theme={STYLES.button}>
            <ButtonSecondary onClick={this.handleOpenDocs}>View Docs</ButtonSecondary>
          </Container>
        </Container>
        <Container theme={STYLES.footer}>
          <ProgressText state={this.state.state}>{this.state.progress}</ProgressText>
        </Container>
      </Container>
    );
  }
}


export default Header;
