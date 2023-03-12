import React from 'react';
import { DndProvider } from 'react-dnd';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Main from './pages/main';
import { GlobalStyle } from './theme/globalStyle';

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div className='general'>
      <Main />
      <GlobalStyle />
    </div>
  </DndProvider>
);

export default App;
