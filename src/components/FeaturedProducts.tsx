import ProductCard from "./ProductCard";
import mouseImage from "@/assets/product-mouse.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";
import monitorImage from "@/assets/product-monitor.jpg";

const FeaturedProducts = () => {
  const products = [
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
      image: monitorImage,
      title: "Ultra-Wide Gaming Monitor",
      price: "$399.99",
      originalPrice: "$459.99",
      rating: 4.7,
      reviews: 432
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
            ⚡ Featured Products
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Best Selling
            <span className="bg-accent-gradient bg-clip-text text-transparent"> Gaming Gear</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked by gamers, for gamers. These are our most popular products that deliver exceptional performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-accent font-semibold text-lg group transition-colors">
            View All Products 
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;