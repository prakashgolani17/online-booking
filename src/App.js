// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './componennt/Home';
import Contact from './componennt/Contact';
import About from './componennt/About'
import './App.css';

function App() {
  return (
    <>
      <Router> 
        <Routes>?
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact/:fname/:lname" element={<Contact />}></Route>
          <Route path="/contact/:fname" element={<Contact />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about/:name" element={<About />}></Route>
          <Route path="/about" element={<About />}></Route>


        </Routes>
      </Router>

    </>
  );
}

export default App;
