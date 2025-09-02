
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern tech workspace"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float blur-2xl" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float blur-lg" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-border/50 mb-8">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">
              Professional Freelance Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Elevate Your </span>
            <span className="text-gradient">Digital</span>
            <br />
            <span className="text-foreground">Presence with </span>
            <span className="text-gradient">MClancing</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium freelance services and digital products designed to transform 
            your business. From web development to cybersecurity, we deliver excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/services">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
                View Portfolio
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
