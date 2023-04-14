import React  from 'react';
import About from './components/About';
import Backtotop from './components/Backtotop';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Services from './components/Services';
import { Skills } from './components/Skills';

// import components

const App = () => {
  return(
  <div>
    <Header/>
    <Hero/>
    <Brands/>
    <About/>
    <Skills/>
    <Portfolio/>
    {/* <Project/> */}
    <Services/>
    <Contact/>
    <Footer/>
    <Backtotop/>
   
  </div>
  )
};

export default App;
