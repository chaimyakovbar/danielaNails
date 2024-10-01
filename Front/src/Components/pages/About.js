import React from "react";
import styled from "@emotion/styled";

const About = () => {
  return (
    <SectionWrapper>
      <Title>הבית שלך לשמלות יוקרה ועיצוב אישי</Title>
      <HebrewText>
        אצל רחל אפינגר תוכלי למצוא שמלות יוקרתיות וצנועות להשכרה ממותגי על
        בינלאומיים ומבוטיקים מובילים מאיטליה וצרפת. בנוסף, אני מציעה שמלות
        בעיצוב אישי המותאמות בדיוק למבנה הגוף וההעדפות שלך, כדי שתוכלי להרגיש
        הכי יפה ובטוחה בעצמך.
      </HebrewText>
      <HebrewText>
        כל שמלה נבחרת בקפידה כדי להחמיא לך ולהדגיש את היופי הטבעי שלך. בין אם את
        מחפשת שמלה לאירוע מיוחד או סתם רוצה להתפנק ולהיראות נהדר, אני כאן כדי
        לספק לך חוויה בלתי נשכחת ומלאה בסטייל.
      </HebrewText>

      <Title>** Your Home for Luxury Dresses and Custom Design **</Title>
      <EnglishText>
        At Rachel Efinger, you will find luxurious and modest dresses for rent
        from top international brands and leading boutiques in Italy and France.
        I also offer custom-designed dresses tailored perfectly to your body
        shape and preferences, so you can feel your most beautiful and confident
        self.
      </EnglishText>
      <EnglishText>
        Each dress is carefully selected to flatter your figure and enhance your
        natural beauty. Whether you're looking for a dress for a special
        occasion or simply want to treat yourself and look fabulous, I am here
        to provide you with an unforgettable and stylish experience.
      </EnglishText>
    </SectionWrapper>
  );
};

export default About;

// Styled Components
const SectionWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: "David Libre", serif;
  font-size: 36px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const HebrewText = styled.p`
  font-family: "Varela Round", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  text-align: right;
  color: #555;
  margin-bottom: 20px;
`;

const EnglishText = styled.p`
  font-family: "Varela Round", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  text-align: left;
  color: #555;
  margin-bottom: 20px;
`;
