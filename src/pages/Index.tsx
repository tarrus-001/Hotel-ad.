import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Rooms />
      <Gallery />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
