import { Calendar, BarChart3, Palette, Repeat, Move, Shield, Smartphone, Cloud, LayoutGrid, Crown } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="features" className="px-6 py-12 max-w-7xl mx-auto bg-white dark:bg-[#000000] transition-colors duration-500">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500 mb-2">
          Everything you need
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Drag & Drop */}
        <div className="md:col-span-2 lg:col-span-2 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <Move className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Drag & Drop</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500">
            Reschedule tasks by dragging segments around the dial.
          </p>
        </div>

        {/* Widgets */}
        <div className="md:col-span-2 lg:col-span-2 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <LayoutGrid className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Widgets</h3>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-mono rounded-full">Coming Soon</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500">
            Quick access to your schedule from your home screen.
          </p>
        </div>

        {/* Calendar View */}
        <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <Calendar className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Calendar</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            Traditional month view.
          </p>
        </div>

        {/* Smart Recurrence */}
        <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <Repeat className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Recurrence</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            Daily, weekly, monthly.
          </p>
        </div>

        {/* Analytics */}
        <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <BarChart3 className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Analytics</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            Time patterns and insights.
          </p>
        </div>

        {/* Themes */}
        <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <Palette className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Themes</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            Light, dark, and more.
          </p>
        </div>

        {/* Privacy First */}
        <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <Shield className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Privacy First</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            Your data stays on your device
          </p>
        </div>

        {/* iOS Native */}
        <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <Smartphone className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">iOS Native</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            Built for iPhone with haptics
          </p>
        </div>

        {/* iCloud Sync */}
        <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <Cloud className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">iCloud Sync</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            Sync across Apple devices
          </p>
        </div>

        {/* Lifetime Subscription */}
        <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-900 dark:bg-white rounded-lg transition-colors duration-500">
              <Crown className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">Free to Start</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
            7 day trial, then $34.99/year
          </p>
        </div>
      </div>
    </section>
  );
}
