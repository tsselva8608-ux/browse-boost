import React, { createContext, useContext, useEffect, useState } from "react";

type SubscriptionContextType = {
  isSubscribed: boolean;
  subscriptionPlan: "none" | "fast-delivery";
  subscribe: () => void;
  unsubscribe: () => void;
  subscriptionPrice: number;
};

const SubscriptionContext = createContext<SubscriptionContextType | null>(null);

export const useSubscription = () => {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) throw new Error("useSubscription must be used within SubscriptionProvider");
  return ctx;
};

const LS_SUBSCRIPTION_KEY = "bb_subscription_v1";

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(LS_SUBSCRIPTION_KEY);
      return saved ? JSON.parse(saved).isSubscribed : false;
    } catch {
      return false;
    }
  });

  const [subscriptionPlan, setSubscriptionPlan] = useState<"none" | "fast-delivery">(() => {
    try {
      const saved = localStorage.getItem(LS_SUBSCRIPTION_KEY);
      return saved ? JSON.parse(saved).plan : "none";
    } catch {
      return "none";
    }
  });

  const subscriptionPrice = 199; // ₹199 for fast delivery subscription

  useEffect(() => {
    localStorage.setItem(LS_SUBSCRIPTION_KEY, JSON.stringify({
      isSubscribed,
      plan: subscriptionPlan,
      subscribedAt: isSubscribed ? new Date().toISOString() : null
    }));
  }, [isSubscribed, subscriptionPlan]);

  const subscribe = () => {
    setIsSubscribed(true);
    setSubscriptionPlan("fast-delivery");
  };

  const unsubscribe = () => {
    setIsSubscribed(false);
    setSubscriptionPlan("none");
  };

  const value: SubscriptionContextType = {
    isSubscribed,
    subscriptionPlan,
    subscribe,
    unsubscribe,
    subscriptionPrice
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};