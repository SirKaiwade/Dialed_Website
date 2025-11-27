import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('');
  
  // Normalize pathname (remove trailing slash)
  const pathname = location.pathname.replace(/\/$/, '') || '/';

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = ['showcase', 'features', 'faq'];
      const scrollPosition = window.scrollY + 100; // Offset for fixed nav

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      // If at top of page, clear active section
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (pathname !== '/') {
      window.location.href = '/';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#000000]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/screenshots/dialed_logo.png"
              alt="Dialed"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white font-mono">Dialed</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className={`font-mono text-sm transition-colors duration-500 ${
                pathname === '/' && activeSection === ''
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className={`font-mono text-sm transition-colors duration-500 ${
                pathname === '/' && activeSection === 'showcase'
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className={`font-mono text-sm transition-colors duration-500 ${
                pathname === '/' && activeSection === 'features'
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`font-mono text-sm transition-colors duration-500 ${
                pathname === '/' && activeSection === 'faq'
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              FAQ
            </button>
            <Link
              to="/team"
              className={`font-mono text-sm transition-colors duration-500 ${
                pathname === '/team'
                  ? '!text-gray-900 dark:!text-white'
                  : '!text-gray-600 dark:!text-gray-400 hover:!text-gray-900 dark:hover:!text-white'
              }`}
            >
              Team
            </Link>
            <Link
              to="/support"
              className={`font-mono text-sm transition-colors duration-500 ${
                pathname === '/support'
                  ? '!text-gray-900 dark:!text-white'
                  : '!text-gray-600 dark:!text-gray-400 hover:!text-gray-900 dark:hover:!text-white'
              }`}
            >
              Support
            </Link>
          </div>

          {/* Right side - App Store + Theme Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/dialed-radial-day-planner/id6755455859"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <img
                src="/screenshots/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src="/screenshots/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                alt="Download on the App Store"
                className="hidden dark:block h-10 w-auto"
              />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

