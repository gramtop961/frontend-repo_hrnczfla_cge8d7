import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} superporto — Full‑stack Developer</p>
          <div className="flex items-center gap-3">
            <a className="hover:text-white" href="#hero">Top</a>
            <a className="hover:text-white" href="#projects">Work</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
