import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import { cn } from '../../../utils/cn';

const WeightLossSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 11,
    minutes: 45,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-success/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main heading */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Transform</span> Your Body –{' '}
            <br className="hidden sm:block" />
            Just <span className="text-success">₹349/Month!</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
              India's <span className="text-primary font-bold">#1 Daily LIVE</span> Online Weight Loss Program 🚀
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Forget Expensive Gyms & Boring Diets. This Is The Easiest, Most Affordable Way To Lose Weight From Home With{' '}
              <span className="text-success font-semibold">Guaranteed Results</span>.
            </p>
          </div>
        </div>

        {/* Urgency Alert */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-warning/20 to-error/20 border-l-4 border-warning p-6 rounded-lg shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⚡</span>
              <h3 className="text-lg font-bold text-foreground">Limited Spots Available – Live Batches Fill Fast!</h3>
            </div>
            <p className="text-muted-foreground font-medium">
              This Month's Registrations Are Closing Soon. Don't Miss Your Chance.
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Registration Closing In:
            </h3>
          </div>
          
          <div className="bg-white rounded-2xl shadow-elevation p-6 md:p-8 border border-gray-200">
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {/* Days */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-3 md:p-4 mb-2">
                  <div className="text-2xl md:text-4xl font-bold">
                    {formatTime(timeLeft.days)}
                  </div>
                </div>
                <div className="text-sm md:text-base font-medium text-muted-foreground">Days</div>
              </div>
              
              {/* Hours */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-success to-success/80 text-white rounded-lg p-3 md:p-4 mb-2">
                  <div className="text-2xl md:text-4xl font-bold">
                    {formatTime(timeLeft.hours)}
                  </div>
                </div>
                <div className="text-sm md:text-base font-medium text-muted-foreground">Hours</div>
              </div>
              
              {/* Minutes */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-warning to-warning/80 text-white rounded-lg p-3 md:p-4 mb-2">
                  <div className="text-2xl md:text-4xl font-bold">
                    {formatTime(timeLeft.minutes)}
                  </div>
                </div>
                <div className="text-sm md:text-base font-medium text-muted-foreground">Minutes</div>
              </div>
              
              {/* Seconds */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-error to-error/80 text-white rounded-lg p-3 md:p-4 mb-2">
                  <div className="text-2xl md:text-4xl font-bold">
                    {formatTime(timeLeft.seconds)}
                  </div>
                </div>
                <div className="text-sm md:text-base font-medium text-muted-foreground">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-8">
            Click Below & Start Your Transformation Today!
          </p>
          
          <div className="space-y-4">
            <Button 
              size="xl"
              className="bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white font-bold py-4 px-8 md:px-12 text-lg md:text-xl rounded-full shadow-elevation hover:shadow-lg transform hover:scale-105 transition-all duration-smooth"
              fullWidth={false}
            >
              🚀 Start Your Transformation Journey Now
            </Button>
            
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Join thousands of successful weight loss transformations. No hidden fees, no contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossSection;