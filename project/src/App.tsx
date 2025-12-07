import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import AIAppetite from './components/AIAppetite';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Background from './components/Background';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Awards />
        <AIAppetite />
        <Contact />
      </div>
    </div>
  );
}

export default App;
