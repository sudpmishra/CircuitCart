import Categories from "@/components/Categories/Categories";
import HotProductsPage from "@/components/HotProducts/HotProducts";
import clsx from "clsx";
import OnSalePage from "@/components/OnSale/OnSale";
import Promotional from "@/components/Promotional/Promotional";
import Menu from "./menu";
import { CategoryService } from "@/service/categories/categories";
import { DealService } from "@/service/deals/deals";

export default async function Home() {
  const categories = await CategoryService.getAllCategorys();
  const hotDeals = await DealService.getHotProducts();
  const saleProducts = await DealService.getSaleProducts();
  const promotionalOffers = await DealService.getPromotionalOffers();
  return (
    <>
      <Menu />
      <div
        className={clsx(
          "w-full min-h-[calc(100vh-10rem)]",
          "px-8 py-4 md:px-16 md:py-8 lg:px-24 lg:py-16 sm:mx-auto",
          "bg-ecBackgroundBody dark:bg-ecBackgroundBodyDark text-ecForegroundBody dark:text-ecForegroundBodyDark"
        )}
      >
        <Categories categories={categories} />
        <OnSalePage items={saleProducts} />
        <HotProductsPage items={hotDeals} />
        <Promotional items={promotionalOffers} />
      </div>
    </>
  );
}
