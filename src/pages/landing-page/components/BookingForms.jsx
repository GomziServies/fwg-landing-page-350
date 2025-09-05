import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const BookingForms = () => {
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
            Trust & Security - Your Fitness Journey is Safe with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how much you can save with FWG's Indian pricing compared to local coaching in your area
          </p>
        </div>

        {/* Savings Highlight */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-card max-w-3xl mx-auto">
            <p className="text-lg text-left text-muted-foreground mb-6">
              <b>✅Certified & Experienced Trainers -</b> Every FWG trainer is fully certified and has years of practical experience. You're not just following random YouTube workouts - you're training LIVE with professionals who know how to guide, motivate, and correct you in real time. 
            </p>
            <p className="text-lg text-left text-muted-foreground mb-6">
              <b>✅100% Secure Payments -</b> We use Razorpay & UPI trusted gateways for all transactions. Your data and money are completely safe with industry-standard encryption and fraud protection. 
            </p>
            <p className="text-lg text-left text-muted-foreground mb-6">
              <b>✅Transparent Plans - No Hidden Costs -</b> Pay only for the plan you choose. No surprise fees, no pushy upsells. 
            </p>
            <p className="text-lg text-left text-muted-foreground mb-6">
              <b>✅Privacy First -</b> Your personal details are kept strictly confidential. FWG never shares or sells your information. 
            </p>
            <p className="text-lg text-left text-muted-foreground mb-6">
              <b>✅Trusted by Hundreds of Members -</b> Join a growing community of people who are transforming their fitness safely and affordably with FWG. 
            </p>

            <Button
              variant="default"
              size="lg"
              onClick={handleBookConsultation}
              iconName="Calculator"
              iconPosition="left"
              className="text-lg px-8"
            >
              Your Transformation Starts Today - Just ₹349/month
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingForms;