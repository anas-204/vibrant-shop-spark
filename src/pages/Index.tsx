import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
