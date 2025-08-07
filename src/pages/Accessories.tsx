import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Cable, Usb, Bluetooth, Wifi } from "lucide-react";
import mouseImage from "@/assets/product-mouse.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";

const Accessories = () => {
  const accessoryProducts = [
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
      image: mouseImage,
      title: "Wireless Gaming Mouse Pad",
      price: "$39.99",
      rating: 4.7,
      reviews: 634
    },
    {
      image: keyboardImage,
      title: "USB-C Gaming Cable",
      price: "$19.99",
      originalPrice: "$29.99",
      rating: 4.6,
      reviews: 423
    }
  ];

  const accessoryCategories = [
    {
      icon: Cable,
      title: "Cables & Adapters",
      description: "High-quality cables for seamless connectivity",
      items: ["USB-C Cables", "HDMI Adapters", "Audio Cables", "Extension Cords"]
    },
    {
      icon: Usb,
      title: "USB Accessories",
      description: "Essential USB peripherals and hubs",
      items: ["USB Hubs", "Flash Drives", "Card Readers", "USB Lights"]
    },
    {
      icon: Bluetooth,
      title: "Wireless Accessories",
      description: "Cut the cord with wireless peripherals",
      items: ["Wireless Mice", "Bluetooth Speakers", "Wireless Chargers", "Dongles"]
    },
    {
      icon: Wifi,
      title: "Connectivity",
      description: "Stay connected with networking gear",
      items: ["WiFi Adapters", "Ethernet Cables", "Network Switches", "Routers"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-6">
              🔌 Accessories Collection
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complete Your
              <span className="bg-accent-gradient bg-clip-text text-transparent block">
                Tech Setup
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From cables to wireless accessories, find everything you need to enhance and optimize your workspace.
            </p>
            <Button variant="accent" size="lg" className="group">
              Browse Accessories
              <Cable className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Accessory Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Accessory <span className="text-secondary">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to complement your main devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {accessoryCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-secondary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <ul className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-card-gradient rounded-2xl p-8 mb-20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Accessories Available</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <p className="text-muted-foreground">Compatibility Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24h</div>
                <p className="text-muted-foreground">Fast Shipping</p>
              </div>
            </div>
          </div>

          {/* Popular Accessories */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Popular Accessories</h3>
            <p className="text-muted-foreground">Our most sought-after accessories and peripherals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessoryProducts.map((product, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We carry thousands of accessories. Contact our team for help finding the perfect accessory for your setup.
          </p>
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Accessories;