import { useState } from 'react'
import './App.css'
import logo from './assets/TradingCardShopLogo.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Trading Card Shop logo" />
      </div>
      <h1>Trading Card Shop</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
