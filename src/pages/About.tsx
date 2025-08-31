import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  Award, 
  Target, 
  Heart,
  CheckCircle,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that exceeds expectations.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, treating every project as a true partnership.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and this passion drives us to create exceptional digital experiences.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We stay ahead of the curve, using cutting-edge technologies and methodologies.",
    },
  ];

  const team = [
    {
      name: "Michael Chen",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=center",
      bio: "10+ years in web development with expertise in React, Node.js, and cloud architecture.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Rodriguez",
      role: "UI/UX Design Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=center",
      bio: "Award-winning designer with a passion for creating intuitive and beautiful user experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "Cybersecurity Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center",
      bio: "Certified security expert with extensive experience in penetration testing and compliance.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "75+", label: "Happy Clients" },
    { number: "5", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">About </span>
                <span className="text-gradient">MClancing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're a passionate team of digital professionals dedicated to helping 
                businesses thrive in the digital age. With expertise spanning web development, 
                design, security, and marketing, we deliver comprehensive solutions that drive growth.
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
                className="rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl border border-border/50">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower businesses with exceptional digital solutions that not only meet 
              today's challenges but anticipate tomorrow's opportunities. We believe in 
              building lasting partnerships through trust, innovation, and results.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient border-border/50 p-6 text-center hover:shadow-elegant transition-spring hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spring">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Meet Our </span>
              <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Talented professionals who are passionate about delivering 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border/50 overflow-hidden hover:shadow-elegant transition-spring hover:scale-105 group"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-spring"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <Button variant="ghost" size="icon" asChild className="hover:text-secondary">
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="hover:text-secondary">
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="hover:text-secondary">
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="text-gradient">Start Your Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;