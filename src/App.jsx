import React from 'react';
import './App.css'; // Your global styles
import CursorEffect from './Components/CursorEffect'; // Import CursorEffect
import Hero from './Pages/Hero'; // Your Hero component
import About from './Pages/About'; // Your About component
import NavBar from './Pages/NavBar';
import Contact from './Pages/Contact';
import Footer from './Pages/footer';

function App() {
  return (
    <div className="bg-[#031306]">
      <NavBar/>
      <Hero />
      <About/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
