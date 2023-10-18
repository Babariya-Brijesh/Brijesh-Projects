
// import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contect from './components/Contect';


function App() {
  
  return (
    < >

    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contect/>}/>
      </Routes>
     
    </>
  );
}

export default App;
