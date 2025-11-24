import { Users } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Team() {
  const teamMembers = [
    {
      name: 'Adam Nassef',
      image: '/screenshots/Adam.jpg',
      role: 'Founder & CEO',
      bio: 'Building Dialed to help people see and manage their day more effectively.'
    },
    {
      name: 'Jonah Bainbridge',
      image: '/screenshots/Jonah.png',
      role: 'Product Data Analyst',
      bio: 'Analyzing user behavior and product metrics to drive data-informed decisions.'
    },
    {
      name: 'Thomas Weber',
      image: '/screenshots/Thomas.png',
      role: 'Product Sales Manager',
      bio: 'Connecting users with Dialed and managing product sales strategies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] transition-colors duration-500 ease-in-out">
      <Navigation />
      
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-mono mb-4 transition-colors duration-500">
              Our Team
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-mono transition-colors duration-500">
              The people behind Dialed
            </p>
          </div>

          {/* Team Section */}
          <section className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-10 lg:p-12 transition-all duration-500">
              <div className="flex items-center gap-3 mb-10">
                <Users className="w-6 h-6 text-gray-900 dark:text-white transition-colors duration-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">
                  Meet the Team
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className="text-center animate-fade-in px-2"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className={`mb-6 ${member.name === 'Jonah Bainbridge' ? 'overflow-hidden rounded-full w-32 h-32 mx-auto border-4 border-gray-200 dark:border-white/20' : ''}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-32 h-32 rounded-full mx-auto object-cover transition-all duration-500 hover:scale-105 ${
                          member.name === 'Jonah Bainbridge' 
                            ? 'scale-150' 
                            : 'border-4 border-gray-200 dark:border-white/20'
                        }`}
                        style={
                          member.name === 'Jonah Bainbridge'
                            ? { objectPosition: 'center center' }
                            : undefined
                        }
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono mb-3 transition-colors duration-500">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-4 transition-colors duration-500">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

