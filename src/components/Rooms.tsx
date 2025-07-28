import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Bed, Wifi, Coffee } from "lucide-react";
import suiteImage from "@/assets/suite-room.jpg";
import deluxeImage from "@/assets/deluxe-room.jpg";
import standardImage from "@/assets/standard-room.jpg";

const Rooms = () => {
  const rooms = [
    {
      title: "Presidential Suite",
      image: suiteImage,
      price: "KES 89,900",
      guests: 4,
      beds: "King Bed + Sofa Bed",
      amenities: ["Ocean View", "Private Balcony", "Jacuzzi", "Butler Service"],
      description: "Ultimate luxury with premium amenities and stunning views"
    },
    {
      title: "Deluxe Room",
      image: deluxeImage,
      price: "KES 39,900",
      guests: 2,
      beds: "Queen Bed",
      amenities: ["City View", "Work Desk", "Mini Bar", "Room Service"],
      description: "Elegant comfort perfect for business and leisure travelers"
    },
    {
      title: "Standard Room",
      image: standardImage,
      price: "KES 19,900",
      guests: 2,
      beds: "Twin Beds",
      amenities: ["Garden View", "Free Wi-Fi", "Coffee Maker", "Safe"],
      description: "Comfortable accommodation with essential amenities"
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Rooms & Suites
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully designed accommodations, each offering comfort and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card shadow-elegant hover:shadow-luxury transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-gradient-luxury text-luxury-foreground">
                  {room.price}/night
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{room.title}</CardTitle>
                <p className="text-muted-foreground">{room.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{room.guests} Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{room.beds}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <div className="w-full text-center">
                  <p className="text-2xl font-bold text-primary">{room.price}<span className="text-sm font-normal text-muted-foreground">/night</span></p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;