import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

 const faqs = [
  {
    id: 1,
    question: "What is included in the ₹349/month program?",
    answer: `The program includes a complete online transformation plan with personalized workouts, nutrition guidance, progress tracking, and access to expert support.`
  },
  {
    id: 2,
    question: "Do I need any special equipment for the workouts?",
    answer: `No, most workouts are designed for home use with minimal or no equipment. If equipment like dumbbells or resistance bands are required, alternatives are suggested.`
  },
  {
    id: 3,
    question: "Can I join if I am a beginner?",
    answer: `Absolutely! The program is suitable for all levels, from beginners to advanced participants. Workouts and diet plans are tailored to your current fitness level.`
  },
  {
    id: 4,
    question: "How will I access the program?",
    answer: `You'll receive access through our online platform. Workouts, diet charts, and resources are available in video, PDF, and text formats.`
  },
  {
    id: 5,
    question: "Do I need to follow the program at a specific time?",
    answer: `No, you can follow the program at your own pace. However, consistency is key to achieving the best results.`
  },
  {
    id: 6,
    question: "Will there be live sessions or just recorded content?",
    answer: `The program includes both recorded content and occasional live Q&A sessions to address your doubts and track progress.`
  },
  {
    id: 7,
    question: "What kind of support can I get from your side?",
    answer: `You can reach out for guidance on workouts, nutrition, or troubleshooting via chat or email support. Our team is available to help you stay on track.`
  },
  {
    id: 8,
    question: "Is this program suitable if I have health issues or injuries?",
    answer: `If you have specific health concerns, it's recommended to consult your doctor before starting. Modifications can be suggested based on your condition.`
  },
  {
    id: 9,
    question: "How soon can I expect results?",
    answer: `Results vary depending on your starting point, consistency, and effort. Most participants notice improvements in strength, energy, and fitness within 4-6 weeks.`
  },
  {
    id: 10,
    question: "Are the sessions live or recorded?",
    answer: `Our weight loss program includes daily live sessions to keep you motivated and accountable. If you miss a session, don't worry — a recorded backup is always available so you can continue your journey without any breaks. `
  },
  {
    id: 11,
    question: "Do I need gym equipment?",
    answer: `No, all workouts can be done at home.`
  },
  {
    id: 12,
    question: "How do I join sessions?",
    answer: `Zoom/Google Meet link sent daily via WhatsApp/email.`
  }
];


  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about FWG coaching for Indians abroad
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq) => (
            <div
              key={faq?.id}
              className="bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevation"
            >
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq?.question}
                </h3>
                <div className={`transform transition-transform duration-300 ${
                  openFAQ === faq?.id ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={24} color="var(--color-primary)" />
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === faq?.id 
                  ? 'max-h-96 opacity-100 pb-6' :'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-foreground font-medium mb-1">WhatsApp Support</div>
            <div className="text-muted-foreground text-sm">Across all time zones</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-2">&lt;2 hrs</div>
            <div className="text-foreground font-medium mb-1">Response Time</div>
            <div className="text-muted-foreground text-sm">For all queries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-2">100%</div>
            <div className="text-foreground font-medium mb-1">Satisfaction Rate</div>
            <div className="text-muted-foreground text-sm">Money-back guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;