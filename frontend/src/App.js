import { useState, useEffect } from "react";

function App() {
  const [msg, setMsg] = useState("None");

  useEffect(() => {
    fetch("/api/health-check")
      .then((response) => response.json())
      .then((data) => setMsg(data.message));
  }, []);

  console.log(msg);

  return (
    <div>
      <header>Hello, World From New React Application</header>
      {msg}
    </div>
  );
}

export default App;
