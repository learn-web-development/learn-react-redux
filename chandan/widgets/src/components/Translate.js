import React, { useState, useEffect } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const languageOptions = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Russian',
    value: 'ru',
  },
  {
    label: 'Japanese',
    value: 'ja'
  }
]

const Translate = () => {
  const [text, setText] = useState("how are you?");
  const [debouncedText, setDebouncedText] = useState(text);
  const [language, setLanguage] = useState(languageOptions[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return (() => {
      clearTimeout(timer);
    });
  }, [text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter the text to translate</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
        </div>
      </div>
      <Dropdown
        label="Select a language to translate to"
        items={languageOptions}
        selected={language}
        setSelected={setLanguage}>
      </Dropdown>
      <hr />
      <Convert text={debouncedText} language={language}></Convert>
    </div>

  )
};

export default Translate;
