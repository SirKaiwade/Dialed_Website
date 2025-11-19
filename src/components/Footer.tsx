import { Link } from 'react-router-dom';
import { Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#000000] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
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

          <div>
            <h4 className="text-gray-900 dark:text-white font-mono font-semibold mb-4 transition-colors duration-500">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Updates', 'FAQ'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-mono text-sm transition-colors duration-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-mono font-semibold mb-4 transition-colors duration-500">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Mail, href: '#' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-3 bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-white/20 rounded-xl hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-500 hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-500" />
                  </a>
                );
              })}
            </div>
          </div>
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
              to="/privacy"
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
