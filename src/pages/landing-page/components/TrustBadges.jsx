import React from 'react';

const TrustBadges = () => {
  const badges = [
    {
      id: 1,
      title: 'Unbeatable Price',
      description: 'Get Daily Personal Training for just ₹349/month (while gyms charge ₹2,000+)',
      icon: '💰',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Daily Live Workouts',
      description: 'Train with certified trainers in real time, no boring pre-recorded videos.',
      icon: '📺',
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Train Anytime, anywhere',
      description: 'No gym needed. Transform your living room into your fitness zone.',
      icon: '🏠',
      color: 'bg-yellow-50 border-yellow-200',
      textColor: 'text-yellow-600'
    },
    {
      id: 4,
      title: 'Unstoppable Progress',
      description: 'Follow science-backed daily routines that keep you disciplined, consistent, and always improving. ',
      icon: '⚡',
      color: 'bg-primary-50 border-primary-200',
      textColor: 'text-primary'
    },
    {
      id: 5,
      title: 'Instant Feedback',
      description: 'Trainers correct your posture live, so you avoid injuries & see faster results. ',
      icon: '✅',
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-600'
    },
    {
      id: 6,
      title: 'Stronger Together',
      description: 'Be part of a supportive fitness family that pushes you, cheers you, and celebrates every milestone with you.',
      icon: '👥',
      color: 'bg-gray-50 border-gray-200',
      textColor: 'text-gray-600'
    }
  ];

  const timeZones = [
    { country: 'USA (EST)', time: '9:00 AM - 11:00 PM', flag: '🇺🇸' },
    { country: 'UK (GMT)', time: '2:00 PM - 4:00 AM', flag: '🇬🇧' },
    { country: 'UAE (GST)', time: '6:00 PM - 8:00 AM', flag: '🇦🇪' },
    { country: 'Australia (AEST)', time: '11:00 PM - 1:00 PM', flag: '🇦🇺' },
    { country: 'Canada (EST)', time: '9:00 AM - 11:00 PM', flag: '🇨🇦' },
    { country: 'Singapore (SGT)', time: '10:30 PM - 12:30 PM', flag: '🇸🇬' }
  ];

  const credentials = [
    {
      title: 'Clinical Nutrition Certified',
      issuer: 'American Nutrition Association',
      icon: '🏥'
    },
    {
      title: 'Diabetes Educator Certified',
      issuer: 'International Diabetes Federation',
      icon: '🩺'
    },
    {
      title: 'Sports Nutrition Specialist',
      issuer: 'International Society of Sports Nutrition',
      icon: '🏃'
    },
    {
      title: 'Ayurvedic Nutrition Expert',
      issuer: 'All India Institute of Ayurveda',
      icon: '🌿'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose FWG Live PT?
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your security, privacy, and success are our top priorities
          </p> */}
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {badges?.map((badge) => (
            <div
              key={badge?.id}
              className={`${badge?.color} border-2 rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{badge?.icon}</div>
              <h3 className={`text-lg font-semibold ${badge?.textColor} mb-2`}>
                {badge?.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {badge?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Time Zone Compatibility */}
        {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🕐 Global Time Zone Coverage
            </h3>
            <p className="text-lg text-muted-foreground">
              Flexible coaching sessions available across all major time zones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeZones?.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{zone?.flag}</span>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {zone?.country}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Available: {zone?.time}
                      </div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Clinical Expertise Credentials */}
        {/* <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🏆 Clinical Expertise & Certifications
            </h3>
            <p className="text-lg text-muted-foreground">
              Our coaches hold internationally recognized certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials?.map((credential, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{credential?.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {credential?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Certified by: {credential?.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Indian Diet Customization */}
        {/* <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🍛 Cultural Food Understanding
            </h3>
            <p className="text-lg text-muted-foreground">
              We understand and integrate traditional Indian foods into your transformation plan
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { food: 'Dal & Rice', emoji: '🍚' },
              { food: 'Roti & Sabzi', emoji: '🫓' },
              { food: 'Paneer Dishes', emoji: '🧀' },
              { food: 'South Indian', emoji: '🥞' },
              { food: 'Bengali Cuisine', emoji: '🐟' },
              { food: 'Gujarati Thali', emoji: '🍽️' }
            ]?.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-card">
                <div className="text-3xl mb-2">{item?.emoji}</div>
                <div className="text-sm font-medium text-foreground">
                  {item?.food}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              <strong className="text-foreground">16,000+ meal plans</strong> created with traditional Indian ingredients
            </p>
          </div>
        </div> */}

        {/* Security & Privacy */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              🔒 Your Data Security & Privacy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">End-to-End Encryption</h4>
                <p className="text-sm text-muted-foreground">
                  All communications and data are encrypted using industry-standard protocols
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Secure Payments</h4>
                <p className="text-sm text-muted-foreground">
                  PCI DSS compliant payment processing through trusted Indian gateways
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">GDPR Compliant</h4>
                <p className="text-sm text-muted-foreground">
                  Full compliance with international data protection regulations
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustBadges;