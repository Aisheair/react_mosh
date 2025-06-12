import { useState } from "react";

function App() {
  const [tags, setTages] = useState(["happy", "cheerful"]);

  const handleClick = () => {
        //Add
    setTages([...tags, "exciting"])

    // Remove
    setTages(tags.filter(tag => tag ! == 'happy'))

    // Update
    setTages(tags.map(tag => tag === 'happy' ? 'happiness' : tag ))
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
