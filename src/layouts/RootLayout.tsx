import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CartProvider } from "@/context/CartContext";
import { SubscriptionProvider } from "@/context/SubscriptionContext";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SubscriptionProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </CartProvider>
    </SubscriptionProvider>
  );
};

export default RootLayout;
