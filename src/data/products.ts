import mouseImage from "@/assets/product-mouse.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";
import monitorImage from "@/assets/product-monitor.jpg";
import heroImage from "@/assets/hero-headphones.jpg";

export interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "rgb-gaming-mouse-pro",
    image: mouseImage,
    title: "RGB Gaming Mouse Pro",
    price: "$79.99",
    originalPrice: "$99.99",
    rating: 4.8,
    reviews: 1247,
    category: "accessories",
    description: "Experience unparalleled precision with our RGB Gaming Mouse Pro. Featuring an ultra-fast 20K DPI optical sensor, customizable RGB lighting with 16.8 million colors, and programmable buttons for all your macro needs.",
    features: ["20,000 DPI Optical Sensor", "16.8M RGB Lighting", "8 Programmable Buttons", "Ergonomic Design"]
  },
  {
    id: "mechanical-gaming-keyboard",
    image: keyboardImage,
    title: "Mechanical Gaming Keyboard",
    price: "$149.99",
    rating: 4.9,
    reviews: 856,
    category: "accessories",
    description: "The ultimate mechanical gaming keyboard equipped with tactile switches for satisfying feedback and rapid response times. Built with aircraft-grade aluminum for extreme durability.",
    features: ["Tactile Mechanical Switches", "Aircraft-grade Aluminum Body", "Per-key RGB Backlighting", "Detachable Wrist Rest"]
  },
  {
    id: "ultra-wide-gaming-monitor",
    image: monitorImage,
    title: "Ultra-Wide Gaming Monitor",
    price: "$399.99",
    originalPrice: "$459.99",
    rating: 4.7,
    reviews: 432,
    category: "monitors",
    description: "Immerse yourself completely in your games with our 34-inch ultra-wide gaming monitor. Boasting a 144Hz refresh rate, 1ms response time, and stunning color accuracy.",
    features: ["34-inch Curved Display", "144Hz Refresh Rate", "1ms Response Time", "HDR10 Support"]
  },
  {
    id: "premium-gaming-headset",
    image: heroImage,
    title: "Premium Gaming Headset",
    price: "$199.99",
    rating: 4.9,
    reviews: 2134,
    category: "audio",
    description: "Hear every footstep with pinpoint accuracy. This premium gaming headset features high-fidelity 50mm drivers, active noise cancellation, and a studio-quality detachable microphone.",
    features: ["50mm High-Fidelity Drivers", "Active Noise Cancellation", "Detachable Studio Mic", "Memory Foam Ear Cushions"]
  },
  {
    id: "wireless-gaming-mouse",
    image: mouseImage,
    title: "Wireless Gaming Mouse",
    price: "$59.99",
    originalPrice: "$79.99",
    rating: 4.6,
    reviews: 892,
    category: "accessories",
    description: "Cut the cord without compromising performance. Enjoy zero latency and long-lasting battery life in a lightweight, ergonomic design perfect for competitive play.",
    features: ["Zero-Latency Wireless", "Lightweight Build", "60-Hour Battery Life", "16K DPI Sensor"]
  },
  {
    id: "rgb-mechanical-keyboard-pro",
    image: keyboardImage,
    title: "RGB Mechanical Keyboard Pro",
    price: "$199.99",
    rating: 4.8,
    reviews: 623,
    category: "accessories",
    description: "The professional's choice. Featuring hot-swappable switches, a customizable OLED smart display, and a premium magnetic wrist rest for marathon gaming sessions.",
    features: ["Hot-Swappable Switches", "OLED Smart Display", "Magnetic Wrist Rest", "Dedicated Media Controls"]
  }
];
