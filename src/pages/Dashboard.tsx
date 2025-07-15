import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Store, 
  Users, 
  TrendingUp, 
  MapPin, 
  Star,
  Plus,
  Eye,
  Heart,
  MessageCircle,
  Calendar,
  Clock,
  ArrowLeft,
  ShoppingBag,
  CreditCard,
  Package,
  Gift,
  User,
  Settings,
  Truck,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userType, setUserType] = useState("shopper"); // This would come from auth context

  // Business Owner Data
  const businessStats = [
    { title: "Total Views", value: "2,847", icon: Eye, change: "+12%" },
    { title: "New Customers", value: "156", icon: Users, change: "+8%" },
    { title: "Reviews", value: "4.8", icon: Star, change: "+0.2" },
    { title: "Revenue", value: "$12,450", icon: TrendingUp, change: "+15%" }
  ];

  const recentActivities = [
    { type: "review", user: "Sarah M.", action: "left a 5-star review", time: "2 hours ago" },
    { type: "inquiry", user: "Mike J.", action: "sent an inquiry", time: "4 hours ago" },
    { type: "view", user: "Anonymous", action: "viewed your business", time: "6 hours ago" },
    { type: "favorite", user: "Lisa K.", action: "added you to favorites", time: "1 day ago" }
  ];

  const upcomingEvents = [
    { title: "Local Business Meetup", date: "Tomorrow 6:00 PM", location: "Community Center" },
    { title: "Holiday Market Setup", date: "Dec 15, 2024", location: "Main Street" },
    { title: "Customer Appreciation Day", date: "Dec 20, 2024", location: "Your Store" }
  ];

  // Shopper Data
  const shopperStats = [
    { title: "Total Orders", value: "24", icon: ShoppingBag, change: "+3 this month" },
    { title: "Total Spent", value: "$1,248", icon: CreditCard, change: "+$245 this month" },
    { title: "Favorites", value: "18", icon: Heart, change: "+5 new favorites" },
    { title: "Rewards Points", value: "1,240", icon: Gift, change: "+120 points" }
  ];

  const recentOrders = [
    { id: "#ORD-001", business: "Fresh Delights", items: "2 items", total: "$45.99", status: "delivered", date: "2 days ago" },
    { id: "#ORD-002", business: "Tech Store", items: "1 item", total: "$299.99", status: "shipped", date: "5 days ago" },
    { id: "#ORD-003", business: "Book Haven", items: "3 items", total: "$67.50", status: "delivered", date: "1 week ago" },
    { id: "#ORD-004", business: "Fashion Hub", items: "2 items", total: "$89.99", status: "processing", date: "3 days ago" }
  ];

  const recommendedBusinesses = [
    { name: "Artisan Coffee", category: "Café", rating: "4.9", distance: "0.3 mi", image: "/placeholder.svg" },
    { name: "Green Grocers", category: "Grocery", rating: "4.7", distance: "0.5 mi", image: "/placeholder.svg" },
    { name: "Tech Repair Pro", category: "Electronics", rating: "4.8", distance: "0.8 mi", image: "/placeholder.svg" }
  ];

  if (userType === "business") {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-primary">Business Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Sarah's Bakery!</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => setUserType("shopper")}
                  className="text-sm"
                >
                  Switch to Shopper View
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link to="/create-listing">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Product
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {businessStats.map((stat, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-accent font-medium">{stat.change} from last month</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-5 w-5" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription>Latest interactions with your business</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Community Events
                    </CardTitle>
                    <CardDescription>Local events to boost your business</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">{event.title}</h4>
                          <Badge variant="outline" className="text-xs">{event.date}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          {event.location}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks to grow your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Button variant="outline" className="h-16 flex-col space-y-2">
                      <Store className="h-5 w-5" />
                      <span className="text-sm">Update Business Info</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col space-y-2">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm">Respond to Reviews</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col space-y-2">
                      <BarChart3 className="h-5 w-5" />
                      <span className="text-sm">View Analytics</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="customers">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Management</CardTitle>
                  <CardDescription>View and manage your customer relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-primary">156</div>
                        <div className="text-sm text-muted-foreground">Total Customers</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-accent">23</div>
                        <div className="text-sm text-muted-foreground">New This Month</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-secondary">89%</div>
                        <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Product Catalog</CardTitle>
                  <CardDescription>Manage your products and services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="grid gap-4 md:grid-cols-3 flex-1">
                        <div className="text-center p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-primary">42</div>
                          <div className="text-sm text-muted-foreground">Total Products</div>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-accent">8</div>
                          <div className="text-sm text-muted-foreground">Low Stock</div>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-secondary">$89</div>
                          <div className="text-sm text-muted-foreground">Avg. Price</div>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link to="/create-listing">Add New Product</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Business Analytics</CardTitle>
                  <CardDescription>Deep insights into your business performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="font-medium">Performance Metrics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Conversion Rate</span>
                          <span className="text-sm font-medium">12.5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Avg. Order Value</span>
                          <span className="text-sm font-medium">$67.80</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Customer Retention</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Growth Trends</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Revenue Growth</span>
                          <span className="text-sm font-medium text-accent">+15%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Customer Growth</span>
                          <span className="text-sm font-medium text-accent">+8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">View Growth</span>
                          <span className="text-sm font-medium text-accent">+12%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  // Shopper Dashboard
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">My Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setUserType("business")}
                className="text-sm"
              >
                Switch to Business View
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/businesses">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Browse Shops
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {shopperStats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-accent font-medium">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="mr-2 h-5 w-5" />
                    Recent Orders
                  </CardTitle>
                  <CardDescription>Your latest purchases</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentOrders.slice(0, 3).map((order, index) => (
                    <div key={index} className="flex items-center justify-between space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{order.business}</p>
                        <p className="text-xs text-muted-foreground">{order.items} • {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{order.total}</p>
                        <Badge 
                          variant={order.status === "delivered" ? "default" : order.status === "shipped" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {order.status === "delivered" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {order.status === "shipped" && <Truck className="mr-1 h-3 w-3" />}
                          {order.status === "processing" && <AlertCircle className="mr-1 h-3 w-3" />}
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/orders">View All Orders</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Recommended Businesses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5" />
                    Recommended for You
                  </CardTitle>
                  <CardDescription>Based on your preferences and location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedBusinesses.map((business, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <Store className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{business.name}</p>
                        <p className="text-xs text-muted-foreground">{business.category} • {business.distance}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-xs">{business.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/businesses">Explore More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Things you can do right now</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <Button variant="outline" className="h-16 flex-col space-y-2" asChild>
                    <Link to="/businesses">
                      <ShoppingBag className="h-5 w-5" />
                      <span className="text-sm">Browse Shops</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col space-y-2" asChild>
                    <Link to="/cart">
                      <Package className="h-5 w-5" />
                      <span className="text-sm">View Cart</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col space-y-2" asChild>
                    <Link to="/favorites">
                      <Heart className="h-5 w-5" />
                      <span className="text-sm">My Favorites</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col space-y-2">
                    <Gift className="h-5 w-5" />
                    <span className="text-sm">Rewards</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>All your past purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium">{order.id}</p>
                          <Badge 
                            variant={order.status === "delivered" ? "default" : order.status === "shipped" ? "secondary" : "outline"}
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.business} • {order.items}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-medium">{order.total}</p>
                        <Button variant="ghost" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>My Favorites</CardTitle>
                <CardDescription>Businesses and products you love</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {recommendedBusinesses.map((business, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{business.name}</h4>
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{business.category}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-xs">{business.rating}</span>
                        </div>
                        <Button size="sm" variant="outline">Visit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Personal Information</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>Name: John Doe</p>
                        <p>Email: john@example.com</p>
                        <p>Phone: +254 700 123 456</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Preferences</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>Language: English</p>
                        <p>Currency: KES</p>
                        <p>Notifications: Enabled</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Button>
                      <User className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;