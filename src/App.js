
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Signup2 from './components/Signup2';
import Contact from './components/Contact';
import NoteState from './context/notes/NoteState';
import Home from './components/Home';
import Login from './components/Login';
import { useState } from 'react';









function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(msg,type)=>{
    setAlert({msg:msg,type:type,});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <NoteState>
    <BrowserRouter>
    
    <Navbar/>
    <Alert/>
    <div className='container my-3'>
 <Routes>
    
   
          <Route exact path="/" element={ <Home showAlert={showAlert} />} />
          <Route exact path="/about" element={<About  />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact  path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact  path="/signup" element={<Signup2 showAlert={showAlert} />} />
        
      </Routes>
 
      </div>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;
