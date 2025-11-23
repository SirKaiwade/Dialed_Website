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
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">Last updated: October 23, 2025</p>
                </div>

                <div>
                  <p className="mb-4">
                    Welcome to Dialed: Radial Day Planner (referred to as Dialed, we, us, or our). These Terms of Service (the Terms) govern your use of the Dialed: Radial Day Planner iOS application, widgets/complications, and related features (collectively, the Service). By installing or using the Service, you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    1. Eligibility
                  </h3>
                  <p>
                    You must be 18+ (or the age of majority where you live) and not barred from using the Service under applicable law or sanctions rules.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    2. How Dialed works (no account)
                  </h3>
                  <p>
                    Dialed runs locally on your Apple device. If you enable them, Dialed uses EventKit (Apple Calendar/Reminders) under your Apple ID. We do not operate Dialed servers to host your data. You are responsible for securing your device and Apple ID.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    3. Subscription and Payments
                  </h3>
                  <p>
                    Premium access is offered via Apple in-app purchases (IAP). Prices, billing periods (e.g., monthly, yearly), and any lifetime options are shown in-app and managed by Apple. Subscriptions auto-renew unless you cancel at least 24 hours before renewal in Settings ▸ Apple ID ▸ Subscriptions. Taxes may apply. Price changes take effect on the next billing period after Apple's notice. Lifetime purchases are non-recurring and tied to your Apple ID. A Restore Purchases option is available. Apple's billing and refund terms apply.
                  </p>
                  <p className="mt-2">
                    Prices are subject to change. Any price changes will be communicated in advance. Refunds are handled in accordance with the app store's policies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    4. Trials & Promotions
                  </h3>
                  <p>
                    Trials/intro pricing convert to the regular price unless canceled before they end. For EU/EEA/CH users, Apple may ask you to consent to immediate delivery and acknowledge that the 14-day withdrawal right ends once performance begins. Mandatory consumer rights remain unaffected.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    5. User Content & Ownership
                  </h3>
                  <p>
                    You own the tasks, schedules, categories, exports, and other content you enter (the User Content). You grant us a limited, non-exclusive license to store/process User Content only as needed to operate and improve the Service. You are responsible for backups. Disabling permissions or deleting the app may not remove items previously written to your Apple Calendars/Reminders.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    6. Acceptable Use
                  </h3>
                  <p>
                    You agree not to: violate laws or third-party rights; interfere with security or integrity; reverse engineer except as allowed by law; circumvent usage limits or license controls; misrepresent your affiliation; or use the Service to provide commercial/outsourced services without our consent. You must comply with applicable third party terms of agreement when using the Service (e.g., if you have a wireless data service agreement, you must not be in violation of such agreement when using the Service). We may suspend or terminate access for violations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    7. Intellectual Property
                  </h3>
                  <p>
                    We and our licensors own the Service (software, UI, design, trademarks). We grant you a limited, revocable, non-transferable license to install/use Dialed on Apple devices you own or control for personal, non-commercial use, subject to these Terms and Apple's rules. Such Licensed Application may be accessed and used by other accounts associated with the purchaser via Family Sharing or volume purchasing. Open-source components are licensed under their respective licenses (listed in-app).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    8. Disclaimers
                  </h3>
                  <p>
                    The Service is provided as is and as available. To the maximum extent permitted by law, we disclaim all warranties—express, implied, or statutory—including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components, or that it will achieve specific productivity outcomes. Dialed is a productivity tool and not a substitute for professional medical, psychological, legal, financial, or other advice. Your statutory rights (including Canadian consumer rights) remain unaffected.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    9. Limitation of Liability
                  </h3>
                  <p>
                    To the extent permitted by law, Dialed and its affiliates, directors, officers, employees, and agents are not liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, data, goodwill, or other intangible losses, arising out of or related to: (a) your use of or inability to use the Service; (b) decisions you make based on the Service; (c) unauthorized access to or alteration of your data; or (d) any other matter relating to the Service. Where liability cannot be excluded, our aggregate liability for all claims in any six-month period is limited to the amounts you paid to Dialed for the Service in that period (or CAD 10 if none). These limits do not exclude liability that cannot legally be excluded (e.g., death/personal injury caused by negligence, fraud). Your statutory rights remain unaffected.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    10. Apple-Required Terms
                  </h3>
                  <ul className="space-y-2 ml-4 list-disc">
                    <li>These Terms are between you and Dialed, not Apple. The EULA may not provide for usage rules for Licensed Applications that are in conflict with the Apple Media Services Terms and Conditions.</li>
                    <li>Apple is not responsible for maintenance or support. We are solely responsible for providing any maintenance and support services with respect to the Licensed Application, as specified in these Terms, or as required under applicable law.</li>
                    <li>If any warranty applies, Apple's obligation is limited to refunding the purchase price for the Licensed Application to you; Apple has no other warranty obligations. To the maximum extent permitted by applicable law, any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be our sole responsibility.</li>
                    <li>Dialed, not Apple, is responsible for addressing any claims relating to the Licensed Application or your possession and/or use of that Licensed Application, including but not limited to: (i) product liability claims; (ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation.</li>
                    <li>In the event of any third party claim that the Licensed Application or your possession and use of that Licensed Application infringes that third party's intellectual property rights, we, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim.</li>
                    <li>You must comply with Apple's terms and applicable laws (including export/sanctions).</li>
                    <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    11. Export & Sanctions Compliance
                  </h3>
                  <p>
                    You must comply with applicable export control and sanctions laws. You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties. You may not use the Service if you are on a government-restricted list or in a restricted territory.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    12. Changes, Suspension, Termination
                  </h3>
                  <p>
                    We may modify or discontinue the Service (or features) at any time. We may update these Terms; material changes will be shown in-app. Continued use after changes take effect constitutes acceptance. You may stop using the Service at any time. Sections intended to survive (including Sections 5–16) remain in effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    13. Governing Law & Disputes
                  </h3>
                  <p>
                    These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. If you are a consumer, you also benefit from mandatory protections of your local law. Disputes that cannot be resolved amicably will be submitted to the exclusive jurisdiction of the courts of the Province of Ontario, without prejudice to rights to bring claims in the courts of your habitual residence where permitted by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    14. Miscellaneous
                  </h3>
                  <ul className="space-y-2 ml-4 list-disc">
                    <li><strong>Severability.</strong> If a provision is unenforceable, the rest remains in effect.</li>
                    <li><strong>No waiver.</strong> A failure to enforce is not a waiver.</li>
                    <li><strong>Assignment.</strong> You may not assign these Terms; we may assign them in connection with a merger, acquisition, or asset transfer.</li>
                    <li><strong>Force majeure.</strong> We are not liable for delays/failures due to events beyond reasonable control.</li>
                    <li><strong>Entire agreement.</strong> These Terms and the Privacy Policy are the entire agreement.</li>
                    <li><strong>Developer Information.</strong> For any questions, complaints, or claims with respect to the Licensed Application, please contact: Dialed, 310 Bloor St W, M5S1W4, Toronto, ON, Canada. Email: <a href="mailto:ayhnassef@gmail.com" className="text-gray-900 dark:text-white hover:underline font-semibold">ayhnassef@gmail.com</a></li>
                  </ul>
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

