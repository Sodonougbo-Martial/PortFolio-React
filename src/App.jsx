//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Page/Home';
import About from './Components/Page/About';
import Contact from './Components/Page/Contact';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Realisation from './Components/Realisation';
import Fouter from './Components/Fouter';
import Projects from './Components/Page/Projects';
import SealAll from './Components/See-All';
import TitleProject from './Components/Title-Project';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>

      <Hero />
      <About />
      <TitleProject />
      <Realisation />
      <SealAll />
      <Skills />
      <Fouter />
      
      <Contact />

      <Projects />

      

    </div>
  );
}

export default App;
