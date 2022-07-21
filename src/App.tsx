import React from 'react';
import './App.scss';
import Buttons from './Components/buttons-component/Buttons';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Users from './Page/Users/Users';
import Repositories from './Page/Repositories/Repositories';

function App() {
  return (
    <div className="App" id='app'>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
