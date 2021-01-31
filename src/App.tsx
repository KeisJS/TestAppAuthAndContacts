import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { mapRoutesToSwitch } from './routes/mapRoutesToSwitch';
import { routes } from './routes/routes';
import './fas.config';

function App() {
  return (
    <BrowserRouter>
      { mapRoutesToSwitch(routes) }
    </BrowserRouter>
  );
}

export default App;
