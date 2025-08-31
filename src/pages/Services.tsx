import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Shield, 
  PenTool, 
  Smartphone, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Modern Frameworks"],
      pricing: "Starting at $2,500",
      duration: "2-6 weeks",
      rating: 4.9,
      projects: "120+ projects",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      pricing: "Starting at $1,800",
      duration: "1-4 weeks",
      rating: 4.8,
      projects: "85+ projects",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
      pricing: "Starting at $3,200",
      duration: "1-3 weeks",
      rating: 5.0,
      projects: "65+ projects",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Compelling content that tells your story and drives engagement",
      features: ["SEO Copywriting", "Blog Posts", "Website Content", "Technical Writing"],
      pricing: "Starting at $800",
      duration: "1-2 weeks",
      rating: 4.7,
      projects: "200+ projects",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
      pricing: "Starting at $4,500",
      duration: "3-8 weeks",
      rating: 4.9,
      projects: "45+ projects",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that grow your business and ROI",
      features: ["Social Media Marketing", "PPC Campaigns", "Analytics", "Brand Strategy"],
      pricing: "Starting at $1,500",
      duration: "2-4 weeks",
      rating: 4.6,
      projects: "90+ projects",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Professional </span>
            <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions designed to transform your business. 
            From conception to execution, we deliver excellence at every step.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient border-border/50 p-8 hover:shadow-elegant transition-spring hover:scale-105 group"
                >
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-spring`}>
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-foreground">{service.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="font-semibold text-foreground text-sm">{service.duration}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Timeline</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-4 h-4 text-secondary" />
                        <span className="font-semibold text-foreground text-sm">{service.projects}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {service.pricing}
                      </Badge>
                    </div>
                    <Button variant="outline" className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;