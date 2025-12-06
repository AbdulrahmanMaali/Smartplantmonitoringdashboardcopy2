import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Sprout, Mail, Lock, User, Shield, Leaf } from "lucide-react";

export function Auth({ onLogin }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e, isAdmin = false) => {
    e.preventDefault();
    onLogin(isAdmin ? "admin" : "user");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerPassword === confirmPassword) {
      onLogin("user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b14]/95 via-[#0a0b14]/90 to-[#1a1b2e]/95 backdrop-blur-sm"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Leaf className="h-32 w-32 text-emerald-400 animate-pulse" style={{ animationDuration: '3s' }} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Sprout className="h-40 w-40 text-green-400 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Auth Card */}
      <div className="w-full max-w-md z-10">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative p-4 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-3xl backdrop-blur-sm border border-emerald-400/30">
              <Sprout className="h-16 w-16 text-emerald-400" />
              <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-3xl"></div>
            </div>
          </div>
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-white via-emerald-200 to-green-300 bg-clip-text text-transparent">
            Agridome
          </h1>
          <p className="text-white/60 text-lg">Grow Smarter with Agridome</p>
        </div>

        <Card className="glass-card border-white/10">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass border-white/10 bg-white/5 p-1">
              <TabsTrigger 
                value="login"
                className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300 text-white/70"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300 text-white/70"
              >
                Register
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <CardHeader>
                <CardTitle className="text-white/90">Welcome Back</CardTitle>
                <CardDescription className="text-white/60">
                  Sign in to access your smart greenhouse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-white/80">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="you@example.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-white/80">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40"
                  >
                    Sign In
                  </Button>

                  {/* Admin Login */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-2 bg-[#0a0b14] text-white/50">OR</span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={(e) => handleLogin(e, true)}
                    variant="outline"
                    className="w-full glass border-purple-400/30 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 backdrop-blur-sm transition-all duration-300"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Admin Access
                  </Button>
                </form>
              </CardContent>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <CardHeader>
                <CardTitle className="text-white/90">Create Account</CardTitle>
                <CardDescription className="text-white/60">
                  Join Agridome to start smart farming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name" className="text-white/80">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="John Doe"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-white/80">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="you@example.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-white/80">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-white/80">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                        required
                      />
                    </div>
                  </div>

                  {confirmPassword && registerPassword !== confirmPassword && (
                    <p className="text-sm text-red-400">Passwords do not match</p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40"
                    disabled={registerPassword !== confirmPassword}
                  >
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-white/50">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
