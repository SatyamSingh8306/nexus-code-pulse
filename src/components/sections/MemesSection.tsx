import { useState } from "react";
import ContentSection from "../ContentSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share, Laugh, Coffee, Bug } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MemesSection = () => {
  const [likedMemes, setLikedMemes] = useState<number[]>([]);

  const memes = [
    {
      id: 1,
      title: "When your code works on the first try",
      content: "It's a miracle! 🎉",
      emoji: "🦄",
      likes: 127,
      comments: 23,
      category: "coding-life"
    },
    {
      id: 2,
      title: "Me after debugging for 6 hours",
      content: "It was a missing semicolon... 😭",
      emoji: "😵",
      likes: 89,
      comments: 15,
      category: "debugging"
    },
    {
      id: 3,
      title: "Stack Overflow developers",
      content: "The real MVPs of programming 🏆",
      emoji: "🦸",
      likes: 156,
      comments: 31,
      category: "community"
    },
    {
      id: 4,
      title: "When the junior dev's solution works better",
      content: "Maybe I should go back to school... 🤔",
      emoji: "🤯",
      likes: 92,
      comments: 18,
      category: "learning"
    },
    {
      id: 5,
      title: "CSS in a nutshell",
      content: "Why won't you center?! 😤",
      emoji: "📐",
      likes: 203,
      comments: 45,
      category: "frontend"
    },
    {
      id: 6,
      title: "Production vs Development",
      content: "It works on my machine! 🤷‍♂️",
      emoji: "💻",
      likes: 178,
      comments: 27,
      category: "devops"
    }
  ];

  const handleLike = (memeId: number) => {
    setLikedMemes(prev => 
      prev.includes(memeId) 
        ? prev.filter(id => id !== memeId)
        : [...prev, memeId]
    );
    
    toast({
      title: "Nice one! 😄",
      description: "Thanks for the reaction!",
    });
  };

  const handleShare = (title: string) => {
    toast({
      title: "Meme shared! 📱",
      description: `"${title}" copied to clipboard!`,
    });
  };

  return (
    <ContentSection
      id="memes"
      title="Coding Memes & Fun"
      subtitle="Because programming is serious business... but we can laugh about it! Share your favorite coding moments."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memes.map((meme) => (
          <Card key={meme.id} className="bg-gradient-card border-border/50 interactive shadow-card overflow-hidden">
            <CardContent className="p-0">
              {/* Meme Header */}
              <div className="p-4 border-b border-border/30">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                    {meme.emoji}
                  </div>
                  <div>
                    <h3 className="font-semibold">{meme.title}</h3>
                    <p className="text-sm text-muted-foreground">#{meme.category}</p>
                  </div>
                </div>
              </div>

              {/* Meme Content */}
              <div className="p-6 text-center">
                <p className="text-lg text-muted-foreground italic">"{meme.content}"</p>
              </div>

              {/* Interaction Bar */}
              <div className="px-4 py-3 bg-card/50 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(meme.id)}
                      className={`text-muted-foreground hover:text-red-400 ${
                        likedMemes.includes(meme.id) ? 'text-red-400' : ''
                      }`}
                    >
                      <Heart className={`w-4 h-4 mr-1 ${likedMemes.includes(meme.id) ? 'fill-current' : ''}`} />
                      {meme.likes + (likedMemes.includes(meme.id) ? 1 : 0)}
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-400">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {meme.comments}
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare(meme.title)}
                    className="text-muted-foreground hover:text-accent"
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fun Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-lg p-6">
          <Laugh className="w-8 h-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold">500+</div>
          <div className="text-sm text-muted-foreground">Memes Shared</div>
        </div>
        
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-lg p-6">
          <Coffee className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold">∞</div>
          <div className="text-sm text-muted-foreground">Coffee Consumed</div>
        </div>
        
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-lg p-6">
          <Bug className="w-8 h-8 text-destructive mx-auto mb-2" />
          <div className="text-2xl font-bold">404</div>
          <div className="text-sm text-muted-foreground">Bugs Found</div>
        </div>
      </div>

      {/* Submit Meme CTA */}
      <div className="mt-12 text-center bg-gradient-card rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-4">Got a coding meme to share?</h3>
        <p className="text-muted-foreground mb-6">
          Submit your funniest coding moments and get featured in our newsletter!
        </p>
        <Button variant="hero">
          Submit Meme
        </Button>
      </div>
    </ContentSection>
  );
};

export default MemesSection;