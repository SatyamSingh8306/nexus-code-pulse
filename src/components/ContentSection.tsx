import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  variant?: "default" | "featured";
}

const ContentSection = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  ctaText,
  ctaLink,
  variant = "default" 
}: ContentSectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${variant === "featured" ? "bg-gradient-card" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {variant === "featured" ? (
              <span className="text-gradient">{title}</span>
            ) : (
              title
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="animate-fade-in">
          {children}
        </div>

        {ctaText && ctaLink && (
          <div className="text-center mt-12">
            <Button 
              variant={variant === "featured" ? "hero" : "outline"} 
              size="lg"
              asChild
            >
              <a href={ctaLink} className="flex items-center space-x-2">
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;