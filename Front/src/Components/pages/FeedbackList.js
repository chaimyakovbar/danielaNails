import React, { useEffect, useState } from "react";
import { getFeedback } from "../../api/feedback";
import styles from "../../styles/style.module.css";
import DialogForImage from "../helpers/Dialog";
import { Link } from "react-router-dom";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await getFeedback();
        setFeedbacks(response.data);
      } catch (err) {
        setError("Failed to load feedbacks.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) {
    return <p>Loading feedbacks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.newFeedbackContainer}>
      <div className={styles.feedbackHeader}>
        <h2 className={styles.newFeedbackTitle}>❤️ לקוחות</h2>
        <Link className={styles.addFeedbackForm} to={"/feedback"}>
          <button className={styles.addFeedbackButton}>
            {window.innerWidth <= 768 ? "+" : "הוספת תגובה"}
          </button>
        </Link>
      </div>

      <ul className={styles.newFeedbackList}>
        {feedbacks.map((feedback) => (
          <li key={feedback._id} className={styles.newFeedbackItem}>
            <div className={styles.newFeedbackContent}>
              {feedback.image && (
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className={styles.newFeedbackImage}
                  onClick={() => handleOpenDialog(feedback)}
                />
              )}
              <div className={styles.newFeedbackText}>
                <span className={styles.newFeedbackName}>{feedback.name}</span>
                <span className={styles.newFeedbackNote}>{feedback.note}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

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

export default FeedbackList;
