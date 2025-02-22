import Card from "@/components/common/Card/Card";
import Pagination from "@/components/common/Pagination/Pagination";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import { CategoryService } from "@/service/categories/categories";
import { ProductService } from "@/service/products/products";
import clsx from "clsx";
type ProductsPageProps = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    category?: string;
  }>;
};
const ProductsPage = async (props: ProductsPageProps) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const category = searchParams?.category || "All";
  const totalPages = await ProductService.getProductPages(query);
  const categoryDetails = await CategoryService.getCategoryById(category);

  const data = await ProductService.getProducts(page, 10, query);
  return (
    <div
      className={clsx(
        "w-full min-h-[calc(100vh-10rem)]",
        "px-8 py-4 md:px-16 md:py-8 lg:px-24 lg:py-16 sm:mx-auto",
        "bg-ecBackgroundBody dark:bg-ecBackgroundBodyDark text-ecForegroundBody dark:text-ecForegroundBodyDark"
      )}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg font-semibold flex-1">
          <div className="flex gap-2 items-center justify-start">
            Filters
            <div className="badge">
              Category: {categoryDetails?.name || category}
            </div>
          </div>
        </div>
        <SearchBar placeholder="Search..." />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default ProductsPage;
