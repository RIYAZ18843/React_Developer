import { useState } from 'react'
import './App.css'

function App() {
  // useState Hook Example
  // const [state, setState] = useState(initialValue)
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="container">
      <h1>React Hooks</h1>
      <p className="description">Exploring the <code>useState</code> hook with a premium counter.</p>

      <div className="counter-value">{count}</div>

      <div className="controls">
        <button onClick={decrement}>- Decrement</button>
        <button onClick={increment}>+ Increment</button>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', fontSize: '0.9rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>How it works:</h4>
        <p style={{ margin: 0, color: '#94a3b8' }}>
          <code>const [count, setCount] = useState(0)</code>
          <br /><br />
          • <strong>count</strong>: Current state value
          <br />
          • <strong>setCount</strong>: Function to update the state
          <br />
          • <strong>0</strong>: Initial value
        </p>
      </div>
    </div>
  )
}

export default App
