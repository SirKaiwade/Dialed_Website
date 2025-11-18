import { Zap, Shield, Smartphone, Cloud } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Native SwiftUI performance'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data stays on your device'
  },
  {
    icon: Smartphone,
    title: 'iOS Native',
    description: 'Built for iPhone with haptics'
  },
  {
    icon: Cloud,
    title: 'iCloud Sync',
    description: 'Sync across Apple devices'
  }
];

export default function Features() {
  return (
    <section className="px-6 pt-6 pb-12 max-w-7xl mx-auto bg-white dark:bg-[#000000] transition-colors duration-500">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="p-3 bg-gray-900 dark:bg-white rounded-xl w-fit mb-4 transition-colors duration-500">
                <Icon className="w-6 h-6 text-white dark:text-gray-900 transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono mb-2 transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
