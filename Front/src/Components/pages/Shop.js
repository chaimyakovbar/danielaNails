import React, { useState } from "react";
// import { useProductList } from '../../Hooks/UseProducts';
import { DRESSLIST } from "../../consts/SubjectsList";
import DialogForImage from "../Dialog";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <p style={{ marginLeft: "15px" }}>Dresses for Rent</p>
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          {DRESSLIST.map((product) => (
            <div
              key={product.name}
              style={styles.card}
              onClick={() => handleOpenDialog(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={styles.image}
              />
              <ul style={styles.list}>
                <li style={styles.listItem}>{product.name}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <DialogForImage
          open={!!selectedProduct}
          onClose={handleCloseDialog}
          product={selectedProduct}
        />
      )}
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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "180px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    overflow: "hidden",
    cursor: "pointer",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "330px", // Fixed height
    objectFit: "cover", // Maintain aspect ratio and cover the container
  },
  list: {
    listStyle: "none",
    padding: "10px",
    margin: 0,
  },
  listItem: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
};

export default Shop;
