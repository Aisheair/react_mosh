import { useState } from "react";

function App() {
  const [tags, setTages] = useState(['happy', 'cheerful']);

  const handleClick = () => {

  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
