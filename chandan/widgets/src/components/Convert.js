import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      });
      setTranslatedText(data.data.translations[0].translatedText);
    }
    if (text) {
      translate();
    }
  }, [text, language]);

  return (
    <div>{translatedText}</div>
  )
};

export default Convert;
