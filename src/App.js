import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from "react";

function App() {
  const navLinks = [
    {menuName : 'Home', menuHref : '/'},
    {menuName : 'About', menuHref : '/about'},
    {menuName : 'Contact', menuHref : '/contact'},
  ]

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = '#001634';
        document.body.style.color = '#e7e7e7';
    } else {
        setMode('light')
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    }
  }

  return (
    <>
      <Navbar title="textDecor" navLinks={navLinks} mode={mode} toggleMode={toggleMode}/>
      <Textarea mode={mode}/>
    </>
  );
}

export default App;
