import React from "react";
import SouthIcon from "@mui/icons-material/South";
import image15 from "../assets/all colliction/image15.jpg";
import image6 from "../assets/all colliction/image6.jpg";
import { Carousel } from 'react-responsive-carousel'; // Add this import
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Add this import

const CardProduct = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <p style={{ textAlign: "center" }}>
        For All Collection Click <SouthIcon />
      </p>
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          <Carousel 
            showArrows={true} 
            showThumbs={false} 
            infiniteLoop={true} 
            autoPlay={true} 
            interval={3000} 
            transitionTime={500}
            onClickItem={() => window.location.href = "/shop"} // Navigate on image click
          >
            <div>
              <img src={image15} alt="Product" style={styles.image} />
            </div>
            <div>
              <img src={image6} alt="Product" style={styles.image} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContainer: {
    width: "300px", // Adjusted width for the carousel container
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "380px",
    borderRadius: "10px",
    color: "#fff",
    overflow: "hidden",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
    position: "relative",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  image: {
    width: "100%", // Set to 100% to fit the smaller carousel
    height: "auto",
    transition: "filter 0.3s ease, transform 0.3s ease",
  },
};

export default CardProduct;
