"use client";
import { Product } from "@prisma/client";

import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";

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
      {product.isOnSale ? (
        <span className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl">
          was {product.price}
        </span>
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-full h-56 object-cover object-center hover:scale-105 transition-transform transform duration-300"
        src={product.imageUrl}
        alt={product.name}
        width={150}
        height={150}
      />
      <div className="p-4">
        <Link
          className="text-gray-900 font-bold text-xl line-clamp-1"
          href={`/product/${product.id}`}
        >
          {product.name}
        </Link>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex justify-between items-center mb-2">
          <span className="text-gray-900">
            ${product.salePrice || product.price}
          </span>
          <button className="btn btn-sm uppercase">
            <TiShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
