import React from "react";
import styles from "../../styles/style.module.css";

const About = () => {
  return (
    <div className={styles.sectionWrapper}>
      <h1 className={styles.titleAbout}>הבית שלך לשמלות יוקרה ועיצוב אישי</h1>
      <p className={styles.hebrewText}>
        אצל רחל אפינגר תוכלי למצוא שמלות יוקרתיות וצנועות להשכרה ממותגי על
        בינלאומיים ומבוטיקים מובילים מאיטליה וצרפת. בנוסף, אני מציעה שמלות
        בעיצוב אישי המותאמות בדיוק למבנה הגוף וההעדפות שלך, כדי שתוכלי להרגיש
        הכי יפה ובטוחה בעצמך.
      </p>
      {/* Repeat for other texts */}
    </div>
  );
};

export default About;