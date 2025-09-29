import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  actionText?: string;
  onAction?: () => void;
  interactive?: boolean;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  badge,
  difficulty,
  actionText,
  onAction,
  interactive = true,
}: FeatureCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <Card 
      className={`
        bg-gradient-card border-border/50 backdrop-blur-sm shadow-card
        ${interactive ? "hover:shadow-2xl interactive glow-primary" : ""}
      `}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              {difficulty && (
                <Badge 
                  variant="outline" 
                  className={`mt-1 text-xs ${getDifficultyColor()}`}
                >
                  {difficulty}
                </Badge>
              )}
            </div>
          </div>
          {badge && (
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              {badge}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-4">
          {description}
        </CardDescription>
        {actionText && onAction && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onAction}
            className="w-full"
          >
            {actionText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;