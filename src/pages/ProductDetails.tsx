import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Star, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id || p.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products">
          <Button variant="hero">Return to Products</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, title: product.title, price: product.price, image: product.image });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/products">
          <Button variant="outline" className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground border-border/50 bg-background/50 backdrop-blur-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative rounded-2xl overflow-hidden bg-card-gradient shadow-2xl animate-fade-in">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
            {product.originalPrice && (
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                SALE
              </div>
            )}
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              {product.category}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-accent fill-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">{product.reviews} Reviews</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-primary">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="bg-primary/20 p-1 rounded-full text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              size="lg" 
              variant="accent" 
              className="w-full md:w-auto text-lg h-14 px-8 shadow-lg shadow-accent/20 group"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
