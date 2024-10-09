import * as React from "react";
import { Carousel } from "react-responsive-carousel";

import image1 from "../../assets/images/new-logo.png";
import image2 from "../../assets/images/nail-pic.jpeg";
import image3 from "../../assets/images/nail-pic-2.jpeg";
import image4 from "../../assets/images/sticks.jpeg";

export default function QuiltedImageList() {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        interval={4000}
      >
        {itemData.map((item) => (
          <div key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

const itemData = [
  {
    img: image1,
    title: "image1",
  },
  {
    img: image2,
    title: "image2",
  },
  {
    img: image3,
    title: "image3",
  },
  {
    img: image4,
    title: "image4",
  },
];
