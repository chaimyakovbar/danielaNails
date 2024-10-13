import React from "react";
import image1 from "../../assets/images/nails-2.jpg";
import image2 from "../../assets/images/nails-5.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/style.module.css";

const CardProduct = () => {
  return (
    <div className={styles.cardProductContainer}>
      <p className={styles.cardProductText}>👇 לכל העבודות</p>
      <div className={styles.cardProductInnerContainer}>
        <div className={styles.cardProductCarousel}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={500}
            onClickItem={() => (window.location.href = "/works")}
          >
            <div>
              <img src={image1} alt="Product" className={styles.cardProductImage} />
            </div>
            <div>
              <img src={image2} alt="Product" className={styles.cardProductImage} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;