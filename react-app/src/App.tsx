import axios from "axios";
import { useEffect, useState } from "react";
import { set } from "zod/v4";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("http://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  },[]);

  return <>
  <ul>
    {users.map(user=> <li key={user.id}>{user.name}</li>)}
    </ul>
    </>;
}

export default App;
