import React from 'react'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () =>  (
  <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Journey />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  </>
)

export default App
