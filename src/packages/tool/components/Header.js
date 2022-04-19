import React from 'react';
import { ipcRenderer } from 'electron';

import { ButtonPrimary, ButtonSecondary, Container, Image } from '../../../components';
import { Description, Progress, Title } from '.';

import { COLORS, EVENTS } from '../../../constants';


// TODO Move to constants
const IMAGE_URLS = {
  'github': 'https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png'
};


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
      data: {
        info: {
          state: 'completed',
          label: 'Setup in 3 steps',
          active: true,
          title: true
        },
        pre: {
          state: 'pending',
          label: 'Verify Pre-requisites'
        },
        install: {
          state: 'pending',
          label: 'Install app'
        },
        post: {
          state: 'pending',
          label: 'Start using app'
        }
      }
    };

    // this.initializeIpcListeners = this.addIPCListeneres.bind(this);
    this.handleOpenDocs = this.handleOpenDocs.bind(this);
    this.handleOnSetup = this.handleOnSetup.bind(this);
    this.preSetupProgress = this.preSetupProgress.bind(this);
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

    ipcRenderer.send(EVENTS.PRE_SETUP, data);
  }


  addIPCListeners() {
    ipcRenderer.on(EVENTS.PRE_SETUP_PROGRESS, this.preSetupProgress);
  }


  removeIPCListeners() {
    ipcRenderer.removeAllListeners(EVENTS.PRE_SETUP_PROGRESS);
  }


  preSetupProgress(event, input) {

    if (!context) {
      return;
    }

    const active = input.state === 'completed';

    const data = this.state.data;
    data.pre = {
      ...data.pre,
      ...input,
      active
    };

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
              <ButtonPrimary onClick={this.handleOnSetup}>Setup this App</ButtonPrimary>
            </Container>
            <Container theme={STYLES.button}>
              <ButtonSecondary onClick={this.handleOpenDocs}>View Docs</ButtonSecondary>
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
