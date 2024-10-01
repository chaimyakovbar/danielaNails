import React from "react";
import styled from "@emotion/styled";

const PolicySupport = () => {
  return (
    <PolicyWrapper>
      <Title>**מדיניות השכרת שמלות האתר**</Title>

      <PolicyItem>
        <PolicyHeading>1. השכרת שמלות</PolicyHeading>
        <PolicyText>
          כל השכרה מתבצעת לפי זמינות המלאי ובהתאם למדיניות ההשכרה של האתר. יש
          להחזיר את השמלות במצב בו התקבלו, ללא נזקים או כתמים. במידה ותהיה חריגה
          מהמדיניות, יחולו חיובים נוספים. ניתן לקחת את השמלה יום או יומיים לפני
          האירוע, ויש להחזיר אותה יום לאחר האירוע.
        </PolicyText>
      </PolicyItem>

      <PolicyItem>
        <PolicyHeading>2. עיצוב אישי</PolicyHeading>
        <PolicyText>
          שמלות בעיצוב אישי התהליך כולל פגישות מדידה והתאמה אישית בחירת וקניית
          בדים תדמיתנות ותפירת השמלה עד לשלמותה, ומותאמות לכל לקוחה באופן
          ייחודי. במידה והתחלנו בתהליך הייצור, לא ניתן לבטל את השירות ולא יינתן
          החזר כספי.
        </PolicyText>
      </PolicyItem>

      <PolicyItem>
        <PolicyHeading>3. ביטולים והחזרים</PolicyHeading>
        <PolicyText>
          בשעת שריון התאריך, נדרש תשלום של 50% מעלות השמלה. יתרת התשלום תתבצע
          בעת החזרת השמלה. לאחר שריון השמלה, לא ניתן לבטל את העסקה. במקרה של
          ביטול תוך 48 שעות ממועד ההשכרה, יש לשלם את דמי השריון של השמלה.
        </PolicyText>
      </PolicyItem>

      <PolicyItem>
        <PolicyHeading>4. אמצעי תשלום</PolicyHeading>
        <PolicyText>
          ניתן לשלם במזומן, בהעברה בנקאית או בביט. יש לשלם 50% מהעלות בעת שריון
          השמלה, ואת היתרה בעת החזרתה.
        </PolicyText>
      </PolicyItem>

      <PolicyItem>
        <PolicyHeading>5. נזקים ותשלום נוסף</PolicyHeading>
        <PolicyText>
          אם במהלך השימוש בשמלה יתגלו נזקים כגון קרעים, כתמים שלא ניתנים להוצאה
          או הרס אחר, הלקוחה תידרש לשלם עבור תיקון השמלה או עבור שמלה חדשה
          במקרים חמורים.
        </PolicyText>
      </PolicyItem>

      <PolicyItem>
        <PolicyHeading>6. אחריות ושמירה על פרטים אישיים</PolicyHeading>
        <PolicyText>
          אנו מתחייבים לשמור על פרטיות המידע האישי שלך ולהשתמש בו אך ורק לצורך
          מתן השירותים המוצעים באתר.
        </PolicyText>
      </PolicyItem>

      <PolicyItem>
        <PolicyHeading>7. תנאי שימוש נוספים</PolicyHeading>
        <PolicyText>
          השימוש באתר כפוף לתנאי השימוש המפורטים בעמוד זה. על ידי שימוש באתר, את
          מסכימה לתנאים אלו.
        </PolicyText>
      </PolicyItem>
    </PolicyWrapper>
  );
};

export default PolicySupport;

// Styled Components
const PolicyWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
  font-family: "Varela Round", sans-serif;
  color: #333;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  border-bottom: 2px solid #0072ff;
  padding-bottom: 10px;
`;

const PolicyItem = styled.div`
  margin-bottom: 30px;
`;

const PolicyHeading = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: #0072ff;
  margin-bottom: 10px;
`;

const PolicyText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #555;
`;
