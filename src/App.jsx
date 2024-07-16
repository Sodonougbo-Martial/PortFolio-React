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
      <Realisation />
      <Skills />
      <Fouter />

    </div>
  );
}

export default App;
