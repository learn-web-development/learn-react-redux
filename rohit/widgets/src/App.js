import React, { useState } from "react";
//import Accordion from './components/Accordion';
//import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

/* const items = [
  {
    title: "What is React?",
    content: "React is a frond end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
]; */

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade Of Blue",
    value: "blue",
  },
];

const App = () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  
  return (
    <div>
      <button className='ui red button' onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
      }
    </div>
  );
};

export default App;
