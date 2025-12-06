import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { User, Mail, Lock, Camera } from "lucide-react";

export function AccountSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-white/90 mb-2">Account Settings</h2>
        <p className="text-white/60">Manage your account information and preferences</p>
      </div>

      {/* Profile Picture */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-white/90">Profile Picture</CardTitle>
          <CardDescription className="text-white/60">
            Update your profile photo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Avatar className="w-24 h-24 border-2 border-white/10">
                <AvatarFallback className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 text-2xl text-emerald-400">
                  JD
                </AvatarFallback>
              </Avatar>
              <button className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="glass border-white/20 hover:border-emerald-400/50 text-white/80 hover:text-emerald-300 backdrop-blur-sm"
              >
                Upload Photo
              </Button>
              <p className="text-xs text-white/50">JPG, PNG or GIF. Max 2MB</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-white/90">Personal Information</CardTitle>
          <CardDescription className="text-white/60">
            Update your personal details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white/80">First Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  id="firstName"
                  defaultValue="John"
                  className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white/80">Last Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  id="lastName"
                  defaultValue="Doe"
                  className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/80">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                id="email"
                type="email"
                defaultValue="john.doe@agridome.com"
                className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
              />
            </div>
          </div>

          <Button className="bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300 backdrop-blur-sm">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Password */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-white/90">Password</CardTitle>
          <CardDescription className="text-white/60">
            Change your password to keep your account secure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword" className="text-white/80">Current Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                id="currentPassword"
                type="password"
                placeholder="Enter current password"
                className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword" className="text-white/80">New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white/80">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
              />
            </div>
          </div>

          <Button className="bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300 backdrop-blur-sm">
            Update Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
