import React from 'react';


import { AdminHome, AdminRequirement } from './packages/admin';


import './assets/css/App.css';





class App extends React.Component {
  render() {
    return (
      <div>
        {/* <AdminHome /> */}
        <AdminRequirement />
      </div>
    );
  }
}


export default App;
