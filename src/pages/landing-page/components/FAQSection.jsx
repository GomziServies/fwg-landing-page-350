import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "Are PT sessions live or recorded?",
      answer: `Daily live sessions (recorded backup available).`
    },
    {
      id: 2,
      question: "Do I need gym equipment?",
      answer: `No, all workouts can be done at home.`
    },
    {
      id: 3,
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