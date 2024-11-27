import { useState, useEffect } from 'react'
import { oauth2BaseUrl, clientId, redirectUrl, scope, clientSecret } from './config'
import './App.css'

function App() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authorize();
  }, [])

  async function authorize() {
    try {
      const response = await fetch(`${oauth2BaseUrl}/authorize?scope=${scope}&response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}`, {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      setResponse(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
    setError(error);
    setLoading(false);
    }
  }


  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        success
      </div>
    </>
  )
}

export default App
