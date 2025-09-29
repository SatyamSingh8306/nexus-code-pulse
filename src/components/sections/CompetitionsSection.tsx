import ContentSection from "../ContentSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Trophy, Users, Clock, Award } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CompetitionsSection = () => {
  const competitions = [
    {
      title: "Winter Hackathon 2024",
      description: "48-hour coding marathon focusing on AI solutions for social good",
      date: "Dec 15-17, 2024",
      participants: "150+ registered",
      prize: "$5,000",
      status: "Registration Open",
      type: "Hackathon",
    },
    {
      title: "Algorithm Challenge",
      description: "Weekly coding challenges to sharpen your problem-solving skills",
      date: "Every Friday",
      participants: "200+ active",
      prize: "Certificates",
      status: "Ongoing",
      type: "Weekly",
    },
    {
      title: "Web Dev Contest",
      description: "Build the most innovative web application using modern frameworks",
      date: "Jan 10-20, 2025",
      participants: "80+ teams",
      prize: "$2,000",
      status: "Coming Soon",
      type: "Contest",
    },
  ];

  const achievements = [
    { name: "Speed Coder", description: "Complete 10 challenges", icon: Clock },
    { name: "Team Player", description: "Win a hackathon", icon: Users },
    { name: "Innovation Master", description: "Most creative solution", icon: Award },
  ];

  const handleJoinCompetition = (title: string) => {
    toast({
      title: "Registration Interest Noted! 🏆",
      description: `We'll notify you when ${title} registration opens.`,
    });
  };

  return (
    <ContentSection
      id="competitions"
      title="Competitions & Hackathons"
      subtitle="Challenge yourself, compete with peers, and win amazing prizes while building real solutions."
      variant="featured"
    >
      <div className="space-y-8">
        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((comp, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 interactive shadow-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{comp.title}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`mt-2 ${
                        comp.status === "Registration Open" 
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : comp.status === "Ongoing"
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {comp.status}
                    </Badge>
                  </div>
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{comp.description}</CardDescription>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    <span>{comp.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{comp.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-accent">
                    <Trophy className="w-4 h-4" />
                    <span className="font-medium">{comp.prize} Prize Pool</span>
                  </div>
                </div>

                <Button 
                  variant={comp.status === "Registration Open" ? "hero" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={() => handleJoinCompetition(comp.title)}
                >
                  {comp.status === "Registration Open" ? "Register Now" : "Get Notified"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Unlock Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 interactive"
              >
                <achievement.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold">{achievement.name}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default CompetitionsSection;