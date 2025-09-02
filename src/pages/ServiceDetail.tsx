
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  DollarSign,
  Users,
  Code,
  Palette,
  Shield,
  PenTool,
  Smartphone,
  BarChart3
} from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Service data mapping
  const serviceData: Record<string, any> = {
    "web-development": {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      longDescription: "Transform your digital presence with our comprehensive web development services. We create responsive, fast, and scalable web solutions that drive business growth and user engagement.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      pricing: "Starting at $2,500",
      duration: "2-6 weeks",
      rating: 4.9,
      projects: "120+ projects",
      features: [
        "Responsive Design",
        "Performance Optimization", 
        "SEO-Friendly",
        "Modern Frameworks",
        "Database Integration",
        "API Development"
      ],
      process: [
        "Requirements Analysis",
        "Design & Wireframing",
        "Development & Testing",
        "Deployment & Launch"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"],
      portfolio: [
        {
          title: "E-commerce Platform",
          description: "Full-featured online store with payment integration",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
        },
        {
          title: "Corporate Website", 
          description: "Professional business website with CMS",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
        }
      ]
    },
    "ui-ux-design": {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers",
      longDescription: "Create memorable user experiences with our design expertise. We focus on user research, intuitive interfaces, and conversion optimization to ensure your digital products not only look great but perform exceptionally.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      pricing: "Starting at $1,800",
      duration: "1-4 weeks", 
      rating: 4.8,
      projects: "85+ projects",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping", 
        "Design Systems",
        "Usability Testing",
        "Brand Integration"
      ],
      process: [
        "User Research & Analysis",
        "Wireframing & Information Architecture", 
        "Visual Design & Prototyping",
        "Testing & Refinement"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Framer"],
      portfolio: [
        {
          title: "Mobile App Design",
          description: "Complete UI/UX for iOS and Android app",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
        },
        {
          title: "Dashboard Interface",
          description: "Analytics dashboard with data visualization",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
        }
      ]
    }
  };

  // Default to web-development if service not found
  const service = serviceData[serviceId || "web-development"] || serviceData["web-development"];
  const Icon = service.icon;

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
          <div className="flex items-center gap-6 mb-8">
            <div className={`w-20 h-20 ${service.bgColor} rounded-xl flex items-center justify-center`}>
              <Icon className={`w-10 h-10 ${service.color}`} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">{service.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold text-foreground">{service.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-lg font-bold text-foreground">{service.duration}</span>
              </div>
              <p className="text-sm text-muted-foreground">Timeline</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <DollarSign className="w-5 h-5 text-secondary" />
                <span className="text-lg font-bold text-foreground">{service.pricing}</span>
              </div>
              <p className="text-sm text-muted-foreground">Starting Price</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-lg font-bold text-foreground">{service.projects}</span>
              </div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>

          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-foreground">Service </span>
                <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              {/* Features */}
              <h3 className="text-xl font-bold text-foreground mb-4">What's Included:</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <h3 className="text-xl font-bold text-foreground mb-4">Technologies We Use:</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-foreground">Our </span>
                <span className="text-gradient">Process</span>
              </h3>
              <div className="space-y-6">
                {service.process.map((step: string, index: number) => (
                  <Card key={index} className="p-6 border-border/50 bg-card">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shrink-0">
                        <span className="text-foreground font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {step}
                        </h4>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section className="py-16 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Recent </span>
              <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See examples of our {service.title.toLowerCase()} projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.portfolio.map((project: any, index: number) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:shadow-elegant transition-spring hover:scale-105 group bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-spring"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
                    View Case Study
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Ready to Get </span>
            <span className="text-gradient">Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your {service.title.toLowerCase()} project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
