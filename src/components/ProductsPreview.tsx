import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Eye, ArrowRight } from "lucide-react";

const ProductsPreview = () => {
  const products = [
    {
      title: "Professional Website Template",
      description: "Modern, responsive website template perfect for businesses and portfolios",
      price: "$49",
      rating: 4.9,
      downloads: "1.2k",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop&crop=center",
      badge: "Best Seller",
      badgeVariant: "secondary" as const,
    },
    {
      title: "SEO Optimization Toolkit",
      description: "Comprehensive tools and guides to boost your website's search rankings",
      price: "$79",
      rating: 4.8,
      downloads: "890",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=240&fit=crop&crop=center",
      badge: "Popular",
      badgeVariant: "default" as const,
    },
    {
      title: "Brand Identity Pack",
      description: "Complete branding package including logos, guidelines, and assets",
      price: "$129",
      rating: 5.0,
      downloads: "456",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop&crop=center",
      badge: "Premium",
      badgeVariant: "destructive" as const,
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Digital </span>
            <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready-to-use digital products and tools to accelerate your projects 
            and enhance your business capabilities.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <span className="text-2xl font-bold text-secondary">
                    {product.price}
                  </span>
                  <Button variant="outline" size="sm" className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
                    Purchase
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Browse All Products
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;