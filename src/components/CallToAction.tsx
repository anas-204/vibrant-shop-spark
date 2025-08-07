import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-6">
            🔥 Limited Time Offer
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get 25% Off Your
            <span className="bg-accent-gradient bg-clip-text text-transparent block">
              First Order
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied gamers and upgrade your setup today. Free shipping on orders over $100.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center bg-muted rounded-lg px-4 py-3 gap-3 min-w-80">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-transparent outline-none flex-1"
              />
            </div>
            <Button variant="hero" size="lg" className="group">
              Get Discount
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Free Shipping
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              30-Day Returns
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              2-Year Warranty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;