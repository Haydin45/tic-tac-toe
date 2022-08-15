import React, { useContext } from "react";
import { BoardContext } from "../../context/board/BoardContext";

const Box = ({ box }) => {
  const { boxList, result, handleClick } = useContext(BoardContext);

  return (
    <div
      className="box"
      onClick={() => {
        !box.selected && !result && handleClick(boxList.indexOf(box));
      }}
    >
      {box.selected && (
        <div className="box-2">
          <i
            className={`icon fa-solid ${box.player === 1 ? `fa-x` : `fa-o`}`}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Box;
