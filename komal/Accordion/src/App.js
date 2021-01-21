import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
  {
    title: 'What is React?',
    content: 'React is Fornt end Javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library amony engineers'
  },
  {
    title: 'How do we use React?',
    content: 'We use React by creating components' 
  }
]

const App = () => {
  return(
    <div>
     <Search />
    </div>
  )
}

export default App