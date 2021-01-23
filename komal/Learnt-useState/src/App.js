import React, { useState } from 'react'

const App = () => {
  const state = useState()

  const [Count, setCount] = useState(0)

  const IncNum = () => {
    setCount(Count + 1)
    // console.log('clicked ' + Count++)
  }
  return(
    <div>
      <h1>Learnt useSate in React js</h1>
      <p>Increament Number</p>
      <h2>{Count}</h2>
      <button onClick={IncNum}>Click Me</button>
    </div>
  )
}

export default App