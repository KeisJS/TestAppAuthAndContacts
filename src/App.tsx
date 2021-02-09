import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { mapRoutesToSwitch } from './features/routes/mapRoutesToSwitch';
import { routes } from './features/routes/routes';
import './app/fas.config';

function App() {
  return (
    <BrowserRouter>
      { mapRoutesToSwitch(routes) }
    </BrowserRouter>
  );
}

export default App;
