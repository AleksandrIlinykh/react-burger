import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import burgerData from './utils/data';

function App() {
  return (
    <AppHeader burgerData={burgerData}/>
  );
}

export default App;
