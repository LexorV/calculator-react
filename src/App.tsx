import React from 'react';
import './App.css';
import Main from './pages/main';
import GlobalStyle from './theme/globalStyle';

const App = () => (
  <div className='general'>
    <Main />
    <GlobalStyle />
  </div>
);

export default App;
