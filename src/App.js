import React, { useState } from "react";
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';

function App() {
  const navLinks = [
    {menuName : 'Home', menuHref : '/'},
    {menuName : 'About', menuHref : '/about'},
    {menuName : 'Contact', menuHref : '/contact'},
  ]

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = '#001634';
        document.body.style.color = '#e7e7e7';
        showAlert('Dark mode has been enabled.', 'success')
    } else {
        setMode('light')
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        showAlert('Light mode has been enabled.', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <>
      <Navbar title="textDecor" navLinks={navLinks} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Textarea showAlert={showAlert} mode={mode}/>
    </>
  );
}

export default App;
