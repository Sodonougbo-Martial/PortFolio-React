//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Page/Home';
import Contact from './Components/Page/Contact';
import Projects from './Components/Page/Projects';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/> } />
          <Route path="projects" element={<Projects/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
