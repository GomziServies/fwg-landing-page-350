import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    {
      id: 1,
      before: "https://fggroup.in/assets/images/landing-page/t4.webp",
      name: "Rajesh Kumar",
    },
    {
      id: 2,
      before: "https://fggroup.in/assets/images/landing-page/t1.webp",
      name: "Priya Sharma",
    },
    {
      id: 3,
      before: "https://fggroup.in/assets/images/img/41.webp",
      name: "Amit Patel",
    },
    {
      id: 4,
      before: "https://fggroup.in/assets/images/landing-page/t2.webp",
      name: "Amit Patel",
    },
    {
      id: 5,
      before: "https://fggroup.in/assets/images/img/42.webp",
      name: "Amit Patel",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations?.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleBookDemo = () => {
    document.getElementById('demo-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    document.getElementById('consultation-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
     <div className='mx-auto my-5'>
        <img
          src="https://fggroup.in/assets/images/img/gomzi.webp"
          alt="Gomzi Logo"
          className="h-20 w-auto mx-auto"
        />
     </div>
    <section className="bg-gradient-to-br from-white via-gray-50 to-green-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 py-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Transformation Carousel */}

          {/* Right Side - Hero Content */}
          
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                Daily Live Personal Training at Just 
                <span className="text-primary"> ₹349/Month 🚀</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-8">
                Certified Trainers. Real-Time Guidance. Anytime, anywhere
              </h2>
            </div>

            {/* <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get proven results from <strong className="text-primary">16,000+ transformations</strong> with India-specific diet plans, 
              flexible time zones, and coaching that understands your lifestyle abroad.
            </p> */}

            {/* Key Benefits */}
            <div className="gap-4 mb-8">
              <div className="flex items-center space-x-3 my-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Trainer coaching live on Zoom screen mock-up</span>
              </div>
              <div className="flex items-center space-x-3 my-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Fit people working out from home</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleBookDemo}
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Join Now - Start Training Today
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-primary">⭐⭐⭐⭐⭐</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">🔒</span>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-elevation p-6 lg:p-8">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="flex transition-transform duration-500 ease-in-out"
                    style={ { transform: `translateX(-${currentSlide * 100}%)` } }>
                    { transformations?.map((transformation) => (
                      <div key={ transformation?.id } className="w-full flex-shrink-0">
                        <div className="gap-4">
                          <div className="text-center">
                            <div className="relative overflow-hidden rounded-lg mb-3">
                              <Image
                                src={ transformation?.before }
                                alt={ `${transformation?.name} before transformation` }
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )) }
                  </div>
                </div>

                {/* Carousel Indicators */ }
                <div className="flex justify-center space-x-2 mt-6">
                  { transformations?.map((_, index) => (
                    <button
                      key={ index }
                      onClick={ () => setCurrentSlide(index) }
                      className={ `w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                        }` }
                    />
                  )) }
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;