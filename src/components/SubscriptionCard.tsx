import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSubscription } from "@/context/SubscriptionContext";
import { Zap, Clock, Truck } from "lucide-react";

export const SubscriptionCard = () => {
  const { isSubscribed, subscribe, unsubscribe, subscriptionPrice } = useSubscription();

  return (
    <Card className="relative overflow-hidden">
      {isSubscribed && (
        <Badge className="absolute right-4 top-4 bg-green-100 text-green-800">
          Active
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Fast Delivery Subscription
        </CardTitle>
        <CardDescription>
          Get lightning-fast delivery on all your orders
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-3xl font-bold text-primary">
          ₹{subscriptionPrice}
          <span className="text-lg font-normal text-muted-foreground">/month</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-green-600" />
            <span className="text-sm">Same-day delivery on most orders</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-4 w-4 text-green-600" />
            <span className="text-sm">Priority shipping on all products</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="h-4 w-4 text-green-600" />
            <span className="text-sm">No delivery charges on any order</span>
          </div>
        </div>

        {!isSubscribed ? (
          <Button 
            onClick={subscribe} 
            className="w-full" 
            size="lg"
          >
            Subscribe Now - ₹{subscriptionPrice}/month
          </Button>
        ) : (
          <div className="space-y-2">
            <div className="text-sm text-green-600 font-medium">
              ✓ You're subscribed to Fast Delivery
            </div>
            <Button 
              onClick={unsubscribe} 
              variant="outline" 
              className="w-full"
            >
              Cancel Subscription
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};