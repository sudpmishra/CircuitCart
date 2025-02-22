import { formatRelativeDate } from "@/utils/utils";
import { Category, Product, Promotion } from "@prisma/client";
import clsx from "clsx";

type ProductProps = {
  product: Product | null;
  category: Category | null;
  promotion: Promotion | null;
};
const ProductDetails = ({ product, category, promotion }: ProductProps) => {
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
    </div>
  );
};

export default ProductDetails;
