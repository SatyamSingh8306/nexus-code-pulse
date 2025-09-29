import ContentSection from "../ContentSection";
import FeatureCard from "../FeatureCard";
import { Code, Database, Globe, Smartphone, Brain, Shield } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TutorialsSection = () => {
  const tutorials = [
    {
      icon: Code,
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript with interactive examples and real projects.",
      difficulty: "Beginner" as const,
      badge: "Popular",
      actionText: "Start Learning",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Learn SQL, NoSQL, and database optimization techniques for scalable applications.",
      difficulty: "Intermediate" as const,
      actionText: "Explore",
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "Build complete web applications using modern frameworks and best practices.",
      difficulty: "Advanced" as const,
      badge: "New",
      actionText: "Build Now",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create cross-platform mobile apps with React Native and Flutter.",
      difficulty: "Intermediate" as const,
      actionText: "Get Started",
    },
    {
      icon: Brain,
      title: "Machine Learning Basics",
      description: "Dive into AI/ML with Python, TensorFlow, and practical projects.",
      difficulty: "Intermediate" as const,
      badge: "Trending",
      actionText: "Learn AI",
    },
    {
      icon: Shield,
      title: "Cybersecurity Essentials",
      description: "Understand security principles, ethical hacking, and secure coding practices.",
      difficulty: "Advanced" as const,
      actionText: "Secure Code",
    },
  ];

  const handleTutorialClick = (title: string) => {
    toast({
      title: `${title} Tutorial`,
      description: "Tutorial will be available soon! Stay tuned for updates.",
    });
  };

  return (
    <ContentSection
      id="tutorials"
      title="Interactive Tutorials"
      subtitle="Learn by doing with our hands-on coding tutorials. From basics to advanced topics, we've got you covered."
      ctaText="View All Tutorials"
      ctaLink="#all-tutorials"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <FeatureCard
            key={index}
            {...tutorial}
            onAction={() => handleTutorialClick(tutorial.title)}
          />
        ))}
      </div>
    </ContentSection>
  );
};

export default TutorialsSection;