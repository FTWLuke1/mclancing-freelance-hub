import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Shield, 
  PenTool, 
  Smartphone, 
  BarChart3, 
  ArrowRight 
} from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert and engage",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Compelling content that tells your story and drives results",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that grow your business",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
  ];

  return (
    <section className="py-24 bg-brand-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. 
            From concept to completion, we deliver excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-border/50 p-8 hover:shadow-elegant transition-spring hover:scale-105 group"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-spring`}>
                  <Icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" className="text-secondary hover:text-secondary-foreground p-0 h-auto font-medium group-hover:translate-x-2 transition-spring">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg" className="text-lg px-8 py-6">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;