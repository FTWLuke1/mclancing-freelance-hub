import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  Download, 
  Eye, 
  ArrowRight, 
  Search,
  Filter,
  ShoppingCart
} from "lucide-react";

const Products = () => {
  const categories = ["All", "Templates", "Tools", "Branding", "Marketing"];
  
  const products = [
    {
      title: "Professional Website Template",
      description: "Modern, responsive website template perfect for businesses and portfolios. Includes 15+ pages and components.",
      price: "$49",
      originalPrice: "$79",
      rating: 4.9,
      downloads: "1.2k",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop&crop=center",
      badge: "Best Seller",
      badgeVariant: "secondary" as const,
      category: "Templates",
    },
    {
      title: "SEO Optimization Toolkit",
      description: "Comprehensive tools and guides to boost your website's search rankings and organic traffic.",
      price: "$79",
      originalPrice: "$129",
      rating: 4.8,
      downloads: "890",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=240&fit=crop&crop=center",
      badge: "Popular",
      badgeVariant: "default" as const,
      category: "Tools",
    },
    {
      title: "Brand Identity Pack",
      description: "Complete branding package including logos, guidelines, color palettes, and brand assets.",
      price: "$129",
      originalPrice: "$199",
      rating: 5.0,
      downloads: "456",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop&crop=center",
      badge: "Premium",
      badgeVariant: "destructive" as const,
      category: "Branding",
    },
    {
      title: "Social Media Template Bundle",
      description: "200+ social media templates for Instagram, Facebook, and Twitter. Editable in Figma and Canva.",
      price: "$35",
      originalPrice: "$59",
      rating: 4.7,
      downloads: "2.1k",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop&crop=center",
      badge: "Hot",
      badgeVariant: "secondary" as const,
      category: "Marketing",
    },
    {
      title: "E-commerce Dashboard UI Kit",
      description: "Complete dashboard UI kit for e-commerce applications with 50+ components and screens.",
      price: "$89",
      originalPrice: "$149",
      rating: 4.9,
      downloads: "675",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center",
      badge: "New",
      badgeVariant: "default" as const,
      category: "Templates",
    },
    {
      title: "Content Calendar Tool",
      description: "Streamline your content planning with this comprehensive calendar and scheduling tool.",
      price: "$59",
      originalPrice: "$99",
      rating: 4.6,
      downloads: "1.5k",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop&crop=center",
      badge: "Trending",
      badgeVariant: "secondary" as const,
      category: "Tools",
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
            <span className="text-foreground">Digital </span>
            <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready-to-use digital products and tools to accelerate your projects 
            and enhance your business capabilities.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-card border-border/50 focus:border-secondary"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "secondary" : "ghost"}
                    size="sm"
                    className="text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border/50 hover:shadow-elegant transition-spring hover:scale-105 group bg-card"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-spring"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={product.badgeVariant} className="font-medium">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button variant="secondary" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{product.downloads}</span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-secondary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Purchase
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-16 bg-brand-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Need Something </span>
            <span className="text-gradient">Custom?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find what you're looking for? We create custom digital products 
            tailored to your specific needs.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Request Custom Product
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;