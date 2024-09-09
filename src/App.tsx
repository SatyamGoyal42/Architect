import React from 'react';
import './App.css';
import About from './pages/about/About';
import NavBar from './components/Navbar/NavBar';
import Ind_page from './pages/about/Ind_page';

function App() {
   return (
    <>  
        {/* <NavBar/> */}
        <About/>
        <Ind_page/>
           
    </>
  );
}

export default App;
