import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-headphones.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-6">
            🎮 New Gaming Collection
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Level Up Your
            <span className="bg-accent-gradient bg-clip-text text-transparent block">
              Gaming Setup
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Discover premium gaming gear with RGB lighting, wireless technology, and professional-grade performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div>Happy Gamers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <div>Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div>Support</div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-accent-gradient rounded-3xl opacity-20 blur-3xl animate-glow-pulse" />
          <img
            src={heroImage}
            alt="Gaming Headphones"
            className="relative z-10 w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;