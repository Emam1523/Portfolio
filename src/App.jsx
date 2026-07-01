import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LightRays from './components/LightRays';

function App() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-white dark:bg-[#060910] text-gray-900 dark:text-white transition-colors duration-300 relative overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={2.5}
          fadeDistance={0.8}
          saturation={0.6}
          mouseInfluence={0.15}
          followMouse={true}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="py-8 sm:py-12 px-4 text-center border-t border-gray-200 dark:border-white/5">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Emam Hassan.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
