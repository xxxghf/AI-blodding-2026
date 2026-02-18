import Hero from './sections/Hero';
import About from './sections/About';
import Character from './sections/Character';
import NoCamera from './sections/NoCamera';
import Monetization from './sections/Monetization';
import Growth from './sections/Growth';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="relative bg-black min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Character />
      <NoCamera />
      <Monetization />
      <Growth />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
