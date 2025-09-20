import React from "react";

const CoachCredentialsSection = () => {
    const coaches = [
        {
            id: 1,
            name: "Pathik Patel",
            role: "Strength & Conditioning Coach",
            image: "/assets/trainer/t-1.jpg", // Replace with actual image path
            experience: "8+ Years Experience",
            clientsCount: "500+ Clients Trained",
            specializations: [
                "Weight Training",
                "Strength Building",
                "Athletic Performance",
            ],
            certifications: ["ACSM Certified", "NSCA-CSCS"],
            achievements: "Transformed 500+ Lives",
        },
        {
            id: 4,
            name: "Sachin Bodade",
            role: "Clinical Health & Recovery Coach",
            image: "/assets/trainer/t-4.jpg", // Replace with actual image path
            experience: "5+ Years Experience",
            clientsCount: "600+ Clients Trained",
            specializations: [
                "Diabetes Management",
                "PCOD/PCOS",
                "Thyroid Optimization",
            ],
            certifications: [
                "Diabetes Educator",
                "Clinical Exercise Physiologist",
            ],
            achievements: "600+ Health Recoveries",
        },
        {
            id: 2,
            name: "Deep",
            role: "Weight Loss & Nutrition Expert",
            image: "/assets/trainer/t-2.jpg", // Replace with actual image path
            experience: "3+ Years Experience",
            clientsCount: "800+ Clients Trained",
            specializations: [
                "Weight Loss",
                "Nutrition Planning",
                "Metabolic Training",
            ],
            certifications: ["Clinical Nutritionist", "ACE Certified"],
            achievements: "800+ Weight Loss Success Stories",
        },
        {
            id: 3,
            name: "Akash Kale",
            role: "Clinical Health & Recovery Coach",
            image: "/assets/trainer/t-3.jpg", // Replace with actual image path
            experience: "3+ Years Experience",
            clientsCount: "600+ Clients Trained",
            specializations: [
                "Diabetes Management",
                "PCOD/PCOS",
                "Thyroid Optimization",
            ],
            certifications: [
                "Diabetes Educator",
                "Clinical Exercise Physiologist",
            ],
            achievements: "600+ Health Recoveries",
        },
        
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Coach Credentials
                    </div>

                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                        <span className="text-primary">Certified Coaches</span>{" "}
                        • <span className="text-success">Global Expertise</span>{" "}
                        • <span className="text-secondary">Proven Results</span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Our Transformation Results Are Guided By Internationally
                        Certified Trainers, Backed By Leading Fitness
                        Institutions.
                    </p>
                </div>

                {/* Coaches Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coaches?.map((coach) => (
                        <div
                            key={coach?.id}
                            className="bg-white rounded-2xl shadow-card transition-all duration-300 transform border border-gray-100 overflow-hidden group"
                        >
                            {/* Coach Image */}
                            <div className="relative h-80 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                <img
                                    src={coach?.image}
                                    alt={`${coach?.name} - ${coach?.role}`}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                />
                            </div>

                            {/* Coach Info */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-foreground mb-1">
                                        {coach?.name}
                                    </h3>
                                    <p className="text-primary font-semibold">
                                        {coach?.role}
                                    </p>
                                </div>

                                {/* Social Proof */}
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 text-success font-medium text-sm mb-2">
                                        <span className="w-2 h-2 bg-success rounded-full" />
                                        {coach?.clientsCount}
                                    </div>
                                    <div className="flex items-center gap-2 text-secondary font-medium text-sm mb-2">
                                        <span className="w-2 h-2 bg-secondary rounded-full" />
                                        {coach?.achievements}
                                    </div>
                                    <div className="flex items-center gap-2 text-secondary font-medium text-sm">
                                        <span className="w-2 h-2 bg-secondary rounded-full" />
                                        {coach?.experience}
                                    </div>
                                </div>

                                {/* Specializations */}
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground mb-2">
                                        Specializations:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {coach?.specializations?.map(
                                            (spec, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-muted-foreground px-2 py-1 rounded-md text-xs"
                                                >
                                                    {spec}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-16 bg-gradient-to-r from-primary/5 to-success/5 rounded-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">
                                4+
                            </div>
                            <div className="text-foreground font-medium mb-1">
                                Expert Coaches
                            </div>
                            <div className="text-muted-foreground text-sm">
                                Internationally Certified
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-success mb-2">
                                35+
                            </div>
                            <div className="text-foreground font-medium mb-1">
                                Years Combined
                            </div>
                            <div className="text-muted-foreground text-sm">
                                Total Experience
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-secondary mb-2">
                                2,000+
                            </div>
                            <div className="text-foreground font-medium mb-1">
                                Lives Transformed
                            </div>
                            <div className="text-muted-foreground text-sm">
                                By Our Team
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-warning mb-2">
                                15+
                            </div>
                            <div className="text-foreground font-medium mb-1">
                                Certifications
                            </div>
                            <div className="text-muted-foreground text-sm">
                                Global Standards
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Statement */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-xl p-6 border border-primary/20">
                        <p className="text-lg text-foreground font-medium">
                            "Every coach on our team is hand-picked,
                            internationally certified, and committed to your
                            success.
                            <span className="text-primary font-bold">
                                {" "}
                                Your transformation is in expert hands.
                            </span>
                            "
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoachCredentialsSection;
