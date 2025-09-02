import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "mclancing@proton.com",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9 AM to 6 PM PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "MichiganCity, IN",
      description: "We're based in the heart of Silicon Valley",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon - Fri: 9 AM - 6 PM PST",
      description: "Weekend support available for urgent matters",
    },
  ];

  const services = [
    "Web Development",
    "UI/UX Design", 
    "Cybersecurity",
    "Content Writing",
    "Mobile Development",
    "Digital Marketing",
    "Consulting",
    "Other"
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
            <span className="text-foreground">Get In </span>
            <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to start your next project? We'd love to hear from you. 
            Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-foreground">Send Us a </span>
                <span className="text-gradient">Message</span>
              </h2>
              
              <Card className="card-gradient border-border/50 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input 
                        id="firstName"
                        placeholder="John"
                        className="bg-background border-border/50 focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input 
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background border-border/50 focus:border-secondary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-border/50 focus:border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-background border-border/50 focus:border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground">Service Interested In</Label>
                    <select 
                      id="service"
                      className="w-full px-3 py-2 bg-background border border-border/50 rounded-md focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 text-foreground"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-foreground">Project Budget</Label>
                    <select 
                      id="budget"
                      className="w-full px-3 py-2 bg-background border border-border/50 rounded-md focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 text-foreground"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Project Details</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={6}
                      className="bg-background border-border/50 focus:border-secondary resize-none"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full text-lg">
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-foreground">Contact </span>
                <span className="text-gradient">Information</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card 
                      key={index} 
                      className="card-gradient border-border/50 p-6 hover:shadow-elegant transition-spring hover:scale-105 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-spring">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-secondary font-medium mb-2">
                            {info.detail}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Start Live Chat
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Mail className="w-5 h-5 mr-3" />
                  Get Project Quote
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Frequently Asked </span>
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer: "Yes! We offer comprehensive support and maintenance packages to keep your digital assets running smoothly. This includes updates, security monitoring, and technical support."
              },
              {
                question: "What's your payment structure?",
                answer: "We typically work with a 50% deposit to start, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We're experienced in collaborating with internal teams and can seamlessly integrate with your existing workflows and processes."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-gradient border-border/50 p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
