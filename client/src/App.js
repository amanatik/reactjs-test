import { useState } from "react";

function App() {

  const [userResponse, setUserResponse] = useState("Response for user");

  const requestHandler = async () => {
    const { hostname, port } = window.location;
    const response = await fetch("http://localhost:3001/request", {
      credentials: 'include',
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        string: hostname,
        integer: port,
        timestamp: Date.now()
      }),
    });

    if (response.status === 200) {
      setUserResponse("OK");
    } else {
      setUserResponse("Error");
    }
  };

  return (
    <div>
      <button onClick={requestHandler}>Send PUT-request</button>
      <h2>{userResponse}</h2>
    </div>
  );
}

export default App;
