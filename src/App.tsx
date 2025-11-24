import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Support from './components/Support';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
// Team import hidden - uncomment to show
// import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] transition-colors duration-500 ease-in-out">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Footer />
          </>
        } />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Team route hidden - uncomment to show */}
        {/* <Route path="/team" element={<Team />} /> */}
      </Routes>
    </div>
  );
}

export default App;
