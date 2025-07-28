import { Wifi, Car, Utensils, Waves } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Ocean View",
      description: "Breathtaking panoramic views of the crystal-clear waters"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Fine Dining",
      description: "World-class cuisine crafted by renowned chefs"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Free Wi-Fi",
      description: "Complimentary high-speed internet throughout the property"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Airport Shuttle",
      description: "Convenient transportation to and from the airport"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the exceptional amenities and services that make your stay unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-luxury text-luxury-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-luxury group-hover:shadow-xl transition-shadow duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;