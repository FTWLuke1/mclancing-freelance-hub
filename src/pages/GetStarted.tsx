
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight, 
  MessageCircle,
  FileText,
  CreditCard,
  Rocket,
  Clock,
  Users,
  Star
} from "lucide-react";

const GetStarted = () => {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Tell us about your project, goals, and requirements",
      duration: "30 minutes",
      actions: ["Project discussion", "Requirement gathering", "Timeline planning"],
      icon: MessageCircle,
    },
    {
      step: 2,
      title: "Proposal & Agreement",
      description: "Receive detailed proposal with scope, timeline, and pricing",
      duration: "1-2 days",
      actions: ["Detailed proposal", "Contract signing", "Project kickoff"],
      icon: FileText,
    },
    {
      step: 3,
      title: "Project Development",
      description: "We bring your vision to life with regular updates",
      duration: "1-8 weeks",
      actions: ["Development work", "Regular updates", "Client feedback"],
      icon: Rocket,
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "Final delivery with ongoing support and maintenance",
      duration: "Ongoing",
      actions: ["Final delivery", "Testing & QA", "Ongoing support"],
      icon: CheckCircle,
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$500 - $2,000",
      description: "Perfect for small projects and quick solutions",
      features: [
        "Basic web development",
        "Simple design work",
        "Email support",
        "1 month warranty"
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$2,000 - $8,000",
      description: "Ideal for medium-sized projects and businesses",
      features: [
        "Full web applications",
        "Custom UI/UX design",
        "Priority support",
        "3 months warranty",
        "SEO optimization",
        "Mobile responsive"
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$8,000+",
      description: "For large-scale projects and complex requirements",
      features: [
        "Complex applications",
        "Advanced integrations",
        "24/7 support",
        "6 months warranty",
        "Performance optimization",
        "Security audit",
        "Team training"
      ],
      recommended: false,
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
            <span className="text-foreground">Get </span>
            <span className="text-gradient">Started</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your digital presence? Here's everything you need to know 
            to start your project with MClancing.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Our </span>
              <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and effective. Here's how we work together to achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 text-center border-border/50 hover:shadow-elegant transition-spring hover:scale-105 group bg-card">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spring">
                    <span className="text-foreground font-bold text-lg">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spring">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">{step.duration}</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    {step.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Choose Your </span>
              <span className="text-gradient">Package</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for every project size. All packages include our commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`p-8 border-border/50 hover:shadow-elegant transition-spring hover:scale-105 group bg-card relative ${pkg.recommended ? 'ring-2 ring-secondary' : ''}`}>
                {pkg.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={pkg.recommended ? "hero" : "outline"} 
                  className="w-full group-hover:scale-105 transition-spring"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Frequently Asked </span>
              <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-border/50 bg-card">
              <h3 className="text-lg font-bold text-foreground mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Project timelines vary based on complexity. Simple websites take 1-3 weeks, 
                while complex applications can take 2-3 months. We provide detailed timelines during consultation.
              </p>
            </Card>

            <Card className="p-6 border-border/50 bg-card">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Do you provide ongoing support?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! All packages include warranty period and we offer ongoing maintenance 
                and support plans to keep your project running smoothly.
              </p>
            </Card>

            <Card className="p-6 border-border/50 bg-card">
              <h3 className="text-lg font-bold text-foreground mb-2">
                What's included in the free consultation?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We discuss your project goals, requirements, timeline, and provide initial 
                recommendations. No commitment required - it's completely free!
              </p>
            </Card>

            <Card className="p-6 border-border/50 bg-card">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Can you work with my existing team?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Absolutely! We collaborate seamlessly with existing teams and can adapt 
                our workflow to match your preferred tools and processes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;
