import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [deboucedText, setDeboucedText] = useState(text);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDeboucedText(text);
    }, 500);

    return () => {
      clearTimeout(timerID);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: deboucedText,
            target: language.value,
            key: "CHOOSE_YOUR_API_KEY",
          },
        },
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, deboucedText]);

  return <div className="ui header">{translated}</div>;
};

export default Convert;
