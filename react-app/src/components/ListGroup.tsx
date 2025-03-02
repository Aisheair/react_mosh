import { useState } from "react";


function ListGroup() {
  let iteams = ["New York", "san Francisco", "Tokyo", "London", "Paris"];

  let [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <>
      <h1>List</h1>
      {iteams.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {iteams.map((iteam, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-iteam'}
            key={iteam}
            onClick={() => setSelectedIndex(index)}
          >
            {iteam}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
