import React from 'react';

import { Home, Tool } from './packages';

import './assets/css/App.css';

const ROUTES = {
  HOME: 'home',
  TOOL: 'tool'
};


const PAGES = {
  [ROUTES.HOME]: Home,
  [ROUTES.TOOL]: Tool
};


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: ROUTES.HOME
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnHome = this.handleOnHome.bind(this);
  }


  handleOnClick(event) {
    this.openTools();
  }


  handleOnHome(event) {
    this.openHome();
  }
 

  openHome() {
    this.switchPage(ROUTES.HOME);
  }

  
  openTools() {
    this.switchPage(ROUTES.TOOL);
  }


  switchPage(route) {

    this.setState({ route });
  }


  render() {

    const Page = PAGES[this.state.route];

    return (
      <div>
        <Page onClick={this.handleOnClick} onHome={this.handleOnHome} />
      </div>
    );
  }
}


export default App;
