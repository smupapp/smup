import React from 'react';
import { ipcRenderer } from 'electron';

import { ButtonPrimary, ButtonSecondary, Container, Image } from '../../../components';
import { Description, Progress, Title } from '.';

import { COLORS, EVENTS, STATES } from '../../../constants';


// TODO Move to constants
const IMAGE_URLS = {
  'github': 'https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png'
};

const DATA = {
  info: {
    state: STATES.COMPLETED,
    label: 'Setup in 3 steps',
    active: true,
    title: true
  },
  pre: {
    state: STATES.PENDING,
    label: 'Verify Pre-requisites'
  },
  install: {
    state: STATES.PENDING,
    label: 'Install app'
  },
  post: {
    state: STATES.PENDING,
    label: 'Start using app'
  }
}


const STYLES = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: `${COLORS.PALETTE.LIGHT_GRAY}`
  },
  header: {
    display: 'flex',
    flex: 4/5,
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
    flex: 1/3,
    width: '100%',
    fontWeight: '400',
    textAlign: 'left'
  }
};


let context;
class Header extends React.Component {
  constructor(props) {
    super(props);

    context = this;
    this.state = {
      data: { ...DATA },
      installed: false
    };

    this.sendEvent = this.sendEvent.bind(this);
    this.handleOpenDocs = this.handleOpenDocs.bind(this);
    this.handleOnSetup = this.handleOnSetup.bind(this);
    this.preInstallCheck = this.preInstallCheck.bind(this);
    this.preInstallStatusProgress = this.preInstallStatusProgress.bind(this);
    this.preSetupProgress = this.preSetupProgress.bind(this);
    this.setupProgress = this.setupProgress.bind(this);
  }


  componentDidMount() {
    this.addIPCListeners();
    this.preInstallCheck();
  }
 
  componentWillUnmount() {
    this.removeIPCListeners();
  }


  addIPCListeners() {
    this.addListener(EVENTS.PRE_SETUP_PROGRESS, this.preSetupProgress);
    this.addListener(EVENTS.PRE_INSTALLED, this.preInstallStatusProgress);
    this.addListener(EVENTS.SETUP_PROGRESS, this.setupProgress);
  }


  removeIPCListeners() {
    this.removeListener(EVENTS.PRE_SETUP_PROGRESS);
    this.removeListener(EVENTS.PRE_INSTALLED);
    
  }


  addListener(name, func) {
    ipcRenderer.on(name, func);
  }


  removeListener(name) {
    ipcRenderer.removeAllListeners(name);
  }


  sendEvent(name, data) {
    ipcRenderer.send(name, data);
  }


  handleOpenDocs() {
    this.sendEvent(EVENTS.OPEN_EXTERNAL_LINK, this.props.data.url);
  }

  
  handleOnSetup() {

    if (this.state.installed) {
      return;
    }

    this.sendEvent(EVENTS.PRE_SETUP, this.props.data.prerequisites);
  }


  preInstallCheck() {
    this.sendEvent(EVENTS.PRE_INSTALL, this.props.data.preInstall);
  }


  preInstallStatusProgress(event, status) {

    if (!context) {
      return;
    }

    if (!status) {
      context.setState({ data: DATA, installed: false });
      return;
    }

    const data = this.state.data;
    for (let key in data) {
      data[key].state = STATES.COMPLETED;
      data[key].active = true;
    }

    context.setState({ data, installed: true });
  };


  preSetupProgress(event, input) {

    if (!context) {
      return;
    }

    const active = input.state === STATES.COMPLETED;

    const data = this.state.data;
    data.pre = {
      ...data.pre,
      ...input,
      active
    };

    context.setState({ data: data });

    if (input.state === STATES.COMPLETED) {
      this.sendEvent(EVENTS.SETUP, this.props.data.installation);
    }
  }


  setupProgress(event, input) {

    if (!context) {
      return;
    }

    const data = this.state.data;
    const active = input.state === STATES.COMPLETED;

    data.install = {...data.install, ...input, active};

    if (input.state === STATES.COMPLETED) {
      data.post = {
        ...data.post, 
        active, state: input.state
      }

      context.setState({ installed: true });
    }

    context.setState({ data: data });
  }


  render() {

    return (
      <Container theme={STYLES.container}>
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
              { !this.state.installed && <ButtonPrimary onClick={this.handleOnSetup}>Setup this App</ButtonPrimary> }
              { this.state.installed && <ButtonSecondary>Installed</ButtonSecondary> }
            </Container>
            <Container theme={STYLES.button}>
              <ButtonPrimary onClick={this.handleOpenDocs}>View Docs</ButtonPrimary>
            </Container>
          </Container>
        </Container>
        <Container theme={STYLES.footer}>
          <Progress data={this.state.data} />
        </Container>
      </Container>
    );
  }
}


export default Header;
