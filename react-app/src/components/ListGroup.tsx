import { MouseEvent } from "react";


function ListGroup() {
  let iteams = ["New York", "san Francisco", "Tokyo", "London", "Paris"];
  // iteams = [];

// EVENT HANDLER
  const handelClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {iteams.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {iteams.map((iteam, index) => (
          <li
            className="list-group-iteam"
            key={iteam}
            onClick={handelClick}
          >
            {iteam}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
