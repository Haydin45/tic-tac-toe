import React, { createContext, useEffect, useState } from "react";

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [boxList, setBoxList] = useState([
    { selected: false, player: 0 },
    { selected: false, player: 0 },
    { selected: false, player: 0 },
    { selected: false, player: 0 },
    { selected: false, player: 0 },
    { selected: false, player: 0 },
    { selected: false, player: 0 },
    { selected: false, player: 0 },
    { selected: false, player: 0 },
  ]);

  const [turn, setTurn] = useState(false);
  const [result, setResult] = useState("");

  const handleClick = (index) => {
    setBoxList(
      boxList.map((box, i) => {
        return i === index
          ? { ...box, selected: true, player: turn ? 2 : 1 }
          : box;
      })
    );

    setTurn(!turn);
  };

  useEffect(() => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const isPlayerWon = (playerNo) =>
      winConditions.some((condition) => {
        return condition.every((index) => {
          return boxList[index].selected && boxList[index].player === playerNo;
        });
      });

    if (isPlayerWon(1)) {
      setResult("X Kazandı!");
    } else if (isPlayerWon(2)) {
      setResult("O Kazandı!");
    } else if (boxList.every((box) => box.selected)) {
      setResult("Oyun Berabere.");
    }
  }, [boxList]);

  const handleRestart = () => {
    setBoxList(
      boxList.map((box) => {
        return { ...box, selected: false, player: 0 };
      })
    );

    setTurn(false);
    setResult("");
  };

  return (
    <BoardContext.Provider
      value={{
        boxList,
        setBoxList,
        turn,
        setTurn,
        result,
        setResult,
        handleClick,
        handleRestart,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
