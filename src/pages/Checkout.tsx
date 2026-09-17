import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const getNumericPrice = (priceStr: string | number) => {
    if (typeof priceStr === 'number') return priceStr;
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  };

  const subtotal = cart.reduce((sum, item) => sum + (getNumericPrice(item.price) * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background pt-20 flex flex-col items-center justify-center text-center px-4">
        <CheckCircle2 className="h-24 w-24 text-green-500 mb-6 animate-scale-in" />
        <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Thank you for your purchase. We've sent a confirmation email with your order details.
        </p>
        <Link to="/">
          <Button variant="hero" size="lg">Return to Home</Button>
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/products">
          <Button variant="hero">Return to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/cart">
          <Button variant="outline" className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground border-border/50 bg-background/50 backdrop-blur-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input required type="email" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Shipping Address</label>
                <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary mb-4" placeholder="Street Address" />
                <div className="grid md:grid-cols-3 gap-6">
                  <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary md:col-span-1" placeholder="City" />
                  <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary md:col-span-1" placeholder="State/Province" />
                  <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary md:col-span-1" placeholder="Zip Code" />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 mt-12">Payment Details</h2>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry Date</label>
                  <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVC</label>
                  <input required type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="123" />
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Place Order
              </Button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded bg-card-gradient" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold">${(getNumericPrice(item.price) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6 border-t border-border pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-accent font-semibold" : ""}>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
