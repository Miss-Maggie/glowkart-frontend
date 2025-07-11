import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Star, 
  Clock,
  Phone,
  Globe,
  Heart,
  Filter,
  Store,
  ArrowLeft,
  ShoppingCart
} from "lucide-react";
import { Link } from "react-router-dom";

const Businesses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const businesses = [
    {
      id: 1,
      name: "Sarah's Bakery",
      category: "Food & Dining",
      rating: 4.8,
      reviews: 124,
      address: "123 Main St, Downtown",
      phone: "(555) 123-4567",
      website: "sarahsbakery.com",
      hours: "6:00 AM - 8:00 PM",
      image: "/placeholder.svg",
      description: "Fresh artisan breads and pastries made daily with organic ingredients."
    },
    {
      id: 2,
      name: "Tech Repair Pro",
      category: "Technology",
      rating: 4.9,
      reviews: 89,
      address: "456 Oak Ave, Tech District",
      phone: "(555) 234-5678", 
      website: "techrepairpro.com",
      hours: "9:00 AM - 6:00 PM",
      image: "/placeholder.svg",
      description: "Expert computer and smartphone repair with same-day service."
    },
    {
      id: 3,
      name: "Green Thumb Garden",
      category: "Home & Garden",
      rating: 4.7,
      reviews: 67,
      address: "789 Garden Ln, Suburbs",
      phone: "(555) 345-6789",
      website: "greenthumbgarden.com", 
      hours: "7:00 AM - 7:00 PM",
      image: "/placeholder.svg",
      description: "Local nursery specializing in native plants and organic gardening supplies."
    },
    {
      id: 4,
      name: "Cozy Café Corner",
      category: "Food & Dining",
      rating: 4.6,
      reviews: 156,
      address: "321 Coffee St, Arts Quarter",
      phone: "(555) 456-7890",
      website: "cozycafe.com",
      hours: "6:30 AM - 9:00 PM",
      image: "/placeholder.svg",
      description: "Locally roasted coffee and homemade pastries in a warm, welcoming atmosphere."
    }
  ];

  const categories = ["All", "Food & Dining", "Technology", "Home & Garden", "Health & Wellness", "Shopping"];

  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    business.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Store className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">GlowKart Hub</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
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
        {/* Search Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">Explore Local Businesses</h1>
          <p className="text-muted-foreground mb-6">Discover amazing businesses in your neighborhood</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search businesses, services, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-accent">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBusinesses.map((business) => (
            <Card key={business.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {business.name}
                    </CardTitle>
                    <CardDescription>{business.category}</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(business.rating) ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{business.rating}</span>
                  <span className="text-sm text-muted-foreground">({business.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{business.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {business.address}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    {business.hours}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="mr-2 h-4 w-4" />
                    {business.phone}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Globe className="mr-2 h-4 w-4" />
                    {business.website}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1" asChild>
                    <Link to={`/business/${business.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/contact?business=${business.name}`}>Contact</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No businesses found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Businesses;