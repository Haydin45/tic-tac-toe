import React, { useContext } from "react";
import { BoardContext } from "../../context/board/BoardContext";

const Information = () => {
  const { turn, result, handleRestart } = useContext(BoardContext);

  return (
    <>
      <h1 className={`result ${result && `win`}`}>
        {result ? result : `${!turn ? `X` : `O`} oyuncusunun sırası`}
      </h1>
      {result && (
        <input
          className="btn"
          type="button"
          onClick={handleRestart}
          value="Yeniden Başlat"
        />
      )}
    </>
  );
};

export default Information;
