import React, { useState } from 'react'

const App = () => {
  const state = useState()

  const [count, setCount] = useState(0)

  const incNum = () => {
    setCount(count + 1)
    // console.log('clicked ' + count++)
  }
  return(
    <div>
      <h1>Learnt useSate in React js</h1>
      <p>Increament Number</p>
      <h2>{count}</h2>
      <button onClick={incNum}>Click Me</button>
    </div>
  )
}

export default App
