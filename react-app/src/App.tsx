import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartIteams, setCartIteams] = useState(['product1', 'product2']);


  return (
    <div>
      <NavBar cartIteamsCount={cartIteams.length}/>
      <Cart cartIteams={cartIteams} onClear={() => setCartIteams([])} />
    </div>
  );
}

export default App;
