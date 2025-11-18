import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AppShowcase from './components/AppShowcase';
import BentoGrid from './components/BentoGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] transition-colors duration-500 ease-in-out">
      <Navigation />
      <Hero />
      <AppShowcase />
      <BentoGrid />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
