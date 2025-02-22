import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  "Processors (CPUs)",
  "Graphics Cards (GPUs)",
  "Memory (RAM)",
  "Storage (HDDs & SSDs)",
  "Motherboards",
  "Power Supplies (PSUs)",
  "Cooling Solutions",
  "Peripherals",
  "Monitors",
  "Networking",
  "PC Cases",
  "Prebuilt PCs & Laptops",
];

const products = [
  "Intel Core i9-13900K Processor",
  "AMD Ryzen 7 7800X3D",
  "NVIDIA GeForce RTX 4090",
  "MSI GeForce RTX 4070 Ti",
  "Corsair Vengeance 32GB DDR5 RAM",
  "Kingston Fury 16GB DDR5 RAM",
  "Samsung 990 Pro 2TB NVMe SSD",
  "Western Digital Black SN850X 1TB SSD",
  "ASUS ROG Strix X670E Motherboard",
  "MSI MAG B650 Tomahawk WiFi Motherboard",
  "EVGA 1000W Gold PSU",
  "Cooler Master V850 850W PSU",
  "Noctua NH-D15 Air Cooler",
  "Cooler Master MasterLiquid ML360 RGB AIO",
  "Logitech G Pro X Superlight Wireless Mouse",
  "Razer Viper Ultimate Wireless Mouse",
  "Razer BlackWidow V4 Pro Mechanical Keyboard",
  "SteelSeries Apex Pro TKL Keyboard",
  "LG UltraGear 27” 240Hz Monitor",
  "ASUS ROG Swift 360Hz Monitor",
  "TP-Link Archer AX11000 Gaming Router",
  "Netgear Nighthawk AX12 Router",
  "Corsair iCUE 5000X RGB PC Case",
  "NZXT H7 Elite Mid-Tower Case",
  "Lenovo Legion 7i Gaming Laptop",
  "Razer Blade 15 Advanced Gaming Laptop",
  "Dell XPS 17 9720",
  "Apple MacBook Pro M2 Max",
  "HyperX Cloud II Gaming Headset",
  "SteelSeries Arctis Pro Wireless Headset",
  "Elgato Stream Deck XL",
  "Logitech Brio 4K Webcam",
  "Oculus Quest 2 VR Headset",
  "Valve Index VR Kit",
  "Asus ROG Strix Scope NX TKL Keyboard",
  "Seagate IronWolf 8TB NAS HDD",
  "Samsung 870 EVO 4TB SATA SSD",
  "ADATA XPG S70 Blade 2TB NVMe SSD",
  "HyperX Pulsefire Haste Gaming Mouse",
  "Gigabyte AORUS FI32U 32” 4K Monitor",
  "Acer Predator X34 Ultrawide Gaming Monitor",
  "Fractal Design Meshify C Compact ATX Case",
  "Lian Li O11 Dynamic Mini PC Case",
  "AMD Radeon RX 7900 XTX",
  "Intel Arc A770 Limited Edition",
  "MSI Optix MAG274QRF-QD Gaming Monitor",
  "Corsair Dominator Platinum RGB 64GB DDR5",
  "Be Quiet! Dark Rock Pro 4 Air Cooler",
  "G.Skill Trident Z5 RGB 32GB DDR5",
];

const getRandomCategory = (): string =>
  categories[Math.floor(Math.random() * categories.length)];
const getRandomPrice = (): number =>
  parseFloat((Math.random() * (1500 - 100) + 100).toFixed(2)); // Price range: $100 - $1500
const getRandomStock = (): number => Math.floor(Math.random() * 50) + 1; // Stock range: 1 - 50
const getRandomImageUrl = (): string =>
  `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/500`;

async function seed() {
  console.log("🌱 Seeding database...");

  // Create categories
  const categoryMap = new Map<string, string>();
  for (const name of categories) {
    const category = await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    categoryMap.set(name, category.id);
  }

  // Create products
  for (const name of products) {
    const categoryId = categoryMap.get(getRandomCategory());

    await prisma.product.create({
      data: {
        name,
        description: `High-performance ${name} for gaming and professional use.`,
        price: getRandomPrice(),
        stock: getRandomStock(),
        imageUrl: getRandomImageUrl(),
        categoryId: categoryId as string,
        isHotDeal: Math.random() < 0.2, // 20% chance of being a hot deal
        isOnSale: Math.random() < 0.3, // 30% chance of being on sale
        salePrice: Math.random() < 0.3 ? getRandomPrice() : null,
        isPromotional: Math.random() < 0.1, // 10% chance of being promotional
      },
    });
  }

  console.log("✅ Database seeding complete!");
  await prisma.$disconnect();
}

seed().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
