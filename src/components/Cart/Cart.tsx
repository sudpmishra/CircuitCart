"use client";
import useSWR from "swr";

import { CartItem, Product } from "@prisma/client";
import { AiOutlineStop } from "react-icons/ai";
import { TbTrash } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { BsArrowRight } from "react-icons/bs";
type CartItemWithProduct = CartItem & {
  product: Product;
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Cart = () => {
  const {
    data: cartItems,
  }: {
    data: CartItemWithProduct[];
  } = useSWR("/api/cart", fetcher);

  const getSubTotal = () => {
    return cartItems.reduce((a, c) => {
      return a + c.quantity * c.product.price;
    }, 0);
  };
  return (
    <div className="relative">
      <div className="dropdown">
        {cartItems?.length ? (
          <div className="absolute -top-1 -right-1 rounded-full h-4 w-4 bg-red-500 text-white flex items-center justify-center text-sm">
            {cartItems.length}
          </div>
        ) : null}
        <button
          tabIndex={0}
          role="button"
          className="rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition p-2"
        >
          <TiShoppingCart size={24} />
        </button>
        <div
          tabIndex={0}
          className="dropdown-content menu bg-ecBackgroundBody dark:bg-ecBackgroundBodyDark rounded-md z-[1] p-2 shadow right-0 mt-1 w-[20rem] max-h-[30rem]"
        >
          <div className="overflow-auto">
            {cartItems?.length === 0 ? (
              <div className="px-2 py-1 flex items-center justify-center gap-4">
                <AiOutlineStop className="text-red-500" />
                No Items in Cart
              </div>
            ) : null}
            {cartItems?.length
              ? cartItems.map((item) => (
                  <CartItemEach item={item} key={item.id} />
                ))
              : null}

            {cartItems?.length ? (
              <div className="mt-3">
                <div className="flex items-center justify-around">
                  <div>
                    <div className="text-lg font-b">Sub-Total</div>
                    <div className="text-sm">
                      {cartItems.length}{" "}
                      {cartItems.length > 1 ? "items" : "item"}
                    </div>
                  </div>
                  <div className="text-2xl font-bold">
                    ${getSubTotal().toFixed(2)}
                  </div>
                </div>
                <button className="btn btn-sm btn-primary w-full mt-3">
                  Proceed to Checkout
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItemEach = ({ item }: { item: CartItemWithProduct }) => {
  const { mutate } = useSWR("/api/cart");

  const handleQuantityUpdate = async (itemId: string, quantity: number) => {
    const response = await fetch(`/api/cart`, {
      method: "POST", // Or PATCH/PUT depending on your API
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity, itemId }),
    });

    if (!response.ok) throw new Error("Failed to update quantity");
    else {
      mutate();
    }
  };

  return (
    <div className="py-2 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold line-clamp-1">
        {item.product.name}
      </h3>
      <div className="flex items-center gap-4 px-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-start gap-3">
            ${item.product.price.toFixed(2)}
            <BsArrowRight />${(item.product.price * item.quantity).toFixed(2)}
          </p>
          <div className="flex items-center justify-end gap-2 mt-2">
            <button
              onClick={() => handleQuantityUpdate(item.productId, -1)}
              className="btn btn-gray btn-sm"
            >
              -
            </button>
            <span className="px-3">{item.quantity}</span>
            <button
              onClick={() => handleQuantityUpdate(item.productId, 1)}
              className="btn btn-gray btn-sm"
            >
              +
            </button>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => handleQuantityUpdate(item.productId, 0)}
            >
              <TbTrash className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
