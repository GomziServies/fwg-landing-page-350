import React, { useState } from "react";
import Button from "../../../components/ui/Button";

const VideoTestimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Upendra Joshi",
            videoUrl: "https://youtube.com/shorts/z9VF5eQhIeU",
            embedId: "z9VF5eQhIeU",
            thumbnail: "/assets/images/testimonials/upendra-joshi.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW",
        },
        {
            id: 2,
            name: "Arpit Gadiya",
            videoUrl: "https://youtube.com/shorts/wi7WxMBlhtw",
            embedId: "wi7WxMBlhtw",
            thumbnail: "/assets/images/testimonials/arpit-gadiya.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW",
        },
        {
            id: 3,
            name: "Jenil Bhai",
            videoUrl: "https://youtube.com/shorts/8OIXPDAqDdQ",
            embedId: "8OIXPDAqDdQ",
            thumbnail: "/assets/images/testimonials/jenil-bhai.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW",
        },
        {
            id: 4,
            name: "Kenil Bhai",
            videoUrl: "https://youtube.com/shorts/R0KtUwwbTok",
            embedId: "R0KtUwwbTok",
            thumbnail: "/assets/images/testimonials/kenil-bhai.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW",
        },
        {
            id: 5,
            name: "Snehal Chohan",
            videoUrl: "https://youtube.com/shorts/57uKs_Xc7s4",
            embedId: "57uKs_Xc7s4",
            thumbnail: "/assets/images/testimonials/snehal-chohan.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW",
        },
        {
            id: 6,
            name: "Velis",
            videoUrl: "https://youtube.com/shorts/Hndybc5wEsc",
            embedId: "Hndybc5wEsc",
            thumbnail: "/assets/images/testimonials/velis.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW",
        },
    ];

    const handlePlayVideo = (testimonial) => {
        setSelectedVideo(testimonial);
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        setSelectedVideo(null);
    };

    // Generate YouTube thumbnail URL
    const getYoutubeThumbnail = (embedId) => {
        return `https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`;
    };

    return (
        <>
            <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-full px-6 py-3 mb-6">
                            <span className="text-green-600 text-sm font-medium">
                                🎬 Weight Loss Success Stories
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            True Stories, Proven Weight Loss
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Hear directly from our clients about their inspiring
                            weight loss journeys and the life-changing results
                            they achieved with our fitness & nutrition programs.
                        </p>
                    </div>

                    {/* Video Testimonials Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w- group relative bg-black rounded-2xl overflow-hidden shadow-elevation hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                onClick={() => handlePlayVideo(testimonial)}
                            >
                                {/* Background Image */}
                                <div className="relative aspect-[9/16] overflow-hidden">
                                    <img
                                        src={getYoutubeThumbnail(
                                            testimonial.embedId
                                        )}
                                        alt={`${testimonial.name} testimonial`}
                                        className="w-full h-full object-cover transition-transform duration-300 "
                                        onError={(e) => {
                                            // Fallback to a placeholder if thumbnail fails to load
                                            e.target.src =
                                                "https://via.placeholder.com/360x640/1f2937/ffffff?text=" +
                                                encodeURIComponent(
                                                    testimonial.name
                                                );
                                        }}
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6">
                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            {/* Circular Background */}
                                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300">
                                                <svg
                                                    className="w-4 h-4 ml-0 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>

                                            {/* Pulse Effect */}
                                            <div className="absolute inset-0 w-10 h-10 bg-primary rounded-full animate-ping opacity-20"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" aria-modal="true" role="dialog">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeVideoModal} />
                    
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full mx-auto transform transition-all duration-200 scale-100 max-h-[90vh] flex flex-col max-w-4xl">
                        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b flex-shrink-0">
                            <div className="text-base sm:text-lg font-semibold text-gray-900">
                                {selectedVideo ? `${selectedVideo.name} - Student Review` : "Student Review"}
                            </div>
                            <button
                                aria-label="Close dialog"
                                onClick={closeVideoModal}
                                className="inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-md text-gray-500 hover:bg-gray-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                            {selectedVideo && (
                                <div className="relative w-full">
                                    <div className="aspect-video">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0`}
                                            title={`${selectedVideo.name} testimonial`}
                                            className="w-full h-full rounded-lg"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoTestimonials;
