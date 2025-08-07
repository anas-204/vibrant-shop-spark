import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Clock, Shield, Truck, RotateCcw, HelpCircle } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: "Available 24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      action: "Send Email",
      available: "Response within 24h"
    }
  ];

  const faqItems = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all products. Items must be in original condition with all packaging and accessories included."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) and overnight shipping options are also available."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. International shipping times vary by location, typically 7-14 business days."
    },
    {
      question: "What warranty do you provide?",
      answer: "All products come with a minimum 1-year manufacturer warranty. Gaming peripherals include an additional 1-year extended warranty from TechStore."
    },
    {
      question: "How can I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can also track orders in your account dashboard."
    },
    {
      question: "Do you offer technical support for products?",
      answer: "Yes! Our tech support team can help with setup, troubleshooting, and optimization for all products we sell."
    }
  ];

  const supportFeatures = [
    {
      icon: Shield,
      title: "2-Year Warranty",
      description: "Extended warranty on all gaming products"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100 worldwide"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Hassle-free returns and exchanges"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-6">
              🛟 Customer Support
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We're Here to
              <span className="bg-accent-gradient bg-clip-text text-transparent block">
                Help You
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the support you need, when you need it. Our dedicated team is committed to ensuring your complete satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get <span className="text-primary">Support</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {supportOptions.map((option, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 group text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <p className="text-sm text-accent font-semibold mb-6">{option.available}</p>
                <Button variant="hero" className="w-full">
                  {option.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Support Features */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {supportFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="h-6 w-6 text-secondary" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                Frequently Asked <span className="text-secondary">Questions</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-lg mb-3 text-primary">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help!
            </p>
            <Button variant="accent" size="lg">
              Contact Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Can't find what you're looking for? Send us a detailed message and we'll get back to you soon.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Describe your question or issue in detail..."
                  ></textarea>
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;