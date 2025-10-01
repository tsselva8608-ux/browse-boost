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
import voltaCameraUnderwater from "@/assets/volta-camera-underwater.jpg";
import voltaCameraMount from "@/assets/volta-camera-mount.jpg";
import voltaCameraAccessories from "@/assets/volta-camera-accessories.jpg";
import novaKeyboard from "@/assets/nova-keyboard.jpg";
import novaKeyboardRgb from "@/assets/nova-keyboard-rgb.jpg";
import novaKeyboardSwitches from "@/assets/nova-keyboard-switches.jpg";
import novaKeyboardGaming from "@/assets/nova-keyboard-gaming.jpg";
import ionHub from "@/assets/ion-hub.jpg";
import ionHubConnected from "@/assets/ion-hub-connected.jpg";
import ionHubPorts from "@/assets/ion-hub-ports.jpg";
import ionHubUnboxing from "@/assets/ion-hub-unboxing.jpg";
import lumenLamp from "@/assets/lumen-lamp.jpg";
import lumenLampColors from "@/assets/lumen-lamp-colors.jpg";
import lumenLampApp from "@/assets/lumen-lamp-app.jpg";
import lumenLampRoom from "@/assets/lumen-lamp-room.jpg";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import turmericRoots from "@/assets/turmeric-roots.jpg";
import turmericGrinding from "@/assets/turmeric-grinding.jpg";
import turmericJar from "@/assets/turmeric-jar.jpg";
import chiliPowder from "@/assets/chili-powder.jpg";
import chiliFresh from "@/assets/chili-fresh.jpg";
import chiliDrying from "@/assets/chili-drying.jpg";
import chiliContainer from "@/assets/chili-container.jpg";
import cuminSeeds from "@/assets/cumin-seeds.jpg";
import cuminBowl from "@/assets/cumin-bowl.jpg";
import cuminRoasting from "@/assets/cumin-roasting.jpg";
import cuminPackage from "@/assets/cumin-package.jpg";
import galaxyProSmartphone from "@/assets/galaxy-pro-smartphone.jpg";
import galaxyProBack from "@/assets/galaxy-pro-back.jpg";
import galaxyProSide from "@/assets/galaxy-pro-side.jpg";
import galaxyProCamera from "@/assets/galaxy-pro-camera.jpg";
import iphoneProMax from "@/assets/iphone-pro-max.jpg";
import iphoneProBack from "@/assets/iphone-pro-back.jpg";
import iphoneProSide from "@/assets/iphone-pro-side.jpg";
import iphoneProFront from "@/assets/iphone-pro-front.jpg";
import iphoneProCamera from "@/assets/iphone-pro-camera.jpg";
import pixelLitePhone from "@/assets/pixel-lite-phone.jpg";
import pixelLiteBack from "@/assets/pixel-lite-back.jpg";
import pixelLiteSide from "@/assets/pixel-lite-side.jpg";
import smartRefrigerator from "@/assets/smart-refrigerator.jpg";
import smartFridgeInterior from "@/assets/smart-fridge-interior.jpg";
import smartFridgeControls from "@/assets/smart-fridge-controls.jpg";
import washingMachine from "@/assets/washing-machine.jpg";
import washingMachineInterior from "@/assets/washing-machine-interior.jpg";
import washingMachineControls from "@/assets/washing-machine-controls.jpg";
import airConditioner from "@/assets/air-conditioner.jpg";
import airConditionerOutdoor from "@/assets/air-conditioner-outdoor.jpg";
import airConditionerRemote from "@/assets/air-conditioner-remote.jpg";
import smartTv from "@/assets/smart-tv.jpg";
import smartTvInterface from "@/assets/smart-tv-interface.jpg";
import smartTvBack from "@/assets/smart-tv-back.jpg";
import smartTvMounted from "@/assets/smart-tv-mounted.jpg";
import smartTvRemote from "@/assets/smart-tv-remote.jpg";
import badmintonRacket from "@/assets/badminton-racket.jpg";
import badmintonGrip from "@/assets/badminton-grip.jpg";
import badmintonSet from "@/assets/badminton-set.jpg";
import cricketBat from "@/assets/cricket-bat.jpg";
import cricketBatGrip from "@/assets/cricket-bat-grip.jpg";
import cricketSet from "@/assets/cricket-set.jpg";
import football from "@/assets/football.jpg";
import footballDetail from "@/assets/football-detail.jpg";
import footballField from "@/assets/football-field.jpg";
import gamingMouse from "@/assets/gaming-mouse.jpg";
import wirelessEarbuds from "@/assets/wireless-earbuds.jpg";
import bluetoothSpeaker from "@/assets/bluetooth-speaker.jpg";
import gamingHeadset from "@/assets/gaming-headset.jpg";
import tabletPro from "@/assets/tablet-pro.jpg";
import laptopUltrabook from "@/assets/laptop-ultrabook.jpg";
import fitnessTracker from "@/assets/fitness-tracker.jpg";
import yogaMat from "@/assets/yoga-mat.jpg";

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
    images: [voltaCamera, voltaCameraUnderwater, voltaCameraMount, voltaCameraAccessories],
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
    images: [novaKeyboard, novaKeyboardRgb, novaKeyboardSwitches, novaKeyboardGaming],
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
    images: [ionHub, ionHubConnected, ionHubPorts, ionHubUnboxing],
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
    images: [lumenLamp, lumenLampColors, lumenLampApp, lumenLampRoom],
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
    images: [turmericPowder, turmericRoots, turmericGrinding, turmericJar],
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
    images: [chiliPowder, chiliFresh, chiliDrying, chiliContainer],
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
    images: [cuminSeeds, cuminBowl, cuminRoasting, cuminPackage],
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
    images: [galaxyProSmartphone, galaxyProBack, galaxyProSide, galaxyProCamera],
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
    images: [iphoneProMax, iphoneProBack, iphoneProSide, iphoneProFront, iphoneProCamera],
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
    images: [pixelLitePhone, pixelLiteBack, pixelLiteSide],
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
    images: [washingMachine, washingMachineInterior, washingMachineControls],
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
    images: [airConditioner, airConditionerOutdoor, airConditionerRemote],
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
    images: [smartTv, smartTvInterface, smartTvBack, smartTvMounted, smartTvRemote],
    description:
      "Ultra HD 4K Smart TV with HDR support, Android TV, and voice remote control.",
    featured: true,
  },
  {
    id: "p17",
    slug: "professional-badminton-racket",
    name: "Professional Badminton Racket",
    brand: "ProSport",
    category: "Sports",
    price: 3299,
    rating: 4.5,
    reviews: 156,
    images: [badmintonRacket, badmintonGrip, badmintonSet],
    description:
      "Professional carbon fiber badminton racket with perfect balance and string tension for competitive play.",
  },
  {
    id: "p18",
    slug: "premium-cricket-bat",
    name: "Premium Cricket Bat",
    brand: "CricketPro",
    category: "Sports",
    price: 4599,
    rating: 4.7,
    reviews: 243,
    images: [cricketBat, cricketBatGrip, cricketSet],
    description:
      "Premium willow cricket bat with perfect grain structure and balanced weight for professional performance.",
    featured: true,
  },
  {
    id: "p19",
    slug: "professional-football",
    name: "Professional Football",
    brand: "SportsMaster",
    category: "Sports",
    price: 1899,
    rating: 4.4,
    reviews: 321,
    images: [football, footballDetail, footballField],
    description:
      "FIFA approved professional football with premium leather finish and perfect weight distribution.",
  },
  {
    id: "p20",
    slug: "rgb-gaming-mouse",
    name: "RGB Gaming Mouse",
    brand: "TechGear",
    category: "Accessories",
    price: 2499,
    rating: 4.6,
    reviews: 412,
    images: [gamingMouse],
    description:
      "High-precision gaming mouse with customizable RGB lighting, 16000 DPI sensor, and ergonomic design for marathon gaming sessions.",
    featured: true,
  },
  {
    id: "p21",
    slug: "wireless-earbuds-pro",
    name: "Wireless Earbuds Pro",
    brand: "SonicX",
    category: "Audio",
    price: 5999,
    rating: 4.5,
    reviews: 687,
    images: [wirelessEarbuds],
    description:
      "True wireless earbuds with active noise cancellation, 30-hour battery life with charging case, and crystal-clear audio quality.",
  },
  {
    id: "p22",
    slug: "portable-bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    brand: "Halo",
    category: "Audio",
    price: 3799,
    rating: 4.3,
    reviews: 298,
    images: [bluetoothSpeaker],
    description:
      "Waterproof bluetooth speaker with 360° sound, 20-hour battery, and deep bass for outdoor adventures.",
  },
  {
    id: "p23",
    slug: "gaming-headset-pro",
    name: "Gaming Headset Pro",
    brand: "TechGear",
    category: "Audio",
    price: 8999,
    rating: 4.7,
    reviews: 534,
    images: [gamingHeadset],
    description:
      "Professional gaming headset with 7.1 surround sound, noise-canceling microphone, and RGB lighting for immersive gaming experience.",
    featured: true,
  },
  {
    id: "p24",
    slug: "tablet-pro-12-inch",
    name: "Tablet Pro 12 inch",
    brand: "Samsung",
    category: "Mobiles",
    price: 54999,
    rating: 4.4,
    reviews: 421,
    images: [tabletPro],
    description:
      "Premium tablet with 12-inch AMOLED display, S-Pen included, powerful processor for productivity and creativity.",
  },
  {
    id: "p25",
    slug: "ultrabook-laptop",
    name: "Ultrabook Laptop",
    brand: "Apple",
    category: "Accessories",
    price: 89999,
    rating: 4.8,
    reviews: 912,
    images: [laptopUltrabook],
    description:
      "Ultra-thin laptop with M3 chip, 16GB RAM, 512GB SSD, stunning Retina display, and all-day battery life.",
    featured: true,
  },
  {
    id: "p26",
    slug: "fitness-tracker-band",
    name: "Fitness Tracker Band",
    brand: "Nebula",
    category: "Wearables",
    price: 3499,
    rating: 4.2,
    reviews: 567,
    images: [fitnessTracker],
    description:
      "Smart fitness tracker with heart rate monitoring, sleep tracking, 10-day battery life, and water resistance.",
  },
  {
    id: "p27",
    slug: "premium-yoga-mat",
    name: "Premium Yoga Mat",
    brand: "SportsMaster",
    category: "Sports",
    price: 1499,
    rating: 4.5,
    reviews: 234,
    images: [yogaMat],
    description:
      "Non-slip yoga mat with extra cushioning, eco-friendly materials, and carrying strap for easy transport.",
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
  "Sports",
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
  "ProSport",
  "CricketPro",
  "SportsMaster",
  "TechGear",
] as const;
