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

// Product-specific images
import quantumHeadphones from "@/assets/quantum-headphones.jpg";
import quantumHeadphonesWhite from "@/assets/quantum-headphones-white.jpg";
import quantumHeadphonesDetail from "@/assets/quantum-headphones-detail.jpg";
import auroraSmartwatch from "@/assets/aurora-smartwatch.jpg";
import auroraWatchFaces from "@/assets/aurora-watch-faces.jpg";
import auroraWatchSide from "@/assets/aurora-watch-side.jpg";
import voltaCamera from "@/assets/volta-camera.jpg";
import novaKeyboard from "@/assets/nova-keyboard.jpg";
import ionHub from "@/assets/ion-hub.jpg";
import lumenLamp from "@/assets/lumen-lamp.jpg";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import chiliPowder from "@/assets/chili-powder.jpg";
import cuminSeeds from "@/assets/cumin-seeds.jpg";
import galaxyProSmartphone from "@/assets/galaxy-pro-smartphone.jpg";
import galaxyProBack from "@/assets/galaxy-pro-back.jpg";
import galaxyProSide from "@/assets/galaxy-pro-side.jpg";
import iphoneProMax from "@/assets/iphone-pro-max.jpg";
import iphoneProBack from "@/assets/iphone-pro-back.jpg";
import iphoneProSide from "@/assets/iphone-pro-side.jpg";
import pixelLitePhone from "@/assets/pixel-lite-phone.jpg";
import smartRefrigerator from "@/assets/smart-refrigerator.jpg";
import smartFridgeInterior from "@/assets/smart-fridge-interior.jpg";
import smartFridgeControls from "@/assets/smart-fridge-controls.jpg";
import washingMachine from "@/assets/washing-machine.jpg";
import airConditioner from "@/assets/air-conditioner.jpg";
import smartTv from "@/assets/smart-tv.jpg";
import smartTvInterface from "@/assets/smart-tv-interface.jpg";
import smartTvBack from "@/assets/smart-tv-back.jpg";

