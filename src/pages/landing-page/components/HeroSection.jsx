import React, { useState, useEffect } from "react";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";
import Modal from "../../../components/ui/Modal";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import apiConfig from "../../../assets/config/apiConfig";
import axios from "axios";
import toast from "react-hot-toast";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
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
    const [loading, setLoading] = useState(false);

    const transformations = [
        {
            id: 1,
            before: "/assets/images/Mr. Vraj.jpg",
            name: "Mr. Vraj",
        },
        {
            id: 2,
            before: "/assets/images/Manali patel.jpg",
            name: "Manali Patel",
        },
        {
            id: 3,
            before: "/assets/images/Nidhi Bhalla.jpg",
            name: "Nidhi Bhalla",
        },
        {
            id: 4,
            before: "/assets/images/Praful Salvi.jpg",
            name: "Praful Salvi",
        },
        {
            id: 5,
            before: "/assets/images/Web Jitendra.jpg",
            name: "Jitendra",
        },
        {
            id: 6,
            before: "/assets/images/03.jpg",
            name: "Success Story",
        },
    ];

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % transformations?.length);
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [isPaused]);

    // Pause carousel when modal is open
    useEffect(() => {
        if (isModalOpen) {
            setIsPaused(true);
        } else {
            setIsPaused(false);
        }
    }, [isModalOpen]);

    const validateForm = () => {
        if (
            !userDetails.name ||
            !userDetails.email ||
            !userDetails.mobile ||
            !userDetails.goal ||
            !userDetails.experience ||
            !userDetails.preferredTimeSlot
        ) {
            toast.error("Please fill in all fields");
            return false;
        }
        if (!userDetails.email.includes("@")) {
            toast.error("Please enter a valid email");
            return false;
        }
        if (userDetails.mobile.length !== 10) {
            toast.error("Please enter a valid 10-digit mobile number");
            return false;
        }
        return true;
    };

    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 11,
        minutes: 45,
        seconds: 0,
    });

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
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
        return time.toString().padStart(2, "0");
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
                                preferred_time_slot:
                                    userDetails.preferredTimeSlot,
                            }
                        );
                        if (result.data.status === 200) {
                            toast.success("Payment successful!");
                            setIsModalOpen(false);
                            setUserDetails({ name: "", email: "", mobile: "" });
                            setIsThankYouModalOpen(true);
                        } else {
                            toast.error(
                                result.data.message || "Something went wrong"
                            );
                        }
                    } catch (error) {
                        toast.error(
                            "Error processing payment. Please try again."
                        );
                    }
                },
                prefill: {
                    name: userDetails.name,
                    email: userDetails.email,
                    contact: userDetails.mobile,
                },
                theme: {
                    color: "#16a34a",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            toast.error("Error initializing payment. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Pause carousel while typing
        setIsPaused(true);
        setUserDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Resume carousel after 10 seconds of no typing
        clearTimeout(window.carouselResumeTimer);
        window.carouselResumeTimer = setTimeout(() => {
            if (!isModalOpen) setIsPaused(false);
        }, 10000);
    };

    const handleBookDemo = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="mx-auto my-5">
                <img
                    src="https://fggroup.in/assets/images/img/gomzi.webp"
                    alt="Gomzi Logo"
                    className="h-20 w-auto mx-auto"
                />
            </div>
            <section className="bg-gradient-to-br from-white via-gray-50 to-green-50 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side - Hero Content (First on all devices) */}
                        <div className="text-center lg:text-left order-1">
                            <div className="mb-6">
                                <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
                                    <span className="text-green-600 text-sm font-medium">
                                        🎯 India’s #1 Daily LIVE Online Weight Loss Program
                                    </span>
                                </div>
                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                                    Transform Your Body with at
                                    <span className="text-primary block mt-2">
                                        just ₹349/Month
                                    </span>
                                </h1>
                                <ul className="list-disc list-inside text-xs lg:text-sm text-muted-foreground font-medium mb-8 space-y-2">
                                    <li>Forget Expensive Gyms & Boring Diets.</li>
                                    <li>This Is The Easiest, Most Affordable Way To Lose Weight From Home.</li>
                                    <li>Guaranteed Results.</li>
                                </ul>
                            </div>
                            {/* Countdown Timer */}
                            <div className="max-w-xl mx-auto mb-6">
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
                                            <div className="text-sm md:text-base font-medium text-muted-foreground">
                                                Days
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className="text-center">
                                            <div className="bg-gradient-to-br from-success to-success/80 text-white rounded-lg p-3 md:p-4 mb-2">
                                                <div className="text-2xl md:text-4xl font-bold">
                                                    {formatTime(timeLeft.hours)}
                                                </div>
                                            </div>
                                            <div className="text-sm md:text-base font-medium text-muted-foreground">
                                                Hours
                                            </div>
                                        </div>

                                        {/* Minutes */}
                                        <div className="text-center">
                                            <div className="bg-gradient-to-br from-warning to-warning/80 text-white rounded-lg p-3 md:p-4 mb-2">
                                                <div className="text-2xl md:text-4xl font-bold">
                                                    {formatTime(
                                                        timeLeft.minutes
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-sm md:text-base font-medium text-muted-foreground">
                                                Minutes
                                            </div>
                                        </div>

                                        {/* Seconds */}
                                        <div className="text-center">
                                            <div className="bg-gradient-to-br from-error to-error/80 text-white rounded-lg p-3 md:p-4 mb-2">
                                                <div className="text-2xl md:text-4xl font-bold">
                                                    {formatTime(
                                                        timeLeft.seconds
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-sm md:text-base font-medium text-muted-foreground">
                                                Seconds
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CTA Section */}
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        onClick={handleBookDemo}
                                        className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-elevation"
                                    >
                                        🚀 Start Your Transformation Today
                                    </Button>
                                </div>

                                {/* Urgency indicator */}
                                {/* <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-orange-200 rounded-lg p-4">
                                    <div className="flex items-center justify-center space-x-2">
                                        <span className="text-orange-600">
                                            ⚡
                                        </span>
                                        <p className="text-orange-700 font-medium text-sm">
                                            Only 50 spots left this month! Join
                                            500+ active members
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                            {/* Trust Indicators */}
                            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-2">
                                    <span className="text-primary">
                                        ⭐⭐⭐⭐⭐
                                    </span>
                                    <span>4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-success">🔒</span>
                                    <span>Secure Payment</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-secondary">💯</span>
                                    <span>Money Back Guarantee</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Enhanced Transformation Showcase (Second on all devices) */}
                        <div className="relative order-2">
                            {/* Enhanced Transformation Carousel */}
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-elevation p-6 lg:p-8 border border-gray-100">
                                <div className="relative overflow-hidden rounded-xl">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out"
                                        style={{
                                            transform: `translateX(-${currentSlide * 100
                                                }%)`,
                                        }}
                                    >
                                        {transformations?.map(
                                            (transformation) => (
                                                <div
                                                    key={transformation?.id}
                                                    className="w-full flex-shrink-0"
                                                >
                                                    <div className="text-center">
                                                        <div className="relative overflow-hidden rounded-lg mb-4 group">
                                                            <Image
                                                                src={
                                                                    transformation?.before
                                                                }
                                                                alt={`${transformation?.name} transformation`}
                                                                className="w-full  object-cover transition-transform duration-300"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                <p className="font-semibold">
                                                                    {
                                                                        transformation?.name
                                                                    }
                                                                </p>
                                                                <p className="text-sm">
                                                                    Amazing
                                                                    transformation!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Enhanced Carousel Indicators */}
                                <div className="flex justify-center space-x-2 mt-6">
                                    {transformations?.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setCurrentSlide(index);
                                                setIsPaused(true);
                                                setTimeout(
                                                    () => setIsPaused(false),
                                                    10000
                                                );
                                            }}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? "bg-primary scale-110 shadow-md"
                                                : "bg-gray-300 hover:bg-gray-400"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Additional stats */}
                                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                    <div className="p-3 bg-green-50 rounded-lg">
                                        <p className="text-lg font-bold text-primary">
                                            16,000+
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Transformations
                                        </p>
                                    </div>
                                    <div className="p-3 bg-blue-50 rounded-lg">
                                        <p className="text-lg font-bold text-secondary">
                                            4.9⭐
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Average Rating
                                        </p>
                                    </div>
                                    <div className="p-3 bg-orange-50 rounded-lg">
                                        <p className="text-lg font-bold text-accent">
                                            90%
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Success Rate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Start Your Fitness Journey"
            >
                <div className="grid grid-cols-1  md:grid-cols-3 gap-6 items-start">
                    {/* Left column - visual */}
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
                            Fill a few quick details and secure your monthly
                            training seat with our expert coaches.
                        </p>
                    </div>

                    {/* Right column - form */}
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
                                    placeholder="Enter Your Name"
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
                                    placeholder="Enter Your Email"
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
                                    placeholder="Enter Your Mobile Number"
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
                        Payment received. Our team will reach out to schedule
                        your first session and share onboarding details.
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

export default HeroSection;
