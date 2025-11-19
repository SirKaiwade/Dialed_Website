import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const location = useLocation();
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
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
    if (location.pathname !== '/') {
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
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500"
            >
              FAQ
            </button>
            <Link
              to="/support"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500"
            >
              Support
            </Link>
          </div>

          {/* Right side - App Store + Theme Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://apps.apple.com"
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

