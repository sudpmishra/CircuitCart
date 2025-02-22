import { ProductService } from "@/service/products/products";
import ProductDetails from "./ProctDetails";
import { CategoryService } from "@/service/categories/categories";
import { DealService } from "@/service/deals/deals";
type ProductProps = { params: { id: string } };
const ProductPage = async ({ params }: ProductProps) => {
  const { id } = await params; // Ensure params is awaited

  const product = await ProductService.getProductById(id);
  const productCategory = product?.categoryId
    ? await CategoryService.getCategoryById(product?.categoryId)
    : null;
  const productPromotion = product?.promotionId
    ? await DealService.getPromotionById(product?.promotionId)
    : null;

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <ProductDetails
        product={product}
        category={productCategory}
        promotion={productPromotion}
      />
    </div>
  );
};

export default ProductPage;
