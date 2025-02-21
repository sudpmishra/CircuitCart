"use client";

import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from "../common/Carousel/Carousel";

const fakeData = [
  {
    id: 1,
    title: "Intel Core i9-13900K Processor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesyH6QLUnsoD-ktLuMzlyyUdsMQO8UUWpmg&s",
  },
  {
    id: 2,
    title: "NVIDIA GeForce RTX 4090 Graphics Card",
    image:
      "https://images.nvidia.com/aem-dam/Solutions/geforce/ada/rtx-4090/geforce-rtx-4090-product-gallery-full-screen-3840-3.jpg",
  },
  {
    id: 3,
    title: "Corsair Vengeance 32GB DDR5 RAM",
    image: "https://m.media-amazon.com/images/I/61wJJ1DrsTL.jpg",
  },
  {
    id: 4,
    title: "Samsung 990 Pro 2TB NVMe SSD",
    image:
      "https://image-us.samsung.com/SamsungUS/home/computing/memory-storage/solid-state-drives/07302024/MZ-V9P2T0B-AM_S.COM_N01_HA_TH_V01.jpg?$product-details-jpg$",
  },
  {
    id: 5,
    title: "ASUS ROG Strix X670E Motherboard",
    image:
      "https://dlcdnwebimgs.asus.com/files/media/B51D103D-2941-412E-8479-AF994957093B/v1/img/kv/ROG-Strix-X670E-E-Gaming.png",
  },
  {
    id: 6,
    title: "Cooler Master MasterLiquid ML360 RGB AIO",
    image:
      "https://trixis.in/wp-content/uploads/2024/07/mlx-d36m-a18p2-r1-image-main-600x600-1.webp",
  },
  {
    id: 7,
    title: "Logitech G Pro X Superlight Wireless Mouse",
    image:
      "https://i5.walmartimages.com/seo/Logitech-G-Pro-X-Superlight-Wireless-Gaming-Mouse-Ultra-Lightweight-HERO-25K-Sensor-Black_c481f5fa-9934-4ed7-94af-29a598bd3b2e.03017ee44c6bb06a233bf23cbdd4f52b.jpeg",
  },
];

const HotProductsPage = () => {
  return (
    <div className="mb-8" id="hot-products">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🔥🔥🔥 Hot Products 🔥🔥🔥
      </h2>
      <CarouselComponent
        data={fakeData}
        renderFunction={(item: any) => (
          <div
            onClick={() => (window.location.href = `/products/${item.id}`)}
            style={{ cursor: "pointer", textAlign: "center", padding: "10px" }}
          >
            <div className="h-[20rem] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <h3 className="w-full text-center">{item.title}</h3>
          </div>
        )}
      />
    </div>
  );
};

export default HotProductsPage;
