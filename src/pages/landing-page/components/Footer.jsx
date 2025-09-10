import React from "react";
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "https://www.facebook.com/gajani2/" },
    { name: "Instagram", icon: "Instagram", href: "https://www.instagram.com/fitnesswithgomzi/" },
    { name: "YouTube", icon: "Youtube", href: "https://www.youtube.com/channel/UCLyvtq55YZORdV-SN8OQSzQ" },
    { name: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/in/dt-gautam-jani-561a50161/" },
  ];

  const contactInfo = {
    email: "fitnesswithgomzi@gmail.com",
    whatsapp: "+91 74820 77091",
    address:
      "2, Abhushan Bunglows, Near Alkapuri Char Rasta, Katargam, Surat-395004",
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/assets/images/gomzi.webp"
                alt="Fitness with gomzi"
                className="h-16 w-auto rounded-lg p-2"
              />
            </div>

            <p className="text-gray-300 leading-relaxed">
              Empowering Indians living abroad to achieve their fitness goals
              with culturally-appropriate coaching, personalized nutrition
              plans, and world-class support at Indian prices.
            </p>

            <div className="flex items-center space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo?.email}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon name="Mail" size={16} color="#EF7F1B" />
                    </span>
                    <span>{contactInfo?.email}</span>
                  </a>

                  <a
                    href={`https://wa.me/${contactInfo?.whatsapp?.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-400/10 transition-colors duration-300">
                      <Icon name="MessageCircle" size={16} color="#25D366" />
                    </span>
                    <span>{contactInfo?.whatsapp}</span>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary">Location</h3>
                <div className="flex items-start space-x-3 text-gray-300">
                  <span className="mt-1 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={16} color="#EF7F1B" />
                  </span>
                  <span>{contactInfo?.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
