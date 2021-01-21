import React from 'react';
//import Accordion from './componets/Accordion';
import Search from "./components/Search";

const items = [
  {
    title: 'What is React?',
    content: 'React is a frond end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

export default () => {
  return (
    <div>
      <Search />
   </div>
  )
}