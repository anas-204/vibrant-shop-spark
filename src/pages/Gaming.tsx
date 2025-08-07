import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Gamepad2, Trophy, Users, Zap } from "lucide-react";
import mouseImage from "@/assets/product-mouse.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";
import heroImage from "@/assets/hero-headphones.jpg";

const Gaming = () => {
  const gamingProducts = [
    {
      image: mouseImage,
      title: "RGB Gaming Mouse Pro",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.8,
      reviews: 1247
    },
    {
      image: keyboardImage,
      title: "Mechanical Gaming Keyboard",
      price: "$149.99",
      rating: 4.9,
      reviews: 856
    },
    {
      image: heroImage,
      title: "Premium Gaming Headset",
      price: "$199.99",
      rating: 4.9,
      reviews: 2134
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Experience lightning-fast response times with our advanced gaming peripherals"
    },
    {
      icon: Trophy,
      title: "Esports Grade",
      description: "Professional-quality gear trusted by competitive gamers worldwide"
    },
    {
      icon: Users,
      title: "Community Approved",
      description: "Top-rated products recommended by thousands of satisfied gamers"
    },
    {
      icon: Gamepad2,
      title: "Cross-Platform",
      description: "Compatible with PC, PlayStation, Xbox, and Nintendo Switch"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-6">
              🎮 Gaming Collection
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Dominate Every
              <span className="bg-accent-gradient bg-clip-text text-transparent block">
                Gaming Session
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Elevate your gameplay with professional-grade gaming peripherals designed for precision, speed, and comfort.
            </p>
            <Button variant="hero" size="lg" className="group">
              Shop Gaming Gear
              <Gamepad2 className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our <span className="text-primary">Gaming Gear</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every product is carefully selected and tested by professional gamers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Gaming <span className="bg-accent-gradient bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find the perfect gear for your gaming style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card-gradient rounded-xl p-8 text-center hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <div className="text-4xl mb-4">🖱️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Gaming Mice</h3>
              <p className="text-muted-foreground">Precision sensors, customizable buttons, RGB lighting</p>
            </div>
            
            <div className="bg-card-gradient rounded-xl p-8 text-center hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <div className="text-4xl mb-4">⌨️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Gaming Keyboards</h3>
              <p className="text-muted-foreground">Mechanical switches, macro keys, anti-ghosting</p>
            </div>
            
            <div className="bg-card-gradient rounded-xl p-8 text-center hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Gaming Headsets</h3>
              <p className="text-muted-foreground">Surround sound, noise cancellation, comfort fit</p>
            </div>
          </div>

          {/* Featured Gaming Products */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Top Gaming Picks</h3>
            <p className="text-muted-foreground">Our best-selling gaming peripherals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamingProducts.map((product, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gaming;