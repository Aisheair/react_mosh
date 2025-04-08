// import { useState } from "react";
import ListGroup from "./components/ListGroup";
import './App.css'
import { FaCalendar } from "react-icons/fa";

function App() {
  // const [alertVisible, setalertVisible] = useState(false);
  let items = ["New York", "san Francisco", "Tokyo", "London", "Paris"]
  let log = (item: string) => console.log("clicked", item);
  

  return (
    <div>
    {/* {alertVisible && <Alert onClose={() => setalertVisible(false)}>My Alert</Alert>}
      <Button color="secondary" onClick={() => setalertVisible(true)}>My Button</Button> */}
      <ListGroup items={items} heading="state" onSelectItem={log}/>
      <FaCalendar color="red" size={"40"}/>
    </div>
  );
}

export default App;
