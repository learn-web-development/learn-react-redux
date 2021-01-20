import React from 'react';
import ReactDOM from 'react-dom'
import Accordion from './components/Accordion'

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
      <Accordion items={items} />
    </div>
  )
}

export default App

//created error on js console

// export default  () => {
//   return(
//     <div>
//       <Accordion items={items} />
//     </div>
//   ) 
// }