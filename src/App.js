import "./App.css";
import React from "react";
import Board from "./component/board/Board";
import Information from "./component/information/Information";
import BoardProvider from "./context/board/BoardContext";

function App() {
  return (
    <BoardProvider>
      <div className="App">
        <div className="container">
          <Board />
        </div>

        <Information />
      </div>
    </BoardProvider>
  );
}

export default App;
