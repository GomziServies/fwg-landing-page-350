import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const CostComparison = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');

  const countryData = [
    {
      value: 'us',
      label: 'United States',
      flag: '🇺🇸',
      localCost: '$200-400',
      localCostINR: '₹16,000-32,000',
      currency: 'USD'
    },
    {
      value: 'uk',
      label: 'United Kingdom',
      flag: '🇬🇧',
      localCost: '£150-300',
      localCostINR: '₹15,000-30,000',
      currency: 'GBP'
    },
    {
      value: 'canada',
      label: 'Canada',
      flag: '🇨🇦',
      localCost: 'CAD 250-450',
      localCostINR: '₹15,000-27,000',
      currency: 'CAD'
    },
    {
      value: 'uae',
      label: 'United Arab Emirates',
      flag: '🇦🇪',
      localCost: 'AED 600-1200',
      localCostINR: '₹13,000-26,000',
      currency: 'AED'
    },
    {
      value: 'australia',
      label: 'Australia',
      flag: '🇦🇺',
      localCost: 'AUD 300-500',
      localCostINR: '₹16,000-27,000',
      currency: 'AUD'
    },
    {
      value: 'singapore',
      label: 'Singapore',
      flag: '🇸🇬',
      localCost: 'SGD 200-400',
      localCostINR: '₹12,000-24,000',
      currency: 'SGD'
    }
  ];

  const fwgCost = '₹8,000-12,000';
  const currentCountry = countryData?.find(country => country?.value === selectedCountry);
  
  // Calculate savings percentage
  const avgLocalCostINR = parseInt(currentCountry?.localCostINR?.split('-')?.[1]?.replace(/[₹,]/g, '')) || 25000;
  const avgFWGCost = 10000;
  const savingsPercentage = Math.round(((avgLocalCostINR - avgFWGCost) / avgLocalCostINR) * 100);

  const handleBookConsultation = () => {
    document.getElementById('consultation-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything Included in Your Membership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how much you can save with FWG's Indian pricing compared to local coaching in your country
          </p>
        </div>

        {/* Country Selector */}
        {/* <div className="max-w-md mx-auto mb-12">
          <Select
            label="Select your current location"
            options={countryData?.map(country => ({
              value: country?.value,
              label: `${country?.flag} ${country?.label}`
            }))}
            value={selectedCountry}
            onChange={setSelectedCountry}
            className="text-center"
          />
        </div> */}

        {/* Comparison Cards */}
        {/* <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-card border-2 border-red-200">
            <div className="text-center">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Local Coaching in {currentCountry?.label}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {currentCountry?.localCost}
                  </div>
                  <div className="text-lg text-red-500">
                    ({currentCountry?.localCostINR} per month)
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <span className="text-muted-foreground">Generic diet plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <span className="text-muted-foreground">No Indian food understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <span className="text-muted-foreground">Limited cultural awareness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <span className="text-muted-foreground">Expensive hourly rates</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-elevation border-2 border-primary relative overflow-hidden">
            <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
              Save {savingsPercentage}%!
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                FWG International Coaching
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {fwgCost}
                  </div>
                  <div className="text-lg text-primary/80">
                    per month (Pay in INR)
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">✅</span>
                  <span className="text-muted-foreground">India-specific diet plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">✅</span>
                  <span className="text-muted-foreground">Cultural food understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">✅</span>
                  <span className="text-muted-foreground">Flexible time zone support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">✅</span>
                  <span className="text-muted-foreground">Proven 16,000+ results</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Savings Highlight */}
        {/* <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Monthly Savings with FWG
            </h3>
            <div className="text-5xl font-bold text-primary mb-4">
              ₹{(avgLocalCostINR - avgFWGCost)?.toLocaleString('en-IN')}
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              That's ₹{((avgLocalCostINR - avgFWGCost) * 12)?.toLocaleString('en-IN')} saved per year!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">
                  {savingsPercentage}%
                </div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Cultural Fit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={handleBookConsultation}
              iconName="Calculator"
              iconPosition="left"
              className="text-lg px-8"
            >
              Get Your Personalized Quote
            </Button>
          </div>
        </div> */}

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="text-3xl mb-4">🏋</div>
              <h4 className="font-semibold text-foreground mb-2">Daily Live PT Sessions</h4>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="text-3xl mb-4">🎥</div>
              <h4 className="font-semibold text-foreground mb-2">Recorded Workout Access</h4>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="text-3xl mb-4">👀</div>
              <h4 className="font-semibold text-foreground mb-2">Form Correction Support</h4>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-semibold text-foreground mb-2">Goal-Based Training Batches</h4>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="font-semibold text-foreground mb-2">Workout Challenges & Leaderboards</h4>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="font-semibold text-foreground mb-2">Exclusive Fitness Community</h4>
            </div>

            {/* Last item wrapper with flex center */ }
            <div className="md:col-span-3 flex justify-center">
              <div className="bg-white rounded-xl p-6 shadow-card">
                <div className="text-3xl mb-4">💬</div>
                <h4 className="font-semibold text-foreground mb-2">Weekly Live Q&A with Trainers</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-10'>
          <Button
            variant="default"
            size="lg"
            iconPosition="left"
            className="text-lg bg-warning px-8"
          >
            Join FWG PT for Just ₹349/Month
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;