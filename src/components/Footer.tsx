import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">The Grand Palace</h3>
            <p className="text-primary-foreground/80">
              Experience luxury redefined in the heart of the city. Where exceptional service meets timeless elegance.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#rooms" className="hover:text-accent transition-colors">Rooms & Rates</a></li>
              <li><a href="#amenities" className="hover:text-accent transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Room Service</li>
              <li>Concierge</li>
              <li>Spa & Wellness</li>
              <li>Conference Facilities</li>
              <li>Airport Transfer</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Luxury Avenue, Downtown District</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">reservations@grandpalace.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 The Grand Palace Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;