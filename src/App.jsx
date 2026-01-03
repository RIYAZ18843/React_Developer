import { useState, useEffect } from 'react'
import { ThemeProvider } from './ThemeContext'
import HookDemo from './HookDemo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // useEffect Hook Example 1: Side effect without dependencies (runs on every render)
  // useEffect Hook Example 2: Side effect with empty dependencies (runs once on mount)
  // useEffect Hook Example 3: Side effect with dependencies (runs when dependency changes)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [seconds, setSeconds] = useState(0)

  // Example: Window Resize Tracker (Side effect with cleanup)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    // Cleanup function: Removes the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array means this runs once on mount

  // Example: Timer (Side effect with cleanup)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <ThemeProvider>
      <div className="container">
        <h1>React Hooks</h1>
        <p className="description">Exploring the <code>useState</code> hook with a premium counter.</p>

        {/* New Hook Demo Component */}
        <HookDemo />

        <div className="counter-value">{count}</div>

        <div className="controls">
          <button onClick={decrement}>- Decrement</button>
          <button onClick={increment}>+ Increment</button>
          <button className="reset-btn" onClick={reset}>Reset</button>
        </div>

        <div className="hooks-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <div className="hook-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '16px', textAlign: 'left' }}>
            <h3>useState</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Manages local state.</p>
            <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#60a5fa' }}>Value: {count}</div>
          </div>

          <div className="hook-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '16px', textAlign: 'left' }}>
            <h3>useEffect</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Handles side effects.</p>
            <div style={{ fontSize: '1rem', color: '#a855f7' }}>
              📏 Width: {windowWidth}px<br />
              ⏱️ Timer: {seconds}s
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', fontSize: '0.85rem' }}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>The useEffect Syntax:</h4>
          <code style={{ color: '#e2e8f0' }}>
            useEffect(() =&gt; &#123;<br />
            &nbsp;&nbsp;// Side effect logic here<br />
            &nbsp;&nbsp;return () =&gt; &#123; /* Cleanup */ &#125;;<br />
            &#125;, [dependencies]);
          </code>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;

