import React, { useState } from 'react';
import Button from '../../../components/ui/Button';

const ServicesShowcase = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Weight Loss',
      icon: '⚖️',
      description: 'Sustainable weight loss with Indian diet integration',
      successRate: '95%',
      timeline: '3-6 months',
      features: [
        'Customized Indian meal plans',
        'Portion control guidance',
        'Metabolic optimization',
        'Lifestyle habit formation'
      ],
      results: '8,000+ successful transformations',
      price: '₹8,000/month',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      id: 2,
      title: 'Weight Gain',
      icon: '💪',
      description: 'Healthy muscle building and weight gain programs',
      successRate: '92%',
      timeline: '4-8 months',
      features: [
        'High-protein Indian recipes',
        'Strength training guidance',
        'Muscle building strategies',
        'Healthy weight gain focus'
      ],
      results: '2,000+ successful transformations',
      price: '₹9,000/month',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 3,
      title: 'Prep Coaching',
      icon: '🏆',
      description: 'Competition and event preparation coaching',
      successRate: '98%',
      timeline: '2-4 months',
      features: [
        'Competition-specific training',
        'Peak conditioning protocols',
        'Mental preparation support',
        'Stage-ready physique development'
      ],
      results: '2,000+ successful preps',
      price: '₹12,000/month',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 4,
      title: 'Clinical Illness',
      icon: '🏥',
      description: 'Health condition management and reversal',
      successRate: '89%',
      timeline: '6-12 months',
      features: [
        'Diabetes management',
        'Hypertension control',
        'PCOD/PCOS support',
        'Thyroid optimization'
      ],
      results: '4,000+ health improvements',
      price: '₹10,000/month',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 5,
      title: 'Corporate Wellness',
      icon: '🏢',
      description: 'Employee health and wellness programs',
      successRate: '94%',
      timeline: '3-6 months',
      features: [
        'Group coaching sessions',
        'Workplace nutrition guidance',
        'Stress management techniques',
        'Team building activities'
      ],
      results: '50+ corporate programs',
      price: 'Custom pricing',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const handleBookService = (serviceTitle) => {
    document.getElementById('consultation-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comparison Section
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our proven programs designed specifically for Indians living abroad
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-elevation border-2 border-primary relative overflow-hidden">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                FWG Body Transformation Center
              </h3>              
              <div className='grid lg:grid-cols-3 gap-8'>
                <div className="space-y-3 text-left">
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg mb-3">
                      <div className="text-lg text-bold text-primary/80">
                        <b>Feature</b>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-red-500">❌</span> */}
                    <span className="text-muted-foreground">Daily Fat-Burning Workouts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-red-500">❌</span> */}
                    <span className="text-muted-foreground">Form Correction for Safety </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-red-500">❌</span> */}
                    <span className="text-muted-foreground">Recorded Workouts Access </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-red-500">❌</span> */}
                    <span className="text-muted-foreground">Community Support & Motivation </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-red-500">❌</span> */ }
                    <span className="text-muted-foreground">Visible Results Guarantee </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-red-500">❌</span> */ }
                    <span className="text-muted-foreground">Monthly Cost</span>
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg mb-3">
                      <div className="text-lg text-primary/80">
                        <b>Local Gym Weight Loss Plan (₹1500-₹3000)</b>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-muted-foreground">No</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-muted-foreground">Limited</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-muted-foreground">No</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-muted-foreground">No</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-muted-foreground">Uncertain</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-red-500">❌</span> */ }
                    <span className="text-muted-foreground">₹1500-₹3000</span>
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg mb-3">
                      <div className="text-lg text-primary/80">
                        <b>FWG Online Weight Loss Program (₹349)</b>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">✅</span>
                    <span className="text-muted-foreground">Yes(Live on Zoom)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">✅</span>
                    <span className="text-muted-foreground">Every Session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">✅</span>
                    <span className="text-muted-foreground">Yes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">✅</span>
                    <span className="text-muted-foreground">Yes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">✅</span>
                    <span className="text-muted-foreground">Proven Transformations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-primary">✅</span> */}
                    <span className="text-muted-foreground">₹349</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;