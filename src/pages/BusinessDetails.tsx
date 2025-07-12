import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  Star, 
  MapPin, 
  Clock,
  Phone,
  Globe,
  Heart,
  Share2,
  Store,
  ShoppingCart,
  Calendar,
  MessageCircle
} from "lucide-react";

const BusinessDetails = () => {
  const { id } = useParams();
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock business data - in real app, fetch by ID
  const business = {
    id: id,
    name: "Sarah's Bakery",
    category: "Food & Dining",
    rating: 4.8,
    reviews: 124,
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    website: "sarahsbakery.com",
    hours: "6:00 AM - 8:00 PM",
    image: "/placeholder.svg",
    description: "Fresh artisan breads and pastries made daily with organic ingredients. Family-owned bakery serving the community for over 15 years.",
    longDescription: "At Sarah's Bakery, we believe in the power of fresh, wholesome ingredients. Every morning before dawn, our bakers start preparing the day's selection of artisan breads, croissants, and pastries. We source our flour from local mills and use organic ingredients whenever possible. Our commitment to quality and community has made us a beloved neighborhood staple.",
    services: ["Fresh Bread", "Custom Cakes", "Catering", "Coffee"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    customerReviews: [
      { name: "John D.", rating: 5, comment: "Best croissants in town! Always fresh and delicious.", date: "2 weeks ago" },
      { name: "Maria S.", rating: 5, comment: "Amazing custom cakes. Sarah made our wedding cake and it was perfect!", date: "1 month ago" },
      { name: "David L.", rating: 4, comment: "Great coffee and friendly service. My go-to morning stop.", date: "3 weeks ago" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/businesses" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Businesses
                </Link>
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Store className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">GlowKart Hub</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/cart" className="flex items-center">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Business Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <img 
                src={business.image} 
                alt={business.name}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-primary mb-2">{business.name}</h1>
                  <Badge variant="secondary" className="mb-4">{business.category}</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsFavorited(!isFavorited)}
                  >
                    <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(business.rating) ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{business.rating}</span>
                <span className="text-muted-foreground">({business.reviews} reviews)</span>
              </div>

              <p className="text-muted-foreground mb-6">{business.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-3 h-5 w-5" />
                  {business.address}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-3 h-5 w-5" />
                  {business.hours}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="mr-3 h-5 w-5" />
                  {business.phone}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Globe className="mr-3 h-5 w-5" />
                  {business.website}
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" asChild>
                  <Link to={`/contact?business=${business.name}`}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Business
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to={`/contact?business=${business.name}&action=book`}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Services & Specialties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {business.services.map((service) => (
                <Badge key={service} variant="outline">{service}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About {business.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{business.longDescription}</p>
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
            <CardDescription>What people are saying about {business.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {business.customerReviews.map((review, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6">
              View All Reviews
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessDetails;