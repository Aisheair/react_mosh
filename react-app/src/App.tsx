import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";



function App() {
  const [alertVisible, setalertVisible] = useState(false);

  return (
    <div>
    {alertVisible && <Alert onClose={() => setalertVisible(false)}>My Alert</Alert>}
      <Button color="secondary" onClick={() => setalertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
