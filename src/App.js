import '../src/assets/css/styles.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Experience />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
    </Router>
  );
}

export default App;
