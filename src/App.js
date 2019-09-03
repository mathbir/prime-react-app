import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Router from './Router';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <>
      <>
          <BrowserRouter>
            <Navbar/>
            <Router/>
          </BrowserRouter>
          
        </>
    </>
  );
}

export default App;
