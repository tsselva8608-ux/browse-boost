import RootLayout from "@/layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SEO } from "@/components/SEO";
import { products, categories, Product } from "@/data/products";
import { Link, useLocation, useParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters, FilterState } from "@/components/ProductFilters";
import { Star } from "lucide-react";

import hero from "@/assets/hero-banner.jpg";
import { Textarea } from "@/components/ui/textarea";
import QRCode from "react-qr-code";
import { VoiceAssistant } from "@/components/VoiceAssistant";

type Props = { page?:
  | "products"
  | "product"
  | "cart"
  | "checkout"
  | "orders"
  | "admin"
  | "auth" };

const Index = ({ page }: Props) => {
  const location = useLocation();
  return (
    <RootLayout>
      {(!page || page === undefined) && <Home />}
      {page === "products" && <Listing />}
      {page === "product" && <ProductDetailPage />}
      {page === "cart" && <CartPage />}
      {page === "checkout" && <CheckoutPage />}
      {page === "orders" && <OrdersPage />}
      {page === "admin" && <AdminPage />}
      {page === "auth" && <AuthPage />}
      <VoiceAssistant onMessage={(msg) => console.log('Voice message:', msg)} />
    </RootLayout>
  );
};

const Home = () => {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  
  useEffect(() => {
    // Check if user is logged in, redirect to auth if not
    const user = localStorage.getItem('bb_user');
    if (!user) {
      window.location.href = '/auth';
    }
  }, []);
  
  return (
    <>
      <SEO title="Browse Boost — Premium Tech Deals" description="Shop featured gadgets, trending categories, and exclusive tech offers." canonicalPath="/" />
      <section className="relative">
        <div className="container mx-auto grid gap-8 py-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Upgrade your tech with premium gadgets
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover curated deals across audio, wearables, cameras, and smart home.
            </p>
            <div className="flex gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/products">Shop now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products">Browse categories</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Premium tech gadgets collage" className="w-full rounded-lg shadow-elegant" loading="eager" />
            <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-background/0 to-background/10" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="mb-6 text-2xl font-semibold">Featured products</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {products.slice(0, 12).map((p) => (
            <ProductCard key={p.id} product={p} showOffer={true} />
          ))}
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="mb-6 text-2xl font-semibold">Shop by category</h2>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <Link key={c} to={`/products?category=${encodeURIComponent(c)}`} className="rounded-md border bg-card px-4 py-6 text-center hover:bg-accent">
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="rounded-xl border bg-gradient-surface p-8 shadow-elegant">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Limited-time offers</h3>
              <p className="text-muted-foreground">Save up to 40% on select accessories and audio gear.</p>
            </div>
            <Button variant="hero" asChild>
              <Link to="/products?category=Accessories">Explore deals</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

// ProductCard component moved to separate file

