import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Code, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Tutorials", href: "#tutorials" },
    { name: "Competitions", href: "#competitions" },
    { name: "AI & ML", href: "#ai-ml" },
    { name: "Community", href: "#community" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">CodeClub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering the next generation of developers through community, learning, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground interactive text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground interactive">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground interactive">Getting Started</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground interactive">Code of Conduct</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground interactive">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest updates and exclusive content.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button 
                  key={social.label}
                  variant="ghost" 
                  size="icon"
                  className="text-muted-foreground hover:text-foreground interactive"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2024 CodeClub. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for coders everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;