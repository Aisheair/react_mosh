// import { useState } from "react";
import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";



function App() {
  // const [alertVisible, setalertVisible] = useState(false);
  let items = ["New York", "san Francisco", "Tokyo", "London", "Paris"]
  let log = (item: string) => console.log("clicked", item);
  

  return (
    <div>
    {/* {alertVisible && <Alert onClose={() => setalertVisible(false)}>My Alert</Alert>}
      <Button color="secondary" onClick={() => setalertVisible(true)}>My Button</Button> */}
      <ListGroup items={items} heading="state" onSelectItem={log}/>
    </div>
  );
  
}

export default App;
