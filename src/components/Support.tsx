import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, HelpCircle, Send, CheckCircle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Support() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    // For now, we'll use mailto as fallback
    const mailtoLink = `mailto:ayhnassef@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] transition-colors duration-500 ease-in-out">
      <Navigation />
      
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-mono mb-4 transition-colors duration-500">
              Support
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-mono transition-colors duration-500">
              We're here to help you get the most out of Dialed
            </p>
          </div>

          {/* Contact Section */}
          <section className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-gray-900 dark:text-white transition-colors duration-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">
                  Contact Us
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-2 transition-colors duration-500">
                    Email us directly
                  </p>
                  <a 
                    href="mailto:ayhnassef@gmail.com" 
                    className="text-gray-900 dark:text-white hover:underline font-mono font-semibold transition-colors duration-500"
                  >
                    ayhnassef@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-2 transition-colors duration-500">
                    Response time
                  </p>
                  <p className="text-gray-900 dark:text-white font-mono transition-colors duration-500">
                    Typically within 24-48 hours
                  </p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-green-800 dark:text-green-300 font-mono text-sm">
                    Your email client should open. If not, please email us directly at ayhnassef@gmail.com
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-mono text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-white/20 rounded-xl text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-mono text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-white/20 rounded-xl text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-mono text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-white/20 rounded-xl text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all duration-300"
                    >
                      <option value="">Select a topic...</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Billing Question">Billing Question</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-white/20 rounded-xl text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-white/20 rounded-xl text-gray-900 dark:text-white font-mono font-semibold hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-gray-900 dark:text-white transition-colors duration-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500">
                  Troubleshooting
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono mb-2 transition-colors duration-500">
                    App won't launch or crashes
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500 ml-4 list-disc">
                    <li>Ensure your device is running iOS 16 or later</li>
                    <li>Force quit the app and restart it</li>
                    <li>Restart your iPhone or iPad</li>
                    <li>Check for app updates in the App Store</li>
                    <li>If the issue persists, delete and reinstall the app (your data will sync back via iCloud)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono mb-2 transition-colors duration-500">
                    Events not syncing across devices
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500 ml-4 list-disc">
                    <li>Verify iCloud is enabled in Settings → [Your Name] → iCloud</li>
                    <li>Check that iCloud Drive is turned on</li>
                    <li>Ensure you're signed into the same Apple ID on all devices</li>
                    <li>Make sure you have an active internet connection</li>
                    <li>Wait a few minutes for sync to complete (it can take up to 5 minutes)</li>
                    <li>Try pulling down to refresh the app</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono mb-2 transition-colors duration-500">
                    Premium features not unlocking
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500 ml-4 list-disc">
                    <li>Check your App Store purchase history to confirm the purchase completed</li>
                    <li>Restore purchases: Go to Settings within Dialed and tap "Restore Purchases"</li>
                    <li>Ensure you're signed into the same Apple ID used for the purchase</li>
                    <li>Wait a few moments and restart the app</li>
                    <li>If issues persist, contact us with your purchase receipt</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono mb-2 transition-colors duration-500">
                    Radial dial not displaying correctly
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500 ml-4 list-disc">
                    <li>Try switching between light and dark mode</li>
                    <li>Force quit and restart the app</li>
                    <li>Check if you have any events scheduled (the dial may appear empty if no events exist)</li>
                    <li>Ensure your device has sufficient storage space</li>
                    <li>Update to the latest version of Dialed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono mb-2 transition-colors duration-500">
                    Can't drag and drop events
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500 ml-4 list-disc">
                    <li>Make sure you're using a long press to initiate the drag</li>
                    <li>Ensure the event isn't locked or read-only</li>
                    <li>Check that you have edit permissions for the calendar</li>
                    <li>Try restarting the app if the gesture isn't responding</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono mb-2 transition-colors duration-500">
                    General performance issues
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500 ml-4 list-disc">
                    <li>Close other apps to free up memory</li>
                    <li>Restart your device</li>
                    <li>Check for iOS updates in Settings → General → Software Update</li>
                    <li>Ensure you have at least 500MB of free storage</li>
                    <li>Update Dialed to the latest version</li>
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

