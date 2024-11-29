import { useState, useEffect } from 'react'
import { oauth2BaseUrl, clientId, redirectUrl, scope, clientSecret } from './config'
import { redirectToLogin } from './authentication';
import './App.css'

function App() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const clientIdBase64 = btoa(clientId);
  const clientSecretBase64 = btoa(clientSecret);
  const base64Auth = clientIdBase64 + ':' + clientSecretBase64;

  useEffect(() => {
    redirectToLogin();
    // const getAccessToken = async () => {
    //   try {
    //     const token = await fetch(`${oauth2BaseUrl}/token`, {
    //       body: `grant_type=client_credentials&scope=${scope}`,
    //       headers: {
    //         Authorization: `Basic ${base64Auth}` ,
    //         "Content-Type": "application/x-www-form-urlencoded"
    //       },
    //       method: "POST"
    //     });
    //     setToken(token);
    //     console.log(`token: ${JSON.stringify(token)}`);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error(error);
    //     setError(error);
    //   }
    // };
    // getAccessToken();
  }, [])

  async function authorize() {
    try {
      const response = await fetch(`${oauth2BaseUrl}/authorize?scope=${scope}&response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}`, {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        mode: "no-cors"
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
      <h1>Price Of Eggs</h1>
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
