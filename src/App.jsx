import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let accessToken = authentication.getAccessToken();
    fetch(locationUrl, {
      method: "GET",
      cache: "no-cache",
      headers: {

      }
    })
  })

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
