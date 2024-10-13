import React, { useState } from "react";
import { DRESSLIST } from "../../consts/SubjectsList";
import DialogForImage from "../helpers/Dialog";
import styles from "../../styles/style.module.css";

const Works = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <p className={styles.title}>✨ העבודות שלי</p>
      <div className={styles.shopContainer}>
        <div className={styles.cardContainer}>
          {DRESSLIST.map((product) => (
            <div
              key={product.id}
              className={styles.card}
              onClick={() => handleOpenDialog(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
              <ul className={styles.list}>
                <li className={styles.listItem}>{product.name}</li>
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

export default Works;
