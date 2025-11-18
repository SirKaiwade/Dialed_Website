import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes Dialed different from other calendar apps?",
    answer: "Dialed visualizes your day as a 24-hour dial, making it instantly clear how your time is allocated. Instead of scrolling through lists or grids, you see your entire day at a glance with an intuitive radial interface."
  },
  {
    question: "How does pricing work?",
    answer: "Dialed is free to download and use! Premium features are available with a one-time lifetime purchase—no recurring subscription. Try all premium features free for 7 days, then unlock everything forever with a single payment."
  },
  {
    question: "Does my data sync across devices?",
    answer: "Yes, Dialed uses iCloud to seamlessly sync your schedule across all your Apple devices. Your data is encrypted and stays private—we never see or access your information."
  },
  {
    question: "Can I use Dialed offline?",
    answer: "Absolutely. Dialed is built as a native iOS app and works perfectly offline. All your data is stored locally on your device, and syncs when you're back online."
  },
  {
    question: "What iOS version is required?",
    answer: "Dialed requires iOS 16 or later to take advantage of the latest SwiftUI features and performance optimizations."
  },
  {
    question: "How do I reschedule tasks?",
    answer: "Simply drag and drop time segments around the dial to reschedule. Dialed makes rescheduling intuitive with haptic feedback and smooth animations."
  },
  {
    question: "Are widgets coming soon?",
    answer: "Yes! Home screen widgets are in active development and will be available in an upcoming update, giving you quick access to your schedule without opening the app."
  },
  {
    question: "Can I customize the app's appearance?",
    answer: "Yes, Dialed includes multiple themes including light and dark modes, with more customization options planned for future updates."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-6 py-16 max-w-4xl mx-auto bg-white dark:bg-[#000000] transition-colors duration-500">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white font-mono transition-colors duration-500 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mt-4">
          Everything you need to know about Dialed
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono pr-4 transition-colors duration-500">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="px-6 pb-5 text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed transition-colors duration-500">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
          Still have questions?{' '}
          <a href="mailto:ayhnassef@gmail.com" className="text-gray-900 dark:text-white hover:underline font-bold">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}

