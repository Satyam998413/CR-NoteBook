
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Contact from './components/Contact';
import NoteState from './context/notes/NoteState';








function App() {
  return (
    <NoteState>
    <BrowserRouter>
    
    <Navbar/>
    <Alert message="this is wrong way!" />
 <Routes>
    
          <Route exact path="/" element={<About />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact  path="/signup" element={<Signup />} />
        
      </Routes>
 
  
    </BrowserRouter>
    </NoteState>
  );
}

export default App;
