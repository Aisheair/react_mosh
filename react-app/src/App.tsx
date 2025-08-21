import { use, useEffect } from "react";

const connect = () => {
  console.log("Connecting to the service");
};

const disconnect = () => {
  console.log("Disconnecting to the service");
};

function App() {
  useEffect(() => {
    document.title = "My App";
    connect();
    
    return () => disconnect();
  });

  return <></>;
}

export default App;
