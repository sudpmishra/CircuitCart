"use client";

import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from "../common/Carousel/Carousel";
import { Product } from "@prisma/client";

type HotProductsPageProps = {
  items: Product[];
};
const HotProductsPage = ({ items }: HotProductsPageProps) => {
  return (
    <div className="mb-8" id="hot-products">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🔥🔥🔥 Hot Products 🔥🔥🔥
      </h2>
      <CarouselComponent
        data={items}
        renderFunction={(item: Product) => (
          <div
            onClick={() => (window.location.href = `/product/${item.id}`)}
            style={{ cursor: "pointer", textAlign: "center", padding: "10px" }}
          >
            <div className="h-[20rem] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <h3 className="w-full text-center">{item.name}</h3>
          </div>
        )}
      />
    </div>
  );
};

export default HotProductsPage;
