import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CarouselComponent = ({ data, renderFunction }: any) => {
  return (
    <div
      className="carousel-container"
      style={{ width: "90%", margin: "auto" }}
    >
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        {data.map((item: any) => (
          <div key={item.id}>{renderFunction(item)}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
