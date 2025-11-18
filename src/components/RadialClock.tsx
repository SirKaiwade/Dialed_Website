import { Moon, Coffee, Briefcase, Heart, Pencil } from 'lucide-react';

interface Task {
  start: number;
  end: number;
  name: string;
  color: string;
  icon: string;
}

const tasks: Task[] = [
  { start: 6, end: 8, name: 'Morning Routine', color: 'from-gray-400 to-gray-500', icon: 'coffee' },
  { start: 9, end: 12, name: 'Deep Work', color: 'from-gray-500 to-gray-600', icon: 'briefcase' },
  { start: 12, end: 13, name: 'Lunch Break', color: 'from-gray-400 to-gray-500', icon: 'heart' },
  { start: 14, end: 17, name: 'Creative Time', color: 'from-gray-500 to-gray-600', icon: 'pencil' },
  { start: 18, end: 19, name: 'Exercise', color: 'from-gray-400 to-gray-500', icon: 'heart' },
];

const getIcon = (iconName: string) => {
  switch(iconName) {
    case 'coffee': return <Coffee className="w-4 h-4" />;
    case 'briefcase': return <Briefcase className="w-4 h-4" />;
    case 'heart': return <Heart className="w-4 h-4" />;
    case 'pencil': return <Pencil className="w-4 h-4" />;
    default: return null;
  }
};

export default function RadialClock() {
  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto">
      {/* Main clock container */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-500">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 400 400">
          {/* Hour markers */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15) - 90;
            const isMain = i % 6 === 0;
            const lineLength = isMain ? 30 : 15;
            const x1 = 200 + Math.cos((angle * Math.PI) / 180) * (200 - lineLength);
            const y1 = 200 + Math.sin((angle * Math.PI) / 180) * (200 - lineLength);
            const x2 = 200 + Math.cos((angle * Math.PI) / 180) * 200;
            const y2 = 200 + Math.sin((angle * Math.PI) / 180) * 200;

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(0,0,0,0.08)"
                strokeWidth={isMain ? "2" : "1"}
                className="dark:stroke-white dark:stroke-opacity-15 transition-colors duration-500"
              />
            );
          })}

          {/* Task segments */}
          {tasks.map((task, idx) => {
            const startAngle = (task.start / 24) * 360 - 90;
            const endAngle = (task.end / 24) * 360 - 90;
            const radius = 170;
            const strokeWidth = 40;

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = 200 + Math.cos(startRad) * radius;
            const y1 = 200 + Math.sin(startRad) * radius;
            const x2 = 200 + Math.cos(endRad) * radius;
            const y2 = 200 + Math.sin(endRad) * radius;

            const largeArc = endAngle - startAngle > 180 ? 1 : 0;

            return (
              <g key={idx} className="transition-all duration-300 hover:opacity-80 cursor-pointer group">
                <path
                  d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`}
                  fill="none"
                  stroke={`url(#gradient-${idx})`}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  className="group-hover:stroke-width-[45] transition-all duration-300"
                />
                <defs>
                  <linearGradient id={`gradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={task.color.includes('gray-400') ? '#9ca3af' : '#6b7280'} />
                    <stop offset="100%" stopColor={task.color.includes('gray-400') ? '#6b7280' : '#4b5563'} />
                  </linearGradient>
                </defs>
              </g>
            );
          })}
        </svg>

        {/* Center circle with day summary */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-full w-32 h-32 border-2 border-gray-200 dark:border-white/20 flex flex-col items-center justify-center shadow-lg transition-all duration-500">
            <div className="text-gray-900 dark:text-white text-sm font-mono font-medium transition-colors duration-500">Thursday</div>
            <div className="text-gray-900 dark:text-white text-2xl font-bold font-mono transition-colors duration-500">8h</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs font-mono transition-colors duration-500">scheduled</div>
          </div>
        </div>

        {/* Moon icon at midnight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 transition-all duration-500">
            <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-colors duration-500" />
          </div>
        </div>
      </div>

      {/* Task labels */}
      <div className="absolute -right-8 top-1/4 space-y-3 hidden lg:block">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 px-3 py-2 rounded-lg animate-fade-in transition-all duration-500"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="p-1.5 rounded-lg bg-gray-500 dark:bg-gray-600 shadow-sm transition-colors duration-500">
              <div className="text-white">
                {getIcon(task.icon)}
              </div>
            </div>
            <span className="text-gray-900 dark:text-white text-xs font-mono whitespace-nowrap font-medium transition-colors duration-500">{task.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