const Listing = () => {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get("search") || "";
  
  const [filters, setFilters] = useState<FilterState>({
    category: params.get("category") || "all",
    brand: "all",
    sortBy: "featured",
    minPrice: "",
    maxPrice: ""
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: "all",
      brand: "all", 
      sortBy: "featured",
      minPrice: "",
      maxPrice: ""
    });
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category !== "all") {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Brand filter
    if (filters.brand !== "all") {
      filtered = filtered.filter(p => p.brand === filters.brand);
    }

    // Price filters
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.maxPrice));
    }

    // Sort
    switch (filters.sortBy) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [filters, searchQuery]);

  return (
    <>
      <SEO title="Shop Products — Browse Boost" description="Explore our full catalog with filters and sorting." canonicalPath="/products" />
      <section className="container mx-auto py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Products</h1>
          {searchQuery && (
            <p className="text-muted-foreground mb-4">
              Search results for "{searchQuery}"
            </p>
          )}
          <ProductFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
            productCount={filteredProducts.length}
          />
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} showOffer={Math.random() > 0.7} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
            <Button onClick={clearFilters} variant="outline" className="mt-4">
              Clear filters
            </Button>
          </div>
        )}
      </section>
    </>
  );
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);
  const { addToCart } = useCart();
  if (!product) return null;
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  return (
    <>
      <SEO title={`${product.name} — Browse Boost`} description={product.description} canonicalPath={`/product/${product.slug}`} />
      <section className="container mx-auto grid gap-8 py-10 md:grid-cols-2">
        <div>
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {product.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="overflow-hidden rounded-md border">
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground">{product.brand} • {product.category}</p>
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
          </div>
          
          <p className="text-lg">{product.description}</p>
          
          {/* Price with potential offer */}
          <div className="flex items-center gap-3">
            <p className="text-3xl font-semibold text-primary">₹{product.price.toLocaleString()}</p>
            {Math.random() > 0.5 && (
              <div className="flex items-center gap-2">
                <p className="text-lg text-muted-foreground line-through">
                  ₹{Math.floor(product.price * 1.2).toLocaleString()}
                </p>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {Math.floor(Math.random() * 25) + 10}% OFF
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => {
                const user = localStorage.getItem('bb_user');
                if (!user) {
                  alert('Please sign in to add items to cart');
                  window.location.href = '/auth';
                  return;
                }
                addToCart(product, 1);
              }}
            >
              Add to cart
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => {
                const user = localStorage.getItem('bb_user');
                if (!user) {
                  alert('Please sign in to make a purchase');
                  window.location.href = '/auth';
                  return;
                }
                window.location.href = '/checkout';
              }}
            >
              Buy now
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="mb-6 text-2xl font-semibold">Related products</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="mb-6 text-2xl font-semibold">More products you might like</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {products.slice(0, 12).map((p) => (
            <ProductCard key={p.id} product={p} showOffer={Math.random() > 0.6} />
          ))}
        </div>
      </section>
    </>
  );
};

const CartPage = () => {
  const { items, updateQty, removeFromCart, subtotal } = useCart();
  return (
    <>
      <SEO title="Your Cart — Browse Boost" description="Review your cart and proceed to checkout." canonicalPath="/cart" />
      <section className="container mx-auto py-10">
        <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
        {items.length === 0 ? (
          <p className="text-muted-foreground">Your cart is empty.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-4 rounded-md border p-4">
                  <img src={product.images[0]} alt={product.name} className="h-20 w-20 rounded object-cover" />
                  <div className="flex-1">
                    <Link to={`/product/${product.slug}`} className="font-medium hover:text-primary">{product.name}</Link>
                    <p className="text-sm text-muted-foreground">₹{product.price.toLocaleString()}</p>
                  </div>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => updateQty(product.id, parseInt(e.target.value) || 1)}
                    className="w-16 rounded-md border px-2 py-1"
                    aria-label="Quantity"
                  />
                  <Button variant="ghost" onClick={() => removeFromCart(product.id)}>Remove</Button>
                </div>
              ))}
            </div>
            <div className="rounded-md border p-4">
              <p className="mb-2 text-muted-foreground">Subtotal</p>
              <p className="mb-4 text-2xl font-semibold">₹{subtotal.toLocaleString()}</p>
              <Button asChild variant="hero" className="w-full">
                <Link to="/checkout">Proceed to checkout</Link>
              </Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

