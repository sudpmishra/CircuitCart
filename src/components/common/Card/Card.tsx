"use client";
import { addProductToCart } from "@/service/carts/carts";
import { Product } from "@prisma/client";
import { useSession } from "next-auth/react";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { CgSpinner } from "react-icons/cg";
import { TbShoppingBagExclamation, TbShoppingBagPlus } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import useSWR from "swr";

type CardProps = {
  product: Product;
};

const Card: React.FC<CardProps> = ({ product }) => {
  const { mutate } = useSWR("/api/cart");
  const { status } = useSession();

  const [isPending, startTransition] = useTransition();
  const [toaster, setToaster] = useState({
    show: false,
    success: false,
    message: "",
  });

  const handleClick = () => {
    if (status === "unauthenticated") {
      const qs = new URLSearchParams({
        callbackUrl: window.location.href,
      }).toString();
      redirect("/api/auth/signin?callback" + qs);
    }
    startTransition(async () => {
      const response = await addProductToCart(product.id);
      if (response.success) {
        setToaster({
          show: true,
          success: true,
          message: "Item has been added to cart",
        });
        mutate();
      } else {
        setToaster({
          show: true,
          success: false,
          message: "Item could not be added to cart",
        });
      }
    });
  };
  useEffect(() => {
    if (toaster.show) {
      const timer = setTimeout(() => {
        setToaster((prev) => ({ ...prev, show: false }));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toaster.show]);
  return (
    <div className="bg-gray-300 dark:bg-gray-700 shadow-lg rounded-lg relative overflow-hidden">
      {product.isOnSale ? (
        <span className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl">
          was ${product.price}
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
          className="text-gray-900 dark:text-gray-100 font-bold text-xl line-clamp-1"
          href={`/product/${product.id}`}
        >
          {product.name}
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex justify-between items-center mb-2">
          <span className="text-gray-900 dark:text-gray-100">
            ${product.salePrice || product.price}
          </span>
          <button
            className="btn btn-sm uppercase"
            onClick={handleClick}
            disabled={isPending}
          >
            {isPending ? (
              <>
                <CgSpinner className="animate-spin" />
                Adding To Cart
              </>
            ) : (
              <>
                <TiShoppingCart />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
      {toaster.show && (
        <div className="toast toast-top mt-16">
          {toaster.success ? (
            <div className="alert bg-primary px-4 py-2 border-purple-300 text-white rounded-md">
              <TbShoppingBagPlus />
              <span>{toaster.message}</span>
            </div>
          ) : (
            <div className="alert bg-red-500 px-4 py-2 border-red-300 text-white rounded-md">
              <TbShoppingBagExclamation />
              <span>{toaster.message}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Card;
