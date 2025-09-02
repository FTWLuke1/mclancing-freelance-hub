
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Calendar, 
  User, 
  Star,
  ArrowRight,
  Code,
  Palette,
  Shield
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced analytics and payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&crop=center",
      category: "Web Development",
      client: "TechCorp Inc.",
      duration: "3 months",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      rating: 5.0,
      testimonial: "Exceeded our expectations in every way. Professional, timely, and innovative.",
    },
    {
      title: "Brand Identity System",
      description: "Complete brand redesign including logo, guidelines, and marketing materials",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=center",
      category: "UI/UX Design",
      client: "StartupXYZ",
      duration: "6 weeks",
      technologies: ["Figma", "Adobe Suite", "Principle", "InVision"],
      rating: 4.9,
      testimonial: "Transformed our brand image completely. The new identity resonates perfectly with our audience.",
    },
    {
      title: "Security Audit & Implementation",
      description: "Comprehensive security assessment and implementation of protective measures",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=300&fit=crop&crop=center",
      category: "Cybersecurity",
      client: "FinanceSecure Ltd.",
      duration: "4 weeks",
      technologies: ["Penetration Testing", "OWASP", "SSL/TLS", "Compliance"],
      rating: 5.0,
      testimonial: "Their security expertise saved us from potential threats. Highly recommended.",
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "85+" },
    { label: "Years Experience", value: "5+" },
    { label: "Success Rate", value: "98%" }
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
            <span className="text-foreground">Our </span>
            <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our successful projects and see how we've helped businesses 
            achieve their digital goals with innovative solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our recent work and the impact we've made for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:shadow-elegant transition-spring hover:scale-105 group bg-card">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-spring"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Client & Duration */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Rating & Testimonial */}
                  <div className="border-t border-border/50 pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-foreground">{project.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "{project.testimonial}"
                    </p>
                  </div>

                  {/* Action */}
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Ready to Start </span>
            <span className="text-gradient">Your Project?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life with our expertise and dedication.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