export const products: Product[] = [
  {
    id: "p1",
    slug: "quantum-wireless-headphones",
    name: "Quantum Wireless Headphones",
    brand: "SonicX",
    category: "Audio",
    price: 12499,
    rating: 4.6,
    reviews: 321,
    images: [quantumHeadphones, quantumHeadphonesWhite, quantumHeadphonesDetail],
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
    price: 16499,
    rating: 4.4,
    reviews: 210,
    images: [auroraSmartwatch, auroraWatchFaces, auroraWatchSide],
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
    price: 20699,
    rating: 4.2,
    reviews: 88,
    images: [voltaCamera],
    description:
      "Capture your adventures in crisp 4K with advanced stabilization and waterproof housing.",
  },
  {
    id: "p4",
    slug: "nova-mechanical-keyboard",
    name: "Nova Mechanical Keyboard",
    brand: "Keystorm",
    category: "Accessories",
    price: 10799,
    rating: 4.8,
    reviews: 512,
    images: [novaKeyboard],
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
    price: 6649,
    rating: 4.1,
    reviews: 67,
    images: [ionHub],
    description:
      "Expand your laptop's potential with HDMI 4K, SD, USB-A, and PD charging in a compact design.",
  },
  {
    id: "p6",
    slug: "lumen-ambient-lamp",
    name: "Lumen Ambient Lamp",
    brand: "Halo",
    category: "Smart Home",
    price: 4899,
    rating: 4.3,
    reviews: 138,
    images: [lumenLamp],
    description:
      "Smart RGB lighting with app control, scenes, and voice assistant support.",
  },
  {
    id: "p7",
    slug: "turmeric-powder-250g",
    name: "Turmeric Powder 250g",
    brand: "SpiceCo",
    category: "Spices",
    price: 415,
    rating: 4.7,
    reviews: 154,
    images: [turmericPowder],
    description:
      "Premium ground turmeric—rich color and aroma. Perfect for curries and wellness drinks.",
  },
  {
    id: "p8",
    slug: "red-chili-powder-200g",
    name: "Red Chili Powder 200g",
    brand: "SpiceCo",
    category: "Spices",
    price: 290,
    rating: 4.5,
    reviews: 201,
    images: [chiliPowder],
    description:
      "Fiery and flavorful chili powder for vibrant heat in your dishes.",
  },
  {
    id: "p9",
    slug: "cumin-seeds-250g",
    name: "Cumin Seeds 250g",
    brand: "SpiceCo",
    category: "Spices",
    price: 249,
    rating: 4.6,
    reviews: 132,
    images: [cuminSeeds],
    description:
      "Whole cumin seeds with warm, earthy aroma—ideal for tempering and spice blends.",
  },
  {
    id: "p10",
    slug: "galaxy-pro-smartphone",
    name: "Galaxy Pro Smartphone",
    brand: "Samsung",
    category: "Mobiles",
    price: 78999,
    rating: 4.5,
    reviews: 892,
    images: [galaxyProSmartphone, galaxyProBack, galaxyProSide],
    description:
      "Premium smartphone with 108MP camera, 12GB RAM, 256GB storage, and 5000mAh battery.",
    featured: true,
  },
  {
    id: "p11",
    slug: "iphone-pro-max",
    name: "iPhone Pro Max",
    brand: "Apple",
    category: "Mobiles",
    price: 129999,
    rating: 4.8,
    reviews: 1543,
    images: [iphoneProMax, iphoneProBack, iphoneProSide],
    description:
      "Latest iPhone with A17 Pro chip, ProRAW camera system, and titanium design.",
    featured: true,
  },
  {
    id: "p12",
    slug: "pixel-lite-phone",
    name: "Pixel Lite Phone",
    brand: "Google",
    category: "Mobiles",
    price: 34999,
    rating: 4.3,
    reviews: 456,
    images: [pixelLitePhone],
    description:
      "Budget-friendly smartphone with pure Android experience and excellent camera.",
  },
  {
    id: "p13",
    slug: "smart-refrigerator",
    name: "Smart Refrigerator 500L",
    brand: "LG",
    category: "Home Appliances",
    price: 65999,
    rating: 4.4,
    reviews: 234,
    images: [smartRefrigerator, smartFridgeInterior, smartFridgeControls],
    description:
      "Energy-efficient smart refrigerator with digital temperature control and Wi-Fi connectivity.",
  },
  {
    id: "p14",
    slug: "washing-machine-8kg",
    name: "Front Load Washing Machine 8kg",
    brand: "Samsung",
    category: "Home Appliances",
    price: 45999,
    rating: 4.2,
    reviews: 567,
    images: [washingMachine],
    description:
      "High-efficiency washing machine with 14 wash programs and steam wash technology.",
  },
  {
    id: "p15",
    slug: "split-air-conditioner",
    name: "Split Air Conditioner 1.5 Ton",
    brand: "Daikin",
    category: "Home Appliances",
    price: 42999,
    rating: 4.6,
    reviews: 345,
    images: [airConditioner],
    description:
      "Inverter AC with copper condenser, 5-star energy rating, and smart Wi-Fi control.",
  },
  {
    id: "p16",
    slug: "smart-tv-55-inch",
    name: "55 Inch 4K Smart TV",
    brand: "Sony",
    category: "Home Appliances",
    price: 85999,
    rating: 4.7,
    reviews: 789,
    images: [smartTv, smartTvInterface, smartTvBack],
    description:
      "Ultra HD 4K Smart TV with HDR support, Android TV, and voice remote control.",
    featured: true,
  },
];

export const categories = [
  "Audio",
  "Wearables",
  "Cameras",
  "Accessories",
  "Smart Home",
  "Spices",
  "Mobiles",
  "Home Appliances",
] as const;

export const brands = [
  "SonicX",
  "Nebula",
  "Volt",
  "Keystorm",
  "Flux",
  "Halo",
  "SpiceCo",
  "Samsung",
  "Apple",
  "Google",
  "LG",
  "Daikin",
  "Sony",
] as const;
