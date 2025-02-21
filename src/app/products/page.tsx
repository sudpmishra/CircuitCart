import Card from "@/components/common/Card/Card";
import clsx from "clsx";

const fakeData = [
  {
    id: 1,
    title: "AMD Ryzen 7 7800X3D",
    image:
      "https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_UF350,350_QL50_.jpg",
    price: 399.99,
  },
  {
    id: 2,
    title: "MSI GeForce RTX 4070 Ti",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEl7kH4aMFwtqEFqBJ_4K6X--wmPI84KjTw&s",
    price: 899.99,
  },
  {
    id: 3,
    title: "Kingston Fury 16GB DDR5 RAM",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABBFg4ctZQQfYkJQsoASsZ_kwN8oBYaFlrg&s",
    price: 99.99,
  },
  {
    id: 4,
    title: "Western Digital Black SN850X 1TB SSD",
    image:
      "https://www.albagame.al/cdn/shop/files/850xx5-1200x1200.png?v=1721132658",
    price: 199.99,
  },
  {
    id: 5,
    title: "LG UltraGear 27” 240Hz Monitor",
    image:
      "https://www.lg.com/content/dam/channel/wcms/au/images/it-monitors/27gn750-b_aau_ehap_au_c/gallery/Medium-1100-01.jpg",
    price: 299.99,
  },
  {
    id: 6,
    title: "SteelSeries Arctis Pro Wireless Headset",
    image: "https://cdn.mos.cms.futurecdn.net/LF7ijsgQ684Qhp7M3VSeoV.jpg",
    price: 199.99,
  },
  {
    id: 7,
    title: "Razer BlackWidow V3 Pro Keyboard",
    image:
      "https://cdn.cs.1worldsync.com/56/d3/56d34242-2311-44b8-a87f-f3f27d6e9a37.jpg",
    price: 149.99,
  },
  {
    id: 8,
    title: "Corsair Dark Core RGB Pro Mouse",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/corsair-dark-core-rgb-pro-se-gaming-mouse-review-gamerant-feature.jpg",
    price: 79.99,
  },
];

const ProductsPage = () => {
  return (
    <div
      className={clsx(
        "w-full min-h-[calc(100vh-10rem)]",
        "px-8 py-4 md:px-16 md:py-8 lg:px-24 lg:py-16 sm:mx-auto",
        "bg-ecBackgroundBody dark:bg-ecBackgroundBodyDark text-ecForegroundBody dark:text-ecForegroundBodyDark"
      )}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      {/* TODO: imporove the design here */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg font-semibold">Filters</div>
        <input type="text" placeholder="Search" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {fakeData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 1/1</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
