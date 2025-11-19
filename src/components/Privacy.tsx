import { Shield } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] transition-colors duration-500 ease-in-out">
      <Navigation />
      
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Policy Section */}
          <section className="animate-fade-in">
            <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-gray-900 dark:text-white transition-colors duration-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">
                  Privacy Policy
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500">
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Your Privacy Matters
                  </h3>
                  <p>
                    At Dialed, we believe your calendar data is personal and private. We've built Dialed with privacy as a core principle, ensuring your information stays where it belongs—on your devices and in your iCloud account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Data Collection
                  </h3>
                  <p>
                    Dialed does not collect, store, or transmit your personal calendar data to our servers. All your events, schedules, and information remain on your device and are synced only through Apple's iCloud service, which you control entirely.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    What We Don't Collect
                  </h3>
                  <ul className="space-y-2 ml-4 list-disc">
                    <li>Your calendar events or appointments</li>
                    <li>Contact information from your calendar</li>
                    <li>Location data</li>
                    <li>Personal notes or descriptions</li>
                    <li>Any identifiable information about your schedule</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Analytics & Crash Reports
                  </h3>
                  <p>
                    Dialed may use anonymous analytics to understand app usage patterns and improve the user experience. This data is aggregated and cannot be used to identify you. Crash reports help us fix bugs and improve stability. You can opt out of analytics in your device's privacy settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    iCloud Sync
                  </h3>
                  <p>
                    When you enable iCloud sync, your calendar data is encrypted and stored in your personal iCloud account. We do not have access to this data. Sync is controlled entirely by Apple's iCloud service and your device settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Third-Party Services
                  </h3>
                  <p>
                    Dialed does not integrate with third-party analytics services, advertising networks, or data brokers. Your data is not shared with or sold to any third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Children's Privacy
                  </h3>
                  <p>
                    Dialed is not intended for children under the age of 13. We do not knowingly collect information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Changes to This Policy
                  </h3>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Contact Us
                  </h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:ayhnassef@gmail.com" className="text-gray-900 dark:text-white hover:underline font-semibold">
                      ayhnassef@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

