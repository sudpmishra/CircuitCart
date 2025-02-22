import { CartItem, Product } from "@prisma/client";
import { AiOutlineStop } from "react-icons/ai";
import { TbTrash } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cartItems: any[] = [
    {
      id: "1",
      name: "test",
      price: 200,
      quantity: 1,
      imageUrl: "https://thewordfinder.com/images/random-object-generator.jpeg",
    },
  ];
  return (
    <div className="relative">
      <div className="dropdown">
        {cartItems.length ? (
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
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-ecBackgroundBody dark:bg-ecBackgroundBodyDark rounded-md z-[1] p-2 shadow right-0 mt-1 w-[18rem]"
        >
          {cartItems.length === 0 ? (
            <div className="px-2 py-1 flex items-center justify-center gap-4">
              <AiOutlineStop className="text-red-500" />
              No Items in Cart
            </div>
          ) : null}
          {cartItems.length &&
            cartItems.map((item) => <CartItemEach item={item} key={item.id} />)}

          {cartItems.length && (
            <button className="btn btn-sm btn-primary">
              Proceed to Checkout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

const CartItemEach = ({ item }: { item: Product & CartItem }) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-800">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            // onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            className="btn btn-gray btn-sm"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="px-3">{item.quantity}</span>
          <button
            // onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="btn btn-gray btn-sm"
          >
            +
          </button>
        </div>
      </div>
      <button
      // onClick={() => onRemove(item.id)}
      >
        <TbTrash className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
};

export default Cart;
