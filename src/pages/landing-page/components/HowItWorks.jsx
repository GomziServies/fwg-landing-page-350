import React, { useState } from 'react';
import Button from '../../../components/ui/Button';

const HowItWorks = () => {
  const [selectedPath, setSelectedPath] = useState('demo');

  const demoPTSteps = [
    {
      step: 1,
      title: 'Book Your Free Demo',
      description: 'Schedule a 30-minute demo session at your convenient time',
      icon: '📅',
      details: [
        'Choose your preferred time slot',
        'Receive Zoom meeting link',
        'No payment required'
      ]
    },
    {
      step: 2,
      title: 'Experience Live Coaching',
      description: 'Join a real coaching session and see our methods in action',
      icon: '🎯',
      details: [
        'Live workout demonstration',
        'Nutrition guidance preview',
        'Q&A with certified coach'
      ]
    },
    {
      step: 3,
      title: 'Get Personalized Insights',
      description: 'Receive initial assessment and program recommendations',
      icon: '📊',
      details: [
        'Body composition analysis',
        'Goal-specific recommendations',
        'Cultural diet preferences noted'
      ]
    },
    {
      step: 4,
      title: 'Decide Your Next Step',
      description: 'Choose to continue with full program or explore other options',
      icon: '✅',
      details: [
        'No pressure sales approach',
        'Flexible program options',
        'Special demo participant pricing'
      ]
    }
  ];

  const consultationSteps = [
    {
      step: 1,
      title: 'Book Free Consultation',
      description: 'Schedule a detailed consultation to discuss your specific goals',
      icon: '💬',
      details: [
        'Comprehensive health assessment',
        'Goal setting and timeline planning',
        'Cultural and lifestyle considerations'
      ]
    },
    {
      step: 2,
      title: 'Receive Custom Plan',
      description: 'Get a personalized transformation roadmap designed for you',
      icon: '📋',
      details: [
        'Tailored nutrition strategy',
        'Exercise program outline',
        'Progress tracking methodology'
      ]
    },
    {
      step: 3,
      title: 'Choose Your Program',
      description: 'Select the coaching package that fits your needs and budget',
      icon: '🎯',
      details: [
        'Multiple program options',
        'Flexible payment plans',
        'Indian pricing advantage'
      ]
    },
    {
      step: 4,
      title: 'Start Transformation',
      description: 'Begin your journey with dedicated 1-on-1 coaching support',
      icon: '🚀',
      details: [
        'Weekly Zoom sessions',
        'Daily WhatsApp support',
        'Regular progress reviews'
      ]
    }
  ];

  const currentSteps = selectedPath === 'demo' ? demoPTSteps : consultationSteps;

  const handleBookDemo = () => {
    document.getElementById('demo-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    document.getElementById('consultation-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How to Get Started with FWG
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred path to begin your transformation journey
          </p>
        </div>

        {/* Path Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-card">
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedPath('demo')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPath === 'demo' ?'bg-primary text-primary-foreground shadow-md' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                🎯 Free Demo PT Path
              </button>
              <button
                onClick={() => setSelectedPath('consultation')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPath === 'consultation' ?'bg-primary text-primary-foreground shadow-md' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                💬 Free Consultation Path
              </button>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full top-0" />
          
          <div className="space-y-12">
            {currentSteps?.map((step, index) => (
              <div key={step?.step} className="relative">
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Step Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-card hover:shadow-elevation transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{step?.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          Step {step?.step}: {step?.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step?.description}
                        </p>
                        <ul className="space-y-2">
                          {step?.details?.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                              <span className="text-primary">✓</span>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {step?.step}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {selectedPath === 'demo' ?'Experience our coaching firsthand with a free demo session' :'Get personalized guidance with a free consultation call'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {selectedPath === 'demo' ? (
                <>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={handleBookDemo}
                    iconName="Play"
                    iconPosition="left"
                    className="text-lg px-8"
                  >
                    Book Free Demo PT Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setSelectedPath('consultation')}
                    iconName="MessageSquare"
                    iconPosition="left"
                    className="text-lg px-8"
                  >
                    Or Get Free Consultation
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={handleBookConsultation}
                    iconName="Calendar"
                    iconPosition="left"
                    className="text-lg px-8"
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setSelectedPath('demo')}
                    iconName="Play"
                    iconPosition="left"
                    className="text-lg px-8"
                  >
                    Or Try Free Demo PT
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Both Paths Lead to Success
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Free Demo PT Benefits
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Experience real coaching session</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>See our methods in action</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Get immediate workout guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Special participant pricing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <span className="text-2xl mr-3">💬</span>
                Free Consultation Benefits
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Comprehensive health assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Personalized program recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Cultural dietary planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Flexible program options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;