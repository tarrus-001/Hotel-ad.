import { Dumbbell, Utensils, Wifi, Car, Waves, Coffee, Shield, Users } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Spa & Wellness",
      description: "Full-service spa with massage treatments and wellness programs"
    },
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Fitness Center",
      description: "State-of-the-art gym equipment available 24/7"
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Fine Dining",
      description: "Multiple restaurants offering diverse culinary experiences"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Café & Bar",
      description: "Elegant lounge areas for coffee, cocktails, and socializing"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Event Spaces",
      description: "Conference rooms and ballrooms for meetings and celebrations"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Valet Parking",
      description: "Convenient parking service with professional staff"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "High-Speed Wi-Fi",
      description: "Complimentary internet access throughout the property"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "24/7 Security",
      description: "Round-the-clock security and concierge services"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enjoy our comprehensive range of facilities designed to enhance your stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-300 hover:scale-105 group"
            >
              <div className="bg-gradient-luxury text-luxury-foreground w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-luxury transition-shadow duration-300">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;