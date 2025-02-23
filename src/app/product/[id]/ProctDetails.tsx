"use client";
import { addProductToCart } from "@/service/carts/carts";
import { formatRelativeDate } from "@/utils/utils";
import { Category, Product, Promotion } from "@prisma/client";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { CgSpinner } from "react-icons/cg";
import { TbShoppingBagExclamation, TbShoppingBagPlus } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import useSWR from "swr";

type ProductProps = {
  product: Product | null;
  category: Category | null;
  promotion: Promotion | null;
};
const ProductDetails = ({ product, category, promotion }: ProductProps) => {
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
      const response = await addProductToCart(product?.id || "");
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
  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">
        {product.name}{" "}
        <div
          className={clsx(
            "badge",
            product.stock > 0 ? "badge-accent" : "badge-secondary"
          )}
        >
          {product.stock > 0 ? "In Stock" : "Out of stock"}
        </div>
      </h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-2">Category: {category?.name}</p>
      <p className="text-lg font-semibold mt-2">
        Price: ${product.salePrice || product.price}
      </p>
      {product.isOnSale && (
        <p className="text-sm text-red-500">
          On Sale! Original Price: ${product.price}
        </p>
      )}
      {product.isHotDeal && (
        <p className="text-sm text-yellow-500">🔥 Hot Deal</p>
      )}
      {product.isPromotional && promotion && (
        <p className="text-sm text-blue-500">Promotion: {promotion.name}</p>
      )}
      <p className="text-sm text-gray-400 mt-4">
        Added {formatRelativeDate(product.createdAt)}
      </p>
      <button
        className="btn btn-sm btn-primary uppercase mt-4"
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

export default ProductDetails;
