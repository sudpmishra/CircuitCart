import Card from "../common/Card/Card";
import { Product } from "@prisma/client";

type OnSaleProps = {
  items: Product[];
};

const OnSale = ({ items }: OnSaleProps) => {
  return (
    <div className="mb-8" id="onsale">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🤑🤑🤑 On Sale 🤑🤑🤑
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OnSale;
