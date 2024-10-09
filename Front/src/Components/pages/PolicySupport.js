import React from "react";
import styles from "../../styles/style.module.css";

const PolicySupport = () => {
  return (
    <div className={styles.policyWrapper}>
      <h1 className={styles.titlePolicy}>**מדיניות השכרת שמלות האתר**</h1>
      <div>
        <h2 className={styles.policyHeading}>1. השכרת שמלות</h2>
        <p className={styles.policyText}>
          כל השכרה מתבצעת לפי זמינות המלאי ובהתאם למדיניות ההשכרה של האתר. יש
          להחזיר את השמלות במצב בו התקבלו, ללא נזקים או כתמים. במידה ותהיה חריגה
          מהמדיניות, יחולו חיובים נוספים. ניתן לקחת את השמלה יום או יומיים לפני
          האירוע, ויש להחזיר אותה יום לאחר האירוע.
        </p>
      </div>
    </div>
  );
};

export default PolicySupport;