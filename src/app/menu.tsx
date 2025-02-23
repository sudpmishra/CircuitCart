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
            className="hover:bg-primary px-3 py-2 text-primary hover:text-white transition-colors"
          >
            All Products
          </Link>
        </li>
        <li>
          <Link
            href="#categories"
            className="hover:bg-primary px-3 py-2 text-primary hover:text-white transition-colors"
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            href="#hot-products"
            className="hover:bg-primary px-3 py-2 text-primary hover:text-white transition-colors"
          >
            Hot Products
          </Link>
        </li>
        <li>
          <Link
            href="#onsale"
            className="hover:bg-primary px-3 py-2 text-primary hover:text-white transition-colors"
          >
            On Sale
          </Link>
        </li>
        <li>
          <Link
            href="#promotional"
            className="hover:bg-primary px-3 py-2 text-primary hover:text-white transition-colors"
          >
            Promotional Offers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
