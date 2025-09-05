import React, { useState, useEffect, useRef } from 'react';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    transformations: 0,
    weightLoss: 0,
    clinical: 0,
    countries: 0
  });
  
  const sectionRef = useRef(null);

  const finalCounts = {
    transformations: 16000,
    weightLoss: 8000,
    clinical: 4000,
    countries: 25
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        transformations: Math.floor(finalCounts?.transformations * progress),
        weightLoss: Math.floor(finalCounts?.weightLoss * progress),
        clinical: Math.floor(finalCounts?.clinical * progress),
        countries: Math.floor(finalCounts?.countries * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const metrics = [
    {
      id: 1,
      count: counts?.transformations,
      suffix: '+',
      label: 'Total Transformations',
      description: 'Successful body transformations completed',
      icon: '🎯',
      color: 'text-primary'
    },
    {
      id: 2,
      count: counts?.weightLoss,
      suffix: '+',
      label: 'Weight Loss Success',
      description: 'Clients achieved their weight loss goals',
      icon: '⚖️',
      color: 'text-secondary'
    },
    {
      id: 3,
      count: counts?.clinical,
      suffix: '+',
      label: 'Clinical Cases',
      description: 'Health conditions improved or reversed',
      icon: '🏥',
      color: 'text-accent'
    },
    {
      id: 4,
      count: counts?.countries,
      suffix: '+',
      label: 'Countries Served',
      description: 'Indians helped across the globe',
      icon: '🌍',
      color: 'text-success'
    }
  ];

  return (
    <section ref={sectionRef} className="bg-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-surface-foreground mb-4">
            Getting Started is Easy
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of Indians abroad who have transformed their lives with our culturally-aware coaching approach
          </p> */}
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics?.map((metric) => (
            <div
              key={metric?.id}
              className="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-elevation transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{metric?.icon}</div>
              <div className="mb-4">
                <div className={`text-4xl lg:text-5xl font-bold ${metric?.color} mb-2`}>
                  {metric?.count?.toLocaleString('en-IN')}{metric?.suffix}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {metric?.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric?.description}
                </p>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div
                  className={`h-2 rounded-full transition-all duration-2000 ease-out ${
                    metric?.color?.includes('primary') ? 'bg-primary' :
                    metric?.color?.includes('secondary') ? 'bg-secondary' :
                    metric?.color?.includes('accent') ? 'bg-accent' : 'bg-success'
                  }`}
                  style={{
                    width: isVisible ? '100%' : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div> */}

        {/* Additional Stats Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center my-3">
            <div className="text-2xl font-bold text-primary mb-2">Choose & Login</div>
            <div className="text-surface-foreground font-medium mb-1">Click on the ₹349 plan, create/login to your account, and purchase securely via Razor pay/UPI.</div>
          </div>
          <div className="text-center my-3">
            <div className="text-2xl font-bold text-accent mb-2">Instant Access</div>
            <div className="text-surface-foreground font-medium mb-1">Get your PT schedule + access to pre-recorded workout videos inside your account.</div>
          </div>
          <div className="text-center my-3">
            <div className="text-2xl font-bold text-blue-600  mb-2">Join Live Sessions</div>
            <div className="text-surface-foreground font-medium mb-1"> Receive daily Zoom links via WhatsApp/email and train with your coach in real-time.</div>
          </div>
          <div className="text-center my-3">
            <div className="text-2xl font-bold text-secondary mb-2">Stay Consistent</div>
            <div className="text-surface-foreground font-medium mb-1">Track your progress, repeat workouts anytime with recordings, and keep improving.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;