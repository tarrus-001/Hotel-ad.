import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const Location = () => {
  const attractions = [
    "City Center - 5 minutes",
    "International Airport - 15 minutes", 
    "Beach Resort - 10 minutes",
    "Shopping District - 8 minutes",
    "Business District - 12 minutes",
    "Cultural Quarter - 7 minutes"
  ];

  return (
    <section id="location" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Prime Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategically located in the heart of the city with easy access to major attractions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center shadow-elegant">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">Interactive Map</p>
              <p className="text-sm text-muted-foreground">
                123 Luxury Avenue, Downtown District
              </p>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            <div className="bg-gradient-card p-6 rounded-lg shadow-elegant">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-luxury text-luxury-foreground w-10 h-10 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Our Address</h3>
              </div>
              <p className="text-muted-foreground">
                123 Luxury Avenue<br />
                Downtown District<br />
                Metropolitan City, MC 12345
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg shadow-elegant">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-luxury text-luxury-foreground w-10 h-10 rounded-full flex items-center justify-center">
                  <Navigation className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Nearby Attractions</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {attractions.map((attraction, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">{attraction}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-card p-4 rounded-lg shadow-elegant">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-primary">Check-in/out</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Check-in: 3:00 PM<br />
                  Check-out: 12:00 PM
                </p>
              </div>

              <div className="bg-gradient-card p-4 rounded-lg shadow-elegant">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-primary">Contact</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  +1 (555) 123-4567<br />
                  reservations@grandpalace.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;