export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number; // 0-5
  reviews: number;
  images: string[];
  description: string;
  featured?: boolean;
};

// Images will be generated/added separately; using imports for strong typing once available
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export const products: Product[] = [
  {
    id: "p1",
    slug: "quantum-wireless-headphones",
    name: "Quantum Wireless Headphones",
    brand: "SonicX",
    category: "Audio",
    price: 149.99,
    rating: 4.6,
    reviews: 321,
    images: [product1, product2, product3],
    description:
      "Experience immersive sound with active noise cancellation, 40-hour battery life, and ultra-low latency for gaming and streaming.",
    featured: true,
  },
  {
    id: "p2",
    slug: "aurora-smartwatch",
    name: "Aurora Smartwatch",
    brand: "Nebula",
    category: "Wearables",
    price: 199.0,
    rating: 4.4,
    reviews: 210,
    images: [product2, product3, product1],
    description:
      "Track fitness, sleep, and heart rate with a stunning AMOLED display and 7-day battery life.",
    featured: true,
  },
  {
    id: "p3",
    slug: "volta-4k-action-camera",
    name: "Volta 4K Action Camera",
    brand: "Volt",
    category: "Cameras",
    price: 249.0,
    rating: 4.2,
    reviews: 88,
    images: [product3, product1, product2],
    description:
      "Capture your adventures in crisp 4K with advanced stabilization and waterproof housing.",
  },
  {
    id: "p4",
    slug: "nova-mechanical-keyboard",
    name: "Nova Mechanical Keyboard",
    brand: "Keystorm",
    category: "Accessories",
    price: 129.99,
    rating: 4.8,
    reviews: 512,
    images: [product1, product3, product2],
    description:
      "Hot-swappable switches, per-key RGB, and a premium aluminum chassis for a dream typing experience.",
    featured: true,
  },
  {
    id: "p5",
    slug: "ion-pro-usb-c-hub",
    name: "ION Pro USB-C Hub",
    brand: "Flux",
    category: "Accessories",
    price: 79.99,
    rating: 4.1,
    reviews: 67,
    images: [product2, product1, product3],
    description:
      "Expand your laptop's potential with HDMI 4K, SD, USB-A, and PD charging in a compact design.",
  },
  {
    id: "p6",
    slug: "lumen-ambient-lamp",
    name: "Lumen Ambient Lamp",
    brand: "Halo",
    category: "Smart Home",
    price: 59.0,
    rating: 4.3,
    reviews: 138,
    images: [product3, product2, product1],
    description:
      "Smart RGB lighting with app control, scenes, and voice assistant support.",
  },
  {
    id: "p7",
    slug: "turmeric-powder-250g",
    name: "Turmeric Powder 250g",
    brand: "SpiceCo",
    category: "Spices",
    price: 4.99,
    rating: 4.7,
    reviews: 154,
    images: [product1, product2, product3],
    description:
      "Premium ground turmeric—rich color and aroma. Perfect for curries and wellness drinks.",
  },
  {
    id: "p8",
    slug: "red-chili-powder-200g",
    name: "Red Chili Powder 200g",
    brand: "SpiceCo",
    category: "Spices",
    price: 3.49,
    rating: 4.5,
    reviews: 201,
    images: [product2, product3, product1],
    description:
      "Fiery and flavorful chili powder for vibrant heat in your dishes.",
  },
  {
    id: "p9",
    slug: "cumin-seeds-250g",
    name: "Cumin Seeds 250g",
    brand: "SpiceCo",
    category: "Spices",
    price: 2.99,
    rating: 4.6,
    reviews: 132,
    images: [product3, product1, product2],
    description:
      "Whole cumin seeds with warm, earthy aroma—ideal for tempering and spice blends.",
  },
];

export const categories = [
  "Audio",
  "Wearables",
  "Cameras",
  "Accessories",
  "Smart Home",
  "Spices",
] as const;

export const brands = [
  "SonicX",
  "Nebula",
  "Volt",
  "Keystorm",
  "Flux",
  "Halo",
  "SpiceCo",
] as const;
