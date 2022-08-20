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
    } else {
        setMode('light')
    }
  }

  return (
    <>
      <Navbar title="textDecor" navLinks={navLinks} mode={mode} toggleMode={toggleMode}/>
      <Textarea/>
    </>
  );
}

export default App;
