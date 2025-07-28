import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience luxury? Contact us to make your reservation or inquire about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-card shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-luxury text-luxury-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                <p className="text-muted-foreground text-lg">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground mt-2">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-luxury text-luxury-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                <p className="text-muted-foreground text-lg">reservations@grandpalace.com</p>
                <p className="text-sm text-muted-foreground mt-2">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-luxury text-luxury-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Address</h3>
                <p className="text-muted-foreground">
                  123 Luxury Avenue<br />
                  Downtown District<br />
                  Metropolitan City, MC 12345
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours and Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Front Desk:</span>
                  <span className="font-medium">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-in:</span>
                  <span className="font-medium">3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-out:</span>
                  <span className="font-medium">12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Restaurant:</span>
                  <span className="font-medium">6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Spa & Pool:</span>
                  <span className="font-medium">6:00 AM - 10:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground">
                  Stay connected with us for special offers and updates
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-accent">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-accent">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-accent">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
                <div className="text-center">
                  <Button variant="luxury" className="w-full">
                    Call Now: +1 (555) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;