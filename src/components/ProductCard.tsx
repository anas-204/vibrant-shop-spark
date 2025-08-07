import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({ image, title, price, originalPrice, rating, reviews }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden bg-card-gradient">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          {originalPrice && (
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold">
              SALE
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "text-accent fill-accent"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <Button 
          variant="accent" 
          className="w-full group"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;