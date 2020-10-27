import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Gore Health Apps</h1>
       <h1>(We have added Authentication!)</h1>
       <p>powered by the great mind of Jason Carver</p>
      </header>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator (App);
