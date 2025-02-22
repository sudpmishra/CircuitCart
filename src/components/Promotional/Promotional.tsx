import { Product } from "@prisma/client";

type PromotionalProps = {
  items: Product[];
};

const Promotional = ({ items }: PromotionalProps) => {
  return (
    <div className="mb-8" id="promotional">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🛍️🛍️🛍️ Promotional Offers 🛍️🛍️🛍️
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {items.map((data) => (
          <PromotionalCard key={data.id} item={data} />
        ))}
      </div>
    </div>
  );
};

const PromotionalCard = ({ item }: { item: Product }) => {
  return (
    <div className="bg-ecBackgroundCard dark:bg-ecBackgroundCardDark p-4 rounded-lg mb-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-full h-56 object-cover object-center"
        src={item.imageUrl}
        alt="Offer"
        width={150}
        height={150}
      />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-sm">{item.description}</p>
    </div>
  );
};

export default Promotional;
