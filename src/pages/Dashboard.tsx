import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { BusinessDashboard } from "@/components/BusinessDashboard";
import { ShopperDashboard } from "@/components/ShopperDashboard";

const Dashboard = () => {
  // Get user data from localStorage once
  const userData = useMemo(() => {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return { name: 'Guest User', email: 'guest@example.com', type: 'shopper' };
      }
    }
    return { name: 'Guest User', email: 'guest@example.com', type: 'shopper' };
  }, []);

  const [userType, setUserType] = useState(userData.type);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <header className="border-b bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-primary">
                  {userType === "business" ? "Business Dashboard" : "My Dashboard"}
                </h1>
                <p className="text-muted-foreground">Welcome back, {userData.name}!</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => setUserType(userType === "business" ? "shopper" : "business")}
                  className="text-sm"
                >
                  Switch to {userType === "business" ? "Shopper" : "Business"} View
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {userType === "business" ? (
            <BusinessDashboard userData={userData} />
          ) : (
            <ShopperDashboard userData={userData} />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;