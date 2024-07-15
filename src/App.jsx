//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Page/Home';
import About from './Components/Page/About';
import Contact from './Components/Page/Contact';
import Button from './Components/Button';
import Hero from './Components/Hero';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import Fouter from './Components/Fouter';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Fouter />

      <Button text="Submit" />

    </div>
  );
}

export default App;
