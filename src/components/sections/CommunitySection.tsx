import ContentSection from "../ContentSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, MessageSquare, Star } from "lucide-react";

const CommunitySection = () => {
  const spotlights = [
    {
      name: "Alex Chen",
      role: "Full-Stack Developer",
      achievement: "Winner - AI Hackathon 2024",
      bio: "Built an AI-powered study assistant that helps students learn more efficiently.",
      avatar: "/api/placeholder/64/64",
      github: "alexchen",
      linkedin: "alexchen-dev",
      projects: "15",
      contributions: "200+",
    },
    {
      name: "Priya Sharma",
      role: "ML Engineer",
      achievement: "Best Innovation Award",
      bio: "Created a machine learning model for predicting campus energy consumption.",
      avatar: "/api/placeholder/64/64",
      github: "priyasharma",
      linkedin: "priya-sharma-ml",
      projects: "12",
      contributions: "150+",
    },
    {
      name: "Jordan Kim",
      role: "Frontend Specialist",
      achievement: "Community Choice Award",
      bio: "Designed stunning user interfaces and mentors new club members.",
      avatar: "/api/placeholder/64/64",
      github: "jordankim",
      linkedin: "jordan-kim-frontend",
      projects: "20",
      contributions: "300+",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Senior",
      content: "The coding club has been instrumental in my growth. The weekly challenges and mentorship helped me land my dream internship!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Information Systems Junior",
      content: "Amazing community! The hackathons are challenging and the networking opportunities are incredible.",
      rating: 5,
    },
  ];

  return (
    <ContentSection
      id="community"
      title="Community Spotlight"
      subtitle="Meet our amazing members who are making waves in the tech world and inspiring the next generation of coders."
    >
      <div className="space-y-16">
        {/* Member Spotlights */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Featured Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spotlights.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 interactive shadow-card">
                <CardHeader className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary/20 text-primary text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                  <div className="inline-flex items-center space-x-1 bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    <Star className="w-3 h-3" />
                    <span>{member.achievement}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  
                  {/* Stats */}
                  <div className="flex justify-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">{member.projects}</div>
                      <div className="text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-accent">{member.contributions}</div>
                      <div className="text-muted-foreground">Contributions</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">What Our Members Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center bg-gradient-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Connect with like-minded coders, participate in exciting projects, and grow your skills together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Join Discord
            </Button>
            <Button variant="outline" size="lg">
              Follow on GitHub
            </Button>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default CommunitySection;