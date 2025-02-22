import Image from "next/image";
import clsx from "clsx";
import Cart from "@/components/Cart/Cart";
import Link from "next/link";
import UserProfile from "@/components/UserProfile/UserProfile";

const Header = () => {
  return (
    <header
      className={clsx(
        "bg-ecBackground text-ecForeground dark:bg-ecBackgroundDark dark:text-ecForegroundDark transition-colors",
        "h-16 px-4 py-3",
        "fixed top-0 left-0 right-0 z-[5000]",
        "flex items-center justify-between",
        "border-b border-gray-200 dark:border-gray-800"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <Link className="flex items-center" href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={80}
            height={32}
            className="rounded-sm"
          />
          <h1 className="text-2xl font-semibold ml-4">CircuitCart</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Cart />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