const CheckoutPage = () => {
  const { items, subtotal, clear, note, setNote } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "stripe" | "razorpay" | "qr">("paypal");
  const [paymentLink, setPaymentLink] = useState<string>("");
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('bb_user');
    if (!user) {
      alert('Please sign in to access checkout');
      window.location.href = '/auth';
    }
  }, []);
  
  return (
    <>
      <SEO title="Checkout — Browse Boost" description="Enter shipping details and complete your order." canonicalPath="/checkout" />
      <section className="container mx-auto grid gap-8 py-10 md:grid-cols-[2fr_1fr]">
        <form className="space-y-4">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-md border px-3 py-2" placeholder="First name" required />
            <input className="rounded-md border px-3 py-2" placeholder="Last name" required />
          </div>
          <input className="w-full rounded-md border px-3 py-2" placeholder="Email" type="email" required />
          <input className="w-full rounded-md border px-3 py-2" placeholder="Address" required />
          <div className="grid gap-4 sm:grid-cols-3">
            <input className="rounded-md border px-3 py-2" placeholder="City" required />
            <input className="rounded-md border px-3 py-2" placeholder="State" required />
            <input className="rounded-md border px-3 py-2" placeholder="ZIP" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Customer comment</label>
            <Textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Any notes for your order (e.g., ring the bell, extra spicy, etc.)"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Payment method</p>
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant={paymentMethod === "paypal" ? "default" : "outline"} onClick={() => setPaymentMethod("paypal")}>PayPal</Button>
              <Button type="button" variant={paymentMethod === "stripe" ? "default" : "outline"} onClick={() => setPaymentMethod("stripe")}>Stripe</Button>
              <Button type="button" variant={paymentMethod === "razorpay" ? "default" : "outline"} onClick={() => setPaymentMethod("razorpay")}>Razorpay</Button>
              <Button type="button" variant={paymentMethod === "qr" ? "default" : "outline"} onClick={() => setPaymentMethod("qr")}>QR Code</Button>
            </div>
            {paymentMethod === "qr" && (
              <div className="space-y-3 rounded-md border p-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Payment link or UPI ID</label>
                  <input
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Paste payment URL or enter UPI ID"
                    value={paymentLink}
                    onChange={(e) => setPaymentLink(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-md border bg-card p-3">
                    <QRCode value={paymentLink || `Amount: ₹${subtotal.toLocaleString()}`} size={120} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Share or display this QR to accept payment. Configure your actual payment link later.
                  </p>
                </div>
              </div>
            )}
          </div>

          <Button
            type="button"
            variant="hero"
            onClick={() => {
              alert("Order placed! (demo)");
              setNote("");
              clear();
            }}
          >
            Place order
          </Button>
        </form>
        <aside className="rounded-md border p-4">
          <h2 className="mb-2 text-xl font-semibold">Order summary</h2>
          <ul className="space-y-2">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex justify-between text-sm">
                <span>
                  {product.name} × {quantity}
                </span>
                <span>₹{(product.price * quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

const OrdersPage = () => {
  return (
    <>
      <SEO title="Your Orders — Browse Boost" description="Track your past orders and statuses." canonicalPath="/orders" />
      <section className="container mx-auto py-10">
        <h1 className="mb-6 text-3xl font-bold">Order History</h1>
        <p className="text-muted-foreground">Sign in to view your orders. (Demo placeholder)</p>
      </section>
    </>
  );
};

const AdminPage = () => {
  return (
    <>
      <SEO title="Admin Dashboard — Browse Boost" description="Manage products, orders, categories, and users." canonicalPath="/admin" />
      <section className="container mx-auto py-10">
        <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">This is a demo UI only. Connect a backend to enable full CRUD.</p>
      </section>
    </>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('bb_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAuth = (e: React.FormEvent, isLoginForm: boolean) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    
    // Mock authentication - store user data
    const userData = { email, name: formData.get('name') || email.split('@')[0] };
    localStorage.setItem('bb_user', JSON.stringify(userData));
    setUser(userData);
    
    // Redirect to home page
    window.location.href = '/';
  };

  const handleLogout = () => {
    localStorage.removeItem('bb_user');
    setUser(null);
  };

  if (user) {
    return (
      <>
        <SEO title="Account — Browse Boost" description="Manage your account." canonicalPath="/auth" />
        <section className="min-h-screen bg-gradient-primary">
          <div className="container mx-auto py-20">
            <div className="mx-auto max-w-md text-center">
              <h1 className="mb-4 text-3xl font-bold">Welcome, {user.name}!</h1>
              <p className="mb-6 text-muted-foreground">You are successfully logged in.</p>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link to="/">Continue Shopping</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO title="Sign in — Browse Boost" description="Access your account or create a new one." canonicalPath="/auth" />
      <section className="min-h-screen bg-gradient-primary">
        <div className="container mx-auto py-20">
          <div className="mx-auto max-w-md">
            <div className="mb-6 text-center">
              <h1 className="mb-2 text-3xl font-bold">{isLogin ? 'Welcome back' : 'Create account'}</h1>
              <p className="text-muted-foreground">
                {isLogin ? 'Sign in to your account' : 'Join us to start shopping'}
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-elegant">
              <form onSubmit={(e) => handleAuth(e, isLogin)} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input 
                      name="name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    name="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="Enter your email" 
                    type="email" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input 
                    name="password"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="Enter your password" 
                    type="password" 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-primary hover:underline"
                >
                  {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
