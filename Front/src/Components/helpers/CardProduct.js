import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/style.module.css";

import image1 from "../../assets/images/new-logo.png";
import image2 from "../../assets/images/nail-pic.jpeg";
import image3 from "../../assets/images/nail-pic-2.jpeg";
import image4 from "../../assets/images/sticks.jpeg";

const CardProduct = () => {
  return (
    <div className={styles.cardProductContainer}>
      <div className={styles.cardProductInnerContainer}>
        <div className={styles.cardProductCarousel}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={500}
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
        </div>
      </div>
    </div>
  );
};

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

export default CardProduct;
