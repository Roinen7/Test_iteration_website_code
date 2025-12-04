import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import AIAppetite from './components/AIAppetite';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Awards />
      <AIAppetite />
      <Contact />
    </div>
  );
}

export default App;
