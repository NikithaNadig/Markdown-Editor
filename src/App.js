import React from 'react';
import './App.css';
import Markdown from './components/markdown';
import Header from './components/header'

function App() {
  return (
    <div className="App">
    <Header />
    <Markdown />  
    </div>
  );
}

export default App;
