import { useState } from "react";


function App() {
  // const [firstName, setfirstName] = useState('')
  // const [lastName, setlastName] = useState('')
  const [person, setPerson] = useState({
    firstName: '',
    lastName: ''
  })
  const [isLoading, setLoading] = useState(false)
  

  return (
    <div>
      
    </div>
  );
}

export default App;
