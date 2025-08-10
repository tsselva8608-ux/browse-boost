import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, User, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";

export const SiteHeader = () => {
  const { count } = useCart();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as typeof products;
    return products.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Browse Boost</span>
        </Link>

        <div className="relative w-full max-w-xl" ref={ref}>
          <div className="flex items-center rounded-md border bg-card shadow-sm">
            <Search className="ml-3 h-4 w-4 opacity-60" />
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              placeholder="Search products..."
              className="border-0 focus-visible:ring-0"
            />
          </div>
          {open && suggestions.length > 0 && (
            <div className="absolute mt-2 w-full overflow-hidden rounded-md border bg-popover shadow-elegant">
              <ul>
                {suggestions.map((p) => (
                  <li key={p.id}>
                    <button
                      className="w-full px-3 py-2 text-left hover:bg-accent"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                        navigate(`/product/${p.slug}`);
                      }}
                    >
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

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
