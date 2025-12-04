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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none"></div>
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
