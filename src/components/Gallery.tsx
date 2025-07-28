import heroImage from "@/assets/hero-hotel.jpg";
import suiteImage from "@/assets/suite-room.jpg";
import deluxeImage from "@/assets/deluxe-room.jpg";
import standardImage from "@/assets/standard-room.jpg";
import spaImage from "@/assets/spa-pool.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Hotel Exterior", category: "Exterior" },
    { src: suiteImage, alt: "Presidential Suite", category: "Rooms" },
    { src: deluxeImage, alt: "Deluxe Room", category: "Rooms" },
    { src: standardImage, alt: "Standard Room", category: "Rooms" },
    { src: spaImage, alt: "Spa & Pool", category: "Amenities" },
    { src: restaurantImage, alt: "Restaurant", category: "Dining" },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our stunning hotel and discover the beauty that awaits you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;