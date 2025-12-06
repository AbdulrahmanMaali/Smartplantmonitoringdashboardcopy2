import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, AlertCircle, Info, CheckCircle } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface Notification {
  id: number;
  type: "error" | "warning" | "info" | "success";
  title: string;
  message: string;
  timestamp: string;
}

interface NotificationPanelProps {
  notifications: Notification[];
}

export function NotificationPanel({ notifications }: NotificationPanelProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "error":
        return <AlertCircle className="h-4 w-4" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      case "success":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getVariant = (type: string): "default" | "destructive" => {
    return type === "error" ? "destructive" : "default";
  };

  return (
    <Card className="glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-white/90">Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-3">
            {notifications.length === 0 ? (
              <p className="text-sm text-white/50 text-center py-8">
                No notifications
              </p>
            ) : (
              notifications.map((notification) => (
                <Alert key={notification.id} variant={getVariant(notification.type)} className="glass border-white/20 backdrop-blur-sm">
                  {getIcon(notification.type)}
                  <div className="ml-2">
                    <AlertTitle className="text-white/90">{notification.title}</AlertTitle>
                    <AlertDescription className="mt-1 text-white/70">
                      {notification.message}
                    </AlertDescription>
                    <p className="text-xs text-white/50 mt-2">{notification.timestamp}</p>
                  </div>
                </Alert>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
