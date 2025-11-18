import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Screenshot {
  id: string;
  title: string;
  description: string;
  image: string;
}

const screenshots: Screenshot[] = [
  {
    id: 'dial',
    title: 'Dial View',
    description: 'See your entire day at a glance on a beautiful radial dial',
    image: '/screenshots/dial-light.png' // You'll add your screenshots here
  },
  {
    id: 'calendar',
    title: 'Calendar View',
    description: 'Plan and organize your time with a traditional calendar',
    image: '/screenshots/calendar-light.png'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Insights into your time management patterns',
    image: '/screenshots/analytics-light.png'
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Customize your experience with themes and preferences',
    image: '/screenshots/settings-light.png'
  }
];

export default function ScreenshotShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextScreenshot = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500">
      <div className="text-center mb-16 space-y-4 animate-fade-in">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">
          See Dialed in action
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-mono max-w-2xl mx-auto transition-colors duration-500">
          Experience the most beautiful way to manage your time
        </p>
      </div>

      {/* Main Screenshot Display */}
      <div className="relative max-w-4xl mx-auto mb-12">
        <div className="relative aspect-[9/19.5] bg-gray-50 dark:bg-gray-950 rounded-[3rem] p-2 border border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-500">
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-black">
            <img
              src={screenshots[currentIndex].image}
              alt={screenshots[currentIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                    <div class="text-center p-8">
                      <div class="text-gray-400 dark:text-gray-600 font-mono text-sm mb-2">Add screenshot:</div>
                      <div class="text-gray-600 dark:text-gray-400 font-mono">${screenshots[currentIndex].image}</div>
                    </div>
                  </div>
                `;
              }}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevScreenshot}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900 dark:bg-white border border-gray-200 dark:border-white/10 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 z-10"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="w-6 h-6 text-white dark:text-gray-900 transition-colors duration-500" />
        </button>
        <button
          onClick={nextScreenshot}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900 dark:bg-white border border-gray-200 dark:border-white/10 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 z-10"
          aria-label="Next screenshot"
        >
          <ChevronRight className="w-6 h-6 text-white dark:text-gray-900 transition-colors duration-500" />
        </button>

        {/* Current Screenshot Info */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-mono mb-2 transition-colors duration-500">
            {screenshots[currentIndex].title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-mono transition-colors duration-500">
            {screenshots[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Screenshot Thumbnails */}
      <div className="flex justify-center gap-4 flex-wrap">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? 'border-gray-900 dark:border-white scale-110'
                : 'border-gray-200 dark:border-white/10 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={screenshot.image}
              alt={screenshot.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <div class="text-gray-400 dark:text-gray-600 font-mono text-xs">${screenshot.id}</div>
                  </div>
                `;
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

