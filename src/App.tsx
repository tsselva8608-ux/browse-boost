import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Index page="products" />} />
          <Route path="/product/:slug" element={<Index page="product" />} />
          <Route path="/cart" element={<Index page="cart" />} />
          <Route path="/checkout" element={<Index page="checkout" />} />
          <Route path="/orders" element={<Index page="orders" />} />
          <Route path="/subscription" element={<Index page="subscription" />} />
          <Route path="/admin" element={<Index page="admin" />} />
          <Route path="/auth" element={<Index page="auth" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
