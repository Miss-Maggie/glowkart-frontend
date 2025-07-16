import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Mail, Lock, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login logic with specific users for better demo
    const mockUsers = {
      'magdalinemutave001@gmail.com': { name: 'Magdaline Mutave', type: 'business' },
      'shopper@example.com': { name: 'Jane Shopper', type: 'shopper' }
    };
    
    const userType = mockUsers[email as keyof typeof mockUsers];
    const userData = userType || { 
      name: email.includes('business') ? email.split('@')[0] + ' Business' : email.split('@')[0], 
      type: email.includes('business') ? 'business' : 'shopper'
    };
    
    // Store user data in localStorage
    localStorage.setItem('currentUser', JSON.stringify({
      ...userData,
      email: email
    }));
    
    // Use navigate for faster SPA navigation
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary-foreground hover:text-accent transition-colors mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <Card className="backdrop-blur-sm bg-white/95 shadow-elegant">
          <CardHeader className="space-y-1 text-center">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mb-4">
              <LogIn className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your GlowKart Hub account<br />
              <small className="text-xs text-muted-foreground">
                Tip: Use "magdalinemutave001@gmail.com" for business dashboard
              </small>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Sign In
              </Button>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link 
                to="/register" 
                className="text-primary hover:text-primary-glow transition-colors font-medium"
              >
                Sign up
              </Link>
            </div>
            <div className="mt-4 text-center">
              <Link 
                to="/forgot-password" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;