import { lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { NeonBackground } from './components/effects/NeonBackground';

const About = lazy(() => import('./components/sections/About').then((m) => ({ default: m.About })));
const Projects = lazy(() =>
  import('./components/sections/Projects').then((m) => ({ default: m.Projects })),
);
const Skills = lazy(() => import('./components/sections/Skills').then((m) => ({ default: m.Skills })));
const Contact = lazy(() =>
  import('./components/sections/Contact').then((m) => ({ default: m.Contact })),
);

function SectionLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-red border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <NeonBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-red focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
