import React, { useState, useEffect, useRef } from "react";

const SocialProofSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    totalTransformations: 0,
    weightLossJourneys: 0,
    clinicalRecovery: 0,
    competitionPrep: 0,
    weightGainSuccess: 0,
  });

  const sectionRef = useRef(null);

  const finalCounts = {
    totalTransformations: 16000,
    weightLossJourneys: 8000,
    clinicalRecovery: 4000,
    competitionPrep: 2000,
    weightGainSuccess: 2000,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        totalTransformations: Math.floor(
          finalCounts.totalTransformations * progress
        ),
        weightLossJourneys: Math.floor(finalCounts.weightLossJourneys * progress),
        clinicalRecovery: Math.floor(finalCounts.clinicalRecovery * progress),
        competitionPrep: Math.floor(finalCounts.competitionPrep * progress),
        weightGainSuccess: Math.floor(finalCounts.weightGainSuccess * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const achievements = [
    {
      id: 1,
      count: counts.totalTransformations,
      suffix: "+",
      label: "Total Transformations",
      description: "Complete body transformations achieved",
      icon: "🎯",
      color: "text-primary",
      bgColor: "bg-primary/10",
      progressColor: "bg-primary",
    },
    {
      id: 2,
      count: counts.weightLossJourneys,
      suffix: "+",
      label: "Successful Weight Loss",
      description: "People achieved their weight loss goals",
      icon: "⚖️",
      color: "text-success",
      bgColor: "bg-success/10",
      progressColor: "bg-success",
    },
    {
      id: 3,
      count: counts.clinicalRecovery,
      suffix: "+",
      label: "Clinical Recoveries",
      description: "Health conditions improved or reversed",
      icon: "🏥",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      progressColor: "bg-secondary",
    },
    {
      id: 4,
      count: counts.competitionPrep,
      suffix: "+",
      label: "Competition Preps",
      description: "Athletes prepared for competitions",
      icon: "🏆",
      color: "text-warning",
      bgColor: "bg-warning/10",
      progressColor: "bg-warning",
    },
    {
      id: 5,
      count: counts.weightGainSuccess,
      suffix: "+",
      label: "Muscle Gain Success",
      description: "Successful muscle building transformations",
      icon: "💪",
      color: "text-accent",
      bgColor: "bg-accent/10",
      progressColor: "bg-accent",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-muted to-background py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Thousands of people trust us for their health & fitness goals
          </p>
        </div>

        {/* First Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.slice(0, 3).map((achievement) => (
            <div
              key={achievement.id}
              className="bg-card rounded-2xl p-8 text-center shadow-card border border-border hover:shadow-elevation transition-transform transform hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-2xl">{achievement.icon}</span>
              </div>

              <div className="mb-4">
                <div className={`text-4xl font-bold ${achievement.color} mb-1`}>
                  {achievement.count.toLocaleString("en-IN")}
                  {achievement.suffix}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {achievement.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-2000 ease-out ${achievement.progressColor}`}
                  style={{
                    width: isVisible ? "100%" : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row (2 cards, centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
          {achievements.slice(3, 5).map((achievement) => (
            <div
              key={achievement.id}
              className="bg-card rounded-2xl p-8 text-center shadow-card border border-border hover:shadow-elevation transition-transform transform hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-2xl">{achievement.icon}</span>
              </div>

              <div className="mb-4">
                <div className={`text-4xl font-bold ${achievement.color} mb-1`}>
                  {achievement.count.toLocaleString("en-IN")}
                  {achievement.suffix}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {achievement.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-2000 ease-out ${achievement.progressColor}`}
                  style={{
                    width: isVisible ? "100%" : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
