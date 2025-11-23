import { FileText } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] transition-colors duration-500 ease-in-out">
      <Navigation />
      
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Terms of Service Section */}
          <section className="animate-fade-in">
            <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-gray-900 dark:text-white transition-colors duration-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">
                  Terms of Service
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500">
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Acceptance of Terms
                  </h3>
                  <p>
                    By downloading, installing, or using Dialed, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Description of Service
                  </h3>
                  <p>
                    Dialed is a visual time management application that provides a radial dial interface for viewing and managing your calendar and schedule. The app is available for iOS devices and syncs data through Apple's iCloud service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Use License
                  </h3>
                  <p>
                    Dialed is provided free to download. Premium features are available through in-app purchase. You are granted a limited, non-exclusive, non-transferable license to use Dialed for personal, non-commercial purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Premium Features
                  </h3>
                  <p>
                    Premium features are available through a one-time in-app purchase. All sales are final. Premium features are tied to your Apple ID and cannot be transferred to another account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    User Responsibilities
                  </h3>
                  <ul className="space-y-2 ml-4 list-disc">
                    <li>You are responsible for maintaining the confidentiality of your device and Apple ID</li>
                    <li>You agree not to use Dialed for any unlawful purpose</li>
                    <li>You will not attempt to reverse engineer, decompile, or disassemble the app</li>
                    <li>You will not use automated systems to access the app</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Data and Privacy
                  </h3>
                  <p>
                    Your calendar data is stored locally on your device and synced through Apple's iCloud service. We do not collect, store, or access your personal calendar data. Please review our Privacy Policy for more information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Intellectual Property
                  </h3>
                  <p>
                    Dialed and all its content, features, and functionality are owned by us and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute any part of Dialed without our express written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Disclaimer of Warranties
                  </h3>
                  <p>
                    Dialed is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the app will be uninterrupted, error-free, or secure. Your use of Dialed is at your own risk.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Limitation of Liability
                  </h3>
                  <p>
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of Dialed, including but not limited to loss of data or scheduling conflicts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Changes to Terms
                  </h3>
                  <p>
                    We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by updating the "Last Updated" date. Your continued use of Dialed after changes are posted constitutes acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Termination
                  </h3>
                  <p>
                    We reserve the right to terminate or suspend your access to Dialed at any time, with or without cause or notice, for any reason, including violation of these Terms of Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Governing Law
                  </h3>
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    Contact Us
                  </h3>
                  <p>
                    If you have any questions about these Terms of Service, please contact us at{' '}
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

