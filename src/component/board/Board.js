import React, { useContext } from "react";
import { BoardContext } from "../../context/board/BoardContext";
import Box from "../box/Box";

const Board = () => {
  const { boxList } = useContext(BoardContext);

  return (
    <div className="game-board">
      {boxList.map((box, index) => {
        return <Box key={index} box={box} />;
      })}
    </div>
  );
};

export default Board;
