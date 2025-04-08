import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface prop {
  onClick: () => void;
}

const Like = ({ onClick }: prop) => {
  const [status, setStatus] = useState(false);

  const handleClicked = () => {
    setStatus(prev => !prev);
    onClick();
  };

  return (
    <>
      {status ? (
        <FaHeart size={"40"} color="red" onClick={handleClicked} />
      ) : (
        <CiHeart size={"40"} onClick={handleClicked} />
      )}
    </>
  );
};

export default Like;
