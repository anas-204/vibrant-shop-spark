import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, Grid, List } from "lucide-react";
import mouseImage from "@/assets/product-mouse.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";
import monitorImage from "@/assets/product-monitor.jpg";
import heroImage from "@/assets/hero-headphones.jpg";

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      image: mouseImage,
      title: "RGB Gaming Mouse Pro",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.8,
      reviews: 1247,
      category: "accessories"
    },
    {
      image: keyboardImage,
      title: "Mechanical Gaming Keyboard",
      price: "$149.99",
      rating: 4.9,
      reviews: 856,
      category: "accessories"
    },
    {
      image: monitorImage,
      title: "Ultra-Wide Gaming Monitor",
      price: "$399.99",
      originalPrice: "$459.99",
      rating: 4.7,
      reviews: 432,
      category: "monitors"
    },
    {
      image: heroImage,
      title: "Premium Gaming Headset",
      price: "$199.99",
      rating: 4.9,
      reviews: 2134,
      category: "audio"
    },
    {
      image: mouseImage,
      title: "Wireless Gaming Mouse",
      price: "$59.99",
      originalPrice: "$79.99",
      rating: 4.6,
      reviews: 892,
      category: "accessories"
    },
    {
      image: keyboardImage,
      title: "RGB Mechanical Keyboard Pro",
      price: "$199.99",
      rating: 4.8,
      reviews: 623,
      category: "accessories"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'accessories', name: 'Gaming Accessories' },
    { id: 'monitors', name: 'Monitors' },
    { id: 'audio', name: 'Audio' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            All <span className="bg-accent-gradient bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our complete collection of premium gaming gear
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-card rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="h-9"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center bg-muted rounded-lg px-3 py-2 gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent outline-none w-40"
                />
              </div>

              <div className="flex items-center bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className="h-8 w-8"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className="h-8 w-8"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {filteredProducts.map((product, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => {
              setSelectedCategory('all');
              setSearchTerm('');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;