import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [theme, setTheme] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#212525';
      setAlertMessage('Dark mode enabled', 'success');
      document.title = 'Text Utils - Dark Mode';
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      setAlertMessage('Dark mode disabled', 'success');
      document.title = 'Text Utils - Light Mode';
    }
    else if (mode === 'red') {
      setMode('red');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#A0153E';
      setAlertMessage('Red mode disabled', 'success');
    }
  }

  const setAlertMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alertMessage={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the text below to analyze" mode={mode} setAlertMessage={setAlertMessage} />} />

          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alertMessage={alert} />
      <TextForm heading="Enter the text below to analyze" mode={mode} setAlertMessage={setAlertMessage} />

    </>
  );
}

export default App;
