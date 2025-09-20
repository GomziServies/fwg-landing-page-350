import React, { useState } from "react";
import Modal from "../../../components/ui/Modal";
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
            title: "FGIIT STUDENT REVIEW"
        },
        {
            id: 2,
            name: "Arpit Gadiya",
            videoUrl: "https://youtube.com/shorts/wi7WxMBlhtw",
            embedId: "wi7WxMBlhtw",
            thumbnail: "/assets/images/testimonials/arpit-gadiya.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW"
        },
        {
            id: 3,
            name: "Jenil Bhai",
            videoUrl: "https://youtube.com/shorts/8OIXPDAqDdQ",
            embedId: "8OIXPDAqDdQ",
            thumbnail: "/assets/images/testimonials/jenil-bhai.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW"
        },
        {
            id: 4,
            name: "Kenil Bhai",
            videoUrl: "https://youtube.com/shorts/R0KtUwwbTok",
            embedId: "R0KtUwwbTok",
            thumbnail: "/assets/images/testimonials/kenil-bhai.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW"
        },
        {
            id: 5,
            name: "Snehal Chohan",
            videoUrl: "https://youtube.com/shorts/57uKs_Xc7s4",
            embedId: "57uKs_Xc7s4",
            thumbnail: "/assets/images/testimonials/snehal-chohan.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW"
        },
        {
            id: 6,
            name: "Velis",
            videoUrl: "https://youtube.com/shorts/Hndybc5wEsc",
            embedId: "Hndybc5wEsc",
            thumbnail: "/assets/images/testimonials/velis.jpg", // Placeholder
            title: "FGIIT STUDENT REVIEW"
        }
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
                            <span className="text-green-600 text-sm font-medium">🎬 Student Success Stories</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Real Students, Real Results
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Hear directly from our students about their transformation journey and success with our fitness programs
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
                                        src={getYoutubeThumbnail(testimonial.embedId)}
                                        alt={`${testimonial.name} testimonial`}
                                        className="w-full h-full object-cover transition-transform duration-300 "
                                        onError={(e) => {
                                            // Fallback to a placeholder if thumbnail fails to load
                                            e.target.src = "https://via.placeholder.com/360x640/1f2937/ffffff?text=" + encodeURIComponent(testimonial.name);
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
                                                    className="w-4 h-4 ml-0 text-white ml-1" 
                                                    fill="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z"/>
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
            <Modal
                isOpen={isVideoModalOpen}
                onClose={closeVideoModal}
                title={selectedVideo ? `${selectedVideo.name} - Student Review` : "Student Review"}
                className="max-w-4xl"
            >
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
            </Modal>
        </>
    );
};

export default VideoTestimonials;