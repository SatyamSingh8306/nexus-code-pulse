import { Award, Star, Trophy, Zap } from "lucide-react";

interface GameificationBadgeProps {
  type: "newcomer" | "contributor" | "expert" | "legend";
  points: number;
  title: string;
  description: string;
}

const GameificationBadge = ({ type, points, title, description }: GameificationBadgeProps) => {
  const getIcon = () => {
    switch (type) {
      case "newcomer":
        return <Star className="w-6 h-6" />;
      case "contributor":
        return <Zap className="w-6 h-6" />;
      case "expert":
        return <Award className="w-6 h-6" />;
      case "legend":
        return <Trophy className="w-6 h-6" />;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case "newcomer":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "contributor":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "expert":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "legend":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    }
  };

  return (
    <div className={`relative border rounded-lg p-4 backdrop-blur-sm interactive ${getColorClass()}`}>
      <div className="flex items-center space-x-3 mb-2">
        {getIcon()}
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs opacity-70">Points to unlock</span>
        <span className="font-bold">{points}pts</span>
      </div>
      
      {/* Progress bar placeholder */}
      <div className="mt-3 h-2 bg-black/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-current opacity-60 transition-all duration-500"
          style={{ width: "45%" }}
        />
      </div>
    </div>
  );
};

export default GameificationBadge;