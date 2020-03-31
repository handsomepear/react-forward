import React, { useState, useEffect } from 'react'

function StateHook() {
  const [count, setCount] = useState(0)
  const [fruits, setFruits] = useState([])
  const newFruits = ['banana', 'apple']

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      {
        fruits.length && fruits.map((fruit, index) => {
          return (
            <p key={index}>{fruit}</p>
          )
        })
      }
      <button onClick={() => setFruits(newFruits)}>添加水果</button>
    </div>
  )
}

console.log('change 2')
console.log('change in branck dev')
console.log('change 2 in dev')
export default StateHook

