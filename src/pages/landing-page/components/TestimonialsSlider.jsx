import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Toronto, Canada",
      program: "Weight Loss",
      beforeImage: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      result: "Lost 25kg in 6 months",
      testimonial: `Living in Canada, I struggled with expensive personal trainers and generic diet plans that didn't include Indian food. FWG changed everything! The coaches understood my love for dal-chawal and created a plan that worked with my lifestyle. Paying in INR saved me over $300 per month compared to local trainers.`,
      rating: 5,
      videoThumbnail: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      hasVideo: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "London, UK",
      program: "Weight Gain",
      beforeImage: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      result: "Gained 12kg healthy weight",
      testimonial: `As a software engineer in London, I was severely underweight and couldn't find coaches who understood vegetarian Indian nutrition. FWG's approach with paneer, dal, and traditional foods helped me gain healthy weight while building muscle. The time zone flexibility meant I could have sessions after work.`,
      rating: 5,
      videoThumbnail: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      hasVideo: false
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Dubai, UAE",
      program: "Clinical Illness",
      beforeImage: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      result: "Reversed Type 2 Diabetes",
      testimonial: `I was diagnosed with diabetes and hypertension in Dubai. Local nutritionists couldn't work with Indian spices and cooking methods. FWG's clinical program not only helped me lose weight but completely reversed my diabetes. My HbA1c went from 9.2 to 5.8 in 8 months!`,
      rating: 5,
      videoThumbnail: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      hasVideo: true
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Sydney, Australia",
      program: "Weight Loss",
      beforeImage: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      result: "Lost 18kg post-pregnancy",
      testimonial: `After having my baby in Australia, I struggled with post-pregnancy weight. Australian trainers charged $150+ per session and didn't understand Indian postpartum nutrition needs. FWG's approach with traditional foods like methi, jeera water, and homemade ghee helped me lose weight safely while breastfeeding.`,
      rating: 5,
      videoThumbnail: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      hasVideo: false
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "New York, USA",
      program: "Prep Coaching",
      beforeImage: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      result: "Won Men\'s Physique Competition",
      testimonial: `Preparing for bodybuilding competitions in NYC was expensive and coaches didn't understand vegetarian protein sources. FWG's prep coaching with Indian protein-rich foods like chana, rajma, and paneer helped me win my first Men's Physique competition while saving thousands in coaching fees.`,
      rating: 5,
      videoThumbnail: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      hasVideo: true
    }
  ];

  const filters = [
    { value: 'all', label: 'All Stories', count: testimonials?.length },
    { value: 'Weight Loss', label: 'Weight Loss', count: testimonials?.filter(t => t?.program === 'Weight Loss')?.length },
    { value: 'Weight Gain', label: 'Weight Gain', count: testimonials?.filter(t => t?.program === 'Weight Gain')?.length },
    { value: 'Clinical Illness', label: 'Clinical', count: testimonials?.filter(t => t?.program === 'Clinical Illness')?.length },
    { value: 'Prep Coaching', label: 'Competition', count: testimonials?.filter(t => t?.program === 'Prep Coaching')?.length }
  ];

  const filteredTestimonials = selectedFilter === 'all' 
    ? testimonials 
    : testimonials?.filter(t => t?.program === selectedFilter);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredTestimonials?.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [filteredTestimonials?.length]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentSlide(0);
  };

  const handlePlayVideo = (testimonial) => {
    // Mock video play functionality
    alert(`Playing video testimonial for ${testimonial?.name}`);
  };

  const currentTestimonial = filteredTestimonials?.[currentSlide];

  if (!currentTestimonial) return null;

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real Stories from Indians Abroad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how FWG has transformed lives across different countries and goals
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-elevation overflow-hidden">
          <div className="grid lg:grid-cols-1 gap-0">

            {/* Testimonial Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {currentTestimonial?.name}
                </h3>
                <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                  <span className="flex items-center space-x-1">
                    <span>📍</span>
                    <span>{currentTestimonial?.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>🎯</span>
                    <span>{currentTestimonial?.program}</span>
                  </span>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg inline-block font-semibold mb-6">
                  {currentTestimonial?.result}
                </div>
              </div>

              <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "{currentTestimonial?.testimonial}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentSlide((prev) => 
              prev === 0 ? filteredTestimonials?.length - 1 : prev - 1
            )}
            iconName="ChevronLeft"
            disabled={filteredTestimonials?.length <= 1}
          />
          
          <div className="flex space-x-2">
            {filteredTestimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentSlide((prev) => 
              (prev + 1) % filteredTestimonials?.length
            )}
            iconName="ChevronRight"
            disabled={filteredTestimonials?.length <= 1}
          />
        </div>

        {/* Testimonial Stats */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-foreground font-medium mb-1">Average Rating</div>
            <div className="text-muted-foreground text-sm">From 2,500+ reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">95%</div>
            <div className="text-foreground font-medium mb-1">Success Rate</div>
            <div className="text-muted-foreground text-sm">Clients achieve their goals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-foreground font-medium mb-1">Countries</div>
            <div className="text-muted-foreground text-sm">Indians helped worldwide</div>
          </div>
        </div> */}

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of Indians abroad who have transformed their lives with FWG
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => document.getElementById('demo-booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8"
              >
                Start with Free Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('consultation-booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                iconName="Calendar"
                iconPosition="left"
                className="text-lg px-8"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSlider;