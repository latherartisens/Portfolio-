import { Navbar, Hero, Services, Projects, Testimonials, Process, Journey, Pricing, Stats, Blog, Contact, Footer } from './components/Portfolio';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent-green selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Process />
        <Journey />
        <Pricing />
        <Stats />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
