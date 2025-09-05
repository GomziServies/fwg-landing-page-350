import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/landing-page' },
    { name: 'Programs', href: '/programs' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const programs = [
    { name: 'Weight Loss', href: '#weight-loss' },
    { name: 'Weight Gain', href: '#weight-gain' },
    { name: 'Clinical Illness', href: '#clinical' },
    { name: 'Prep Coaching', href: '#prep' },
    { name: 'Corporate Wellness', href: '#corporate' }
  ];

  const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Singapore', flag: '🇸🇬' }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:support@fwginternational.com', '_blank');
  };

  return (
    <footer className="bg-surface text-surface-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-foreground"
                >
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19 15L19.5 17.5L22 18L19.5 18.5L19 21L18.5 18.5L16 18L18.5 17.5L19 15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5 9L5.5 11.5L8 12L5.5 12.5L5 15L4.5 12.5L2 12L4.5 11.5L5 9Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">FWG</span>
                <span className="text-xs text-gray-300 -mt-1">International</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              World-class body transformation coaching designed specifically for Indians living abroad. 
              Save up to 70% with Indian pricing while getting culturally-aware nutrition and fitness guidance.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Icon name="MessageCircle" size={20} color="white" />
              </button>
              <button
                onClick={handleEmailClick}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Icon name="Mail" size={20} color="white" />
              </button>
              <button
                onClick={() => window.open('https://instagram.com/fwginternational', '_blank')}
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Icon name="Instagram" size={20} color="white" />
              </button>
              <button
                onClick={() => window.open('https://youtube.com/fwginternational', '_blank')}
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Icon name="Youtube" size={20} color="white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.name}>
                  <Link
                    to={link?.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => document.getElementById('demo-booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Free Demo PT
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('consultation-booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Free Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs?.map((program) => (
                <li key={program?.name}>
                  <a
                    href={program?.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {program?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries Served */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Countries We Serve</h3>
            <ul className="space-y-3">
              {countries?.map((country) => (
                <li key={country?.name} className="flex items-center space-x-2">
                  <span className="text-lg">{country?.flag}</span>
                  <span className="text-gray-300">{country?.name}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-gray-400">
              + 19 more countries worldwide
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Icon name="MessageCircle" size={18} className="mr-2 text-primary" />
                WhatsApp Support
              </h4>
              <p className="text-gray-300 text-sm mb-2">24/7 Support Available</p>
              <button
                onClick={handleWhatsAppClick}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                +91 98765 43210
              </button>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Icon name="Mail" size={18} className="mr-2 text-primary" />
                Email Support
              </h4>
              <p className="text-gray-300 text-sm mb-2">Response within 2 hours</p>
              <button
                onClick={handleEmailClick}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                support@fwginternational.com
              </button>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Icon name="Clock" size={18} className="mr-2 text-primary" />
                Coaching Hours
              </h4>
              <p className="text-gray-300 text-sm mb-2">Flexible across all time zones</p>
              <p className="text-primary">Available 16 hours daily</p>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">16,000+</div>
              <div className="text-sm text-gray-300">Transformations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-1">25+</div>
              <div className="text-sm text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">4.9/5</div>
              <div className="text-sm text-gray-300">Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-1">70%</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} FWG International. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#refund" className="text-gray-400 hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;