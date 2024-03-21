import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);

    /*
    if (cls === 'light') {
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      // setAlertMessage('Dark mode enabled', 'success');
    }
    else {
      document.body.style.color = 'white';
      // document.body.style.backgroundColor = 'white';
      // setAlertMessage('Dark mode disabled', 'success');
    }
    */

    if (mode === 'light') {
      setMode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#212525';
      setAlertMessage('Dark mode enabled', 'success');
      // document.title = 'Text Utils - Dark Mode';
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      setAlertMessage('Dark mode disabled', 'success');
      // document.title = 'Text Utils - Light Mode';
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
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alertMessage={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm mode={mode} setAlertMessage={setAlertMessage}
            heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" />} />

          <Route exact path='/about' element={<About mode={mode} />} />
        </Routes>
      </Router>

      {/* For deployment only */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alertMessage={alert} />
      <TextForm heading="Enter the text below to analyze" mode={mode} setAlertMessage={setAlertMessage} /> */}

    </>
  );
}

export default App;
