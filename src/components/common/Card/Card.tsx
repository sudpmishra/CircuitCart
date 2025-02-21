"use client";

import type { Product } from "@/utils/types";
import Link from "next/link";
import { HiHeart } from "react-icons/hi";

type CardProps = {
  product: Product;
  // onAddToCart: (product: Product, quantity: number) => void;
  // onAddToWishlist: (product: Product) => void;
};

const Card: React.FC<CardProps> = ({
  product,
  // onAddToCart,
  // onAddToWishlist,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg relative overflow-hidden">
      {product.offer ? (
        <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl">
          {product.offer}
        </span>
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-full h-56 object-cover object-center hover:scale-105 transition-transform transform duration-300"
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
      />
      <div className="p-4">
        <Link
          className="text-gray-900 font-bold text-xl"
          href={`/product/${product.id}`}
        >
          {product.title}
        </Link>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-gray-900">${product.price}</span>
          <button
            // onClick={() => onAddToCart(product, 1)}
            className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded"
          >
            Add to Cart
          </button>
          <button
            // onClick={() => onAddToWishlist(product)}
            className="text-gray-500 hover:text-red-500"
          >
            <HiHeart />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
