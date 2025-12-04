import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import AIAppetite from './components/AIAppetite';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import BackgroundGradient from './components/BackgroundGradient';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <BackgroundGradient />
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
