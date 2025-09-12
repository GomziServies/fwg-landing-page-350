import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Modal from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import apiConfig from '../../../assets/config/apiConfig';

const BookingForms = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    goal: "",
    experience: "",
    preferredTimeSlot: "",
  });

  const goals = [
    { value: "weight-loss", label: "Weight Loss" },
    { value: "weight-gain", label: "Weight/Muscle Gain" },
    { value: "clinical", label: "Health Condition Management" },
    { value: "competition", label: "Competition Preparation" },
    { value: "general", label: "General Fitness" },
  ];

  const experiences = [
    { value: "beginner", label: "Beginner (0-1 years)" },
    { value: "intermediate", label: "Intermediate (1-3 years)" },
    { value: "advanced", label: "Advanced (3+ years)" },
  ];

  const timeSlots = [
    { value: "morning", label: "Morning (6 AM - 10 AM)" },
    { value: "afternoon", label: "Afternoon (12 PM - 4 PM)" },
    { value: "evening", label: "Evening (6 PM - 9 PM)" },
    { value: "flexible", label: "Flexible" },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !userDetails.name ||
      !userDetails.email ||
      !userDetails.mobile ||
      !userDetails.goal ||
      !userDetails.experience ||
      !userDetails.preferredTimeSlot
    ) {
      alert("Please fill in all fields");
      return false;
    }
    if (!userDetails.email.includes("@")) {
      alert("Please enter a valid email");
      return false;
    }
    if (userDetails.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const options = {
        key: apiConfig.RAZORPAY_MERCHANT_ID,
        amount: 349 * 100, // amount in paisa
        currency: "INR",
        name: "FG Group",
        description: "Monthly Training Program",
        handler: async function (response) {
          try {
            const result = await axios.post(
              `${apiConfig.BASE_URL}/public/v1/guest-payment/custom-payment-350`,
              {
                payment_id: response.razorpay_payment_id,
                name: userDetails.name,
                email: userDetails.email,
                mobile: userDetails.mobile,
                goal: userDetails.goal,
                experience: userDetails.experience,
                preferredTimeSlot: userDetails.preferredTimeSlot,
              }
            );

            if (result.data.success) {
              setIsModalOpen(false);
              setIsThankYouModalOpen(true);
            }
          } catch (error) {
            alert(
              error.response?.data?.message ||
                "Payment verification failed. Please contact support."
            );
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.mobile,
        },
        theme: {
          color: "#10B981",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert(error.response?.data?.message || "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
    <>
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
              onClick={handleOpenModal}
              className="text-lg py-4"
            >
              Your Transformation Starts Today - Just ₹349/month
            </Button>
          </div>
        </div>

      </div>
    </section>

    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Start Your Fitness Journey"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1 flex flex-col items-center bg-gradient-to-b from-green-50 to-green-100 rounded-2xl p-6 shadow-sm">
          <div className="bg-white rounded-full p-4 shadow-md">
            <img
              src="https://fggroup.in/assets/images/img/gomzi.webp"
              alt="logo"
              className="h-14 w-14 object-contain"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
            Personalised Coaching
          </h3>
          <p className="mt-2 text-sm text-gray-600 text-center leading-relaxed">
            Fill a few quick details and secure your monthly training seat with our expert coaches.
          </p>
        </div>

        <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Full name
              </label>
              <Input
                name="name"
                defaultValue={userDetails.name}
                onBlur={handleInputChange}
                placeholder="John Doe"
                className="h-11 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                name="email"
                type="email"
                defaultValue={userDetails.email}
                onBlur={handleInputChange}
                placeholder="john@example.com"
                className="h-11 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Mobile
              </label>
              <Input
                name="mobile"
                type="tel"
                defaultValue={userDetails.mobile}
                onBlur={handleInputChange}
                placeholder="9876543210"
                maxLength={10}
                pattern="[0-9]*"
                inputMode="numeric"
                className="h-11 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Goal
              </label>
              <Select
                name="goal"
                value={userDetails.goal}
                onChange={(value) =>
                  handleInputChange({
                    target: { name: "goal", value },
                  })
                }
                options={goals}
                inputClassName="h-11 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Experience
              </label>
              <Select
                name="experience"
                value={userDetails.experience}
                onChange={(value) =>
                  handleInputChange({
                    target: {
                      name: "experience",
                      value,
                    },
                  })
                }
                options={experiences}
                inputClassName="h-11 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Preferred Time
              </label>
              <Select
                name="preferredTimeSlot"
                value={userDetails.preferredTimeSlot}
                onChange={(value) =>
                  handleInputChange({
                    target: {
                      name: "preferredTimeSlot",
                      value,
                    },
                  })
                }
                options={timeSlots}
                inputClassName="h-11 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              🔒 Secure payment • 30-day support
            </p>
            <Button
              onClick={handlePayment}
              disabled={loading}
              className="px-6 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition"
            >
              {loading ? "Processing..." : "Pay ₹349 / month"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>

    <Modal
      isOpen={isThankYouModalOpen}
      onClose={() => setIsThankYouModalOpen(false)}
      title="Thank you!"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-green-100 rounded-full p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          You're all set
        </h3>
        <p className="text-sm text-gray-600 max-w-sm">
          Payment received. Our team will reach out to schedule your first session and share onboarding details.
        </p>
        <div className="w-full flex justify-center">
          <Button onClick={() => setIsThankYouModalOpen(false)}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
    </>
  );
};

export default BookingForms;