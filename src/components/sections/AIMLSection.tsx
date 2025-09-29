import ContentSection from "../ContentSection";
import FeatureCard from "../FeatureCard";
import { Brain, Bot, ChartLine, Eye, Cpu, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AIMLSection = () => {
  const projects = [
    {
      icon: Brain,
      title: "Neural Network from Scratch",
      description: "Build and train neural networks using Python and NumPy. Understand the fundamentals of deep learning.",
      difficulty: "Advanced" as const,
      badge: "Popular",
      actionText: "Start Building",
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "Create intelligent chatbots using NLP libraries and transformer models.",
      difficulty: "Intermediate" as const,
      actionText: "Build Bot",
    },
    {
      icon: ChartLine,
      title: "Data Visualization & Analysis",
      description: "Master data science with Pandas, Matplotlib, and Seaborn for insightful visualizations.",
      difficulty: "Beginner" as const,
      badge: "Beginner Friendly",
      actionText: "Analyze Data",
    },
    {
      icon: Eye,
      title: "Computer Vision Projects",
      description: "Work with OpenCV and TensorFlow to build image recognition and processing applications.",
      difficulty: "Intermediate" as const,
      actionText: "See with AI",
    },
    {
      icon: Cpu,
      title: "MLOps & Deployment",
      description: "Learn to deploy machine learning models in production using Docker and cloud platforms.",
      difficulty: "Advanced" as const,
      badge: "Industry Ready",
      actionText: "Deploy Models",
    },
    {
      icon: Zap,
      title: "AI Ethics & Bias",
      description: "Understand responsible AI development, bias detection, and ethical considerations in ML.",
      difficulty: "Intermediate" as const,
      actionText: "Learn Ethics",
    },
  ];

  const handleProjectClick = (title: string) => {
    toast({
      title: `${title} Project`,
      description: "Project resources will be available soon! Join our newsletter for updates.",
    });
  };

  return (
    <ContentSection
      id="ai-ml"
      title="AI & Machine Learning Hub"
      subtitle="Dive into the future of technology with hands-on AI and ML projects. From basics to advanced implementations."
      variant="featured"
      ctaText="Explore All AI Projects"
      ctaLink="#ai-projects"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <FeatureCard
            key={index}
            {...project}
            onAction={() => handleProjectClick(project.title)}
          />
        ))}
      </div>

      {/* AI Learning Path */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-8">AI Learning Roadmap</h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {["Python Basics", "Statistics & Math", "ML Algorithms", "Deep Learning", "Specialization"].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-primary/20 text-primary border border-primary/30 rounded-full w-12 h-12 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="ml-4 text-left">
                <div className="font-semibold">{step}</div>
                <div className="text-sm text-muted-foreground">Step {index + 1}</div>
              </div>
              {index < 4 && (
                <Zap className="hidden md:block w-6 h-6 text-accent ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </ContentSection>
  );
};

export default AIMLSection;