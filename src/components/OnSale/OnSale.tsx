import Card from "../common/Card/Card";

const fakeData = [
  {
    id: 1,
    title: "AMD Ryzen 7 7800X3D",
    image:
      "https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_UF350,350_QL50_.jpg",
    price: 399.99,
    offer: "15% Off",
  },
  {
    id: 2,
    title: "MSI GeForce RTX 4070 Ti",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEl7kH4aMFwtqEFqBJ_4K6X--wmPI84KjTw&s",
    offer: "$100 Discount",
    price: 899.99,
  },
  {
    id: 3,
    title: "Kingston Fury 16GB DDR5 RAM",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABBFg4ctZQQfYkJQsoASsZ_kwN8oBYaFlrg&s",
    offer: "Buy 1 Get 1 50% Off",
    price: 99.99,
  },
  {
    id: 4,
    title: "Western Digital Black SN850X 1TB SSD",
    image:
      "https://www.albagame.al/cdn/shop/files/850xx5-1200x1200.png?v=1721132658",
    offer: "20% Off",
    price: 199.99,
  },
  {
    id: 5,
    title: "LG UltraGear 27” 240Hz Monitor",
    image:
      "https://www.lg.com/content/dam/channel/wcms/au/images/it-monitors/27gn750-b_aau_ehap_au_c/gallery/Medium-1100-01.jpg",
    offer: "$50 Discount",
    price: 299.99,
  },
  {
    id: 6,
    title: "SteelSeries Arctis Pro Wireless Headset",
    image: "https://cdn.mos.cms.futurecdn.net/LF7ijsgQ684Qhp7M3VSeoV.jpg",
    offer: "25% Off",
    price: 199.99,
  },
  {
    id: 7,
    title: "Razer BlackWidow V3 Pro Keyboard",
    image:
      "https://cdn.cs.1worldsync.com/56/d3/56d34242-2311-44b8-a87f-f3f27d6e9a37.jpg",
    offer: "10% Off",
    price: 149.99,
  },
  {
    id: 8,
    title: "Corsair Dark Core RGB Pro Mouse",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/corsair-dark-core-rgb-pro-se-gaming-mouse-review-gamerant-feature.jpg",
    offer: "15% Off",
    price: 79.99,
  },
];

const OnSale = () => {
  return (
    <div className="mb-8" id="onsale">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🤑🤑🤑 On Sale 🤑🤑🤑
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {fakeData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OnSale;
