import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold bg-accent-gradient bg-clip-text text-transparent">
            TechStore
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Gaming
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Accessories
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-muted rounded-lg px-3 py-2 gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent rounded-full text-xs flex items-center justify-center text-accent-foreground font-semibold">
              3
            </span>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;