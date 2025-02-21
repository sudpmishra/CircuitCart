const fakeData = [
  {
    id: 1,
    title: "Free Razer Goliathus Mousepad",
    description: "with any purchase over $200",
  },
  {
    id: 2,
    title: "Buy a CPU + Motherboard combo",
    description: "and get an additional 5% off",
  },
  {
    id: 3,
    title: "Free 1-year subscription to Norton 360",
    description: "with any laptop purchase",
  },
  {
    id: 4,
    title: "Logitech G502 X Gaming Mouse",
    description: "Limited-Time Price: $59.99",
  },
  {
    id: 5,
    title: "Exclusive Pre-Order: Intel Core Ultra 9",
    description: "with free thermal paste",
  },
];
const Promotional = () => {
  return (
    <div className="mb-8" id="promotional">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🛍️🛍️🛍️ Promotional Offers 🛍️🛍️🛍️
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {fakeData.map((data) => (
          <PromotionalCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

const PromotionalCard = ({ title, description }) => {
  return (
    <div className="bg-ecBackgroundCard dark:bg-ecBackgroundCardDark p-4 rounded-lg mb-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-full h-56 object-cover object-center"
        src="https://w7.pngwing.com/pngs/67/521/png-transparent-computer-icons-offers-text-logo-discount-thumbnail.png"
        alt="Offer"
        width={150}
        height={150}
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Promotional;
