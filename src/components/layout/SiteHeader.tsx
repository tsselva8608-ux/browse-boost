import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, User, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";
import { ProductSearch } from "@/components/ProductSearch";

export const SiteHeader = () => {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Browse Boost</span>
        </Link>

        <ProductSearch />

        <nav className="flex items-center gap-2">
          <NavLink to="/products" className="hidden md:inline-block px-3 py-2 hover:text-primary">
            Shop
          </NavLink>
          <NavLink to="/orders" className="hidden md:inline-block px-3 py-2 hover:text-primary">
            Orders
          </NavLink>
          <NavLink to="/auth" className="hidden md:inline-block px-3 py-2 hover:text-primary">
            <User className="inline h-5 w-5" />
          </NavLink>
          <Button variant="outline" size="sm" asChild>
            <Link to="/cart" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="inline-flex min-w-6 items-center justify-center rounded-sm bg-primary px-1 text-xs text-primary-foreground">
                {count}
              </span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
