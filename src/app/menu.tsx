import clsx from "clsx";
import Link from "next/link";

const Menu = () => {
  return (
    <nav
      className={clsx(
        "bg-ecBackground text-ecForeground dark:bg-ecBackgroundDark dark:text-ecForegroundDark transition-colors",
        "h-8 px-4 py-2",
        "fixed top-16 left-0 right-0 z-[2000]",
        "flex items-center justify-between",
        "border-b border-gray-200 dark:border-gray-800"
      )}
    >
      <ul className="flex gap-8 items-center justify-center w-full">
        <li>
          <Link
            href="/products"
            className="hover:underline text-primary hover:text-secondary"
          >
            All Products
          </Link>
        </li>
        <li>
          <Link
            href="#categories"
            className="hover:underline text-primary hover:text-secondary"
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            href="#hot-products"
            className="hover:underline text-primary hover:text-secondary"
          >
            Hot Products
          </Link>
        </li>
        <li>
          <Link
            href="#onsale"
            className="hover:underline text-primary hover:text-secondary"
          >
            On Sale
          </Link>
        </li>
        <li>
          <Link
            href="#promotional"
            className="hover:underline text-primary hover:text-secondary"
          >
            Promotional Offers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
