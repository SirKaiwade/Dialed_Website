interface AppView {
  id: string;
  title: string;
  imageLight: string;
  imageDark: string;
}

const appViews: AppView[] = [
  {
    id: 'dial',
    title: 'Dial View',
    imageLight: '/screenshots/Light-Dial.png',
    imageDark: '/screenshots/Dark-Dial.png'
  },
  {
    id: 'calendar',
    title: 'Calendar View',
    imageLight: '/screenshots/Light-Calendar.png',
    imageDark: '/screenshots/dark-calendar.png'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    imageLight: '/screenshots/Analytics-light.png',
    imageDark: '/screenshots/Dark-Analytics.png'
  }
];

export default function AppShowcase() {
  return (
    <section id="showcase" className="px-6 py-16 max-w-7xl mx-auto bg-white dark:bg-[#000000] transition-colors duration-500">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500 mb-2">
          Every view, perfectly designed
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {appViews.map((view, index) => (
          <div
            key={view.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative max-w-xs mx-auto mb-4">
              <div className="relative aspect-[9/19.5] bg-gray-50 dark:bg-[#0a0a0a] rounded-[3rem] p-2 border border-gray-200 dark:border-white/10 shadow-xl transition-all duration-500">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#000000]">
                  <img
                    src={view.imageLight}
                    alt={`${view.title} - Light mode`}
                    className="w-full h-full object-cover dark:hidden transition-opacity duration-500"
                  />
                  <img
                    src={view.imageDark}
                    alt={`${view.title} - Dark mode`}
                    className="hidden dark:block w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono text-center transition-colors duration-500">
              {view.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
