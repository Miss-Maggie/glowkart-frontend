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
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userType] = useState("business"); // This would come from auth context

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

  if (userType === "business") {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-primary">Business Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Sarah's Bakery!</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" asChild>
                  <Link to="/" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Grid */}
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

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Recent Activity */}
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

                {/* Upcoming Events */}
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

              {/* Quick Actions */}
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
                  <p className="text-muted-foreground">Customer management features coming soon...</p>
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
                  <p className="text-muted-foreground">Product management features coming soon...</p>
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
                  <p className="text-muted-foreground">Advanced analytics coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  // Customer dashboard would go here
  return <div>Customer Dashboard</div>;
};

export default Dashboard;