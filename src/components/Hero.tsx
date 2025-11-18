import { Clock } from 'lucide-react';

export default function Hero() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 bg-white dark:bg-[#000000] transition-colors duration-500 ease-in-out pt-32">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column - Mockup Image */}
        <div className="relative animate-fade-in">
          <div className="relative max-w-xs mx-auto">
            {/* Light mode mockup */}
            <img
              src="/screenshots/mockup-light.png"
              alt="Dialed App"
              className="w-full h-auto dark:hidden transition-opacity duration-500"
            />
            {/* Dark mode mockup */}
            <img
              src="/screenshots/mockup-dark.png"
              alt="Dialed App"
              className="hidden dark:block w-full h-auto transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-white/20 transition-colors duration-500">
            <Clock className="w-4 h-4 text-gray-900 dark:text-white transition-colors duration-500" />
            <span className="text-sm font-mono text-gray-900 dark:text-white font-medium">Visual Time Management</span>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight transition-colors duration-500">
              See your day<br />
              <span className="text-gray-900 dark:text-white">
                at a glance
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-mono leading-relaxed transition-colors duration-500">
              Schedule with precision. The most beautiful way to see and manage your time—schedule your day on a stunning radial dial.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a 
              href="#" 
              className="group inline-block hover:opacity-80 transition-opacity duration-300"
              aria-label="Download on the App Store"
            >
              {/* Black badge for light mode */}
              <img
                src="/screenshots/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                className="h-14 dark:hidden"
              />
              {/* White badge for dark mode */}
              <img
                src="/screenshots/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                alt="Download on the App Store"
                className="hidden dark:block h-14"
              />
            </a>
            <button 
              onClick={scrollToFeatures}
              className="px-8 py-4 bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-white/20 rounded-2xl text-gray-900 dark:text-white font-mono font-semibold hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-300 flex items-center justify-center gap-3"
            >
              Features
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">4.8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-mono transition-colors duration-500">App Store Rating</div>
            </div>
            <div className="h-12 w-px bg-gray-300 dark:bg-white/20 transition-colors duration-500" />
            <div className="space-y-1">
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-mono transition-colors duration-500">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
