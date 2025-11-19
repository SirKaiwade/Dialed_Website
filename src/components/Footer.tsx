import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#000000] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img 
              src="/screenshots/dialed_logo.png" 
              alt="Dialed Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Dialed</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500">
            Visual time management reimagined for modern professionals.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            © 2025 Dialed. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/support"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500"
            >
              Support
            </Link>
            <Link
              to="/support#privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500"
            >
              Privacy Policy
            </Link>
            <Link
              to="/support#terms"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
