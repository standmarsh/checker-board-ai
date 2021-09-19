import React from "react";
import Cell from "./Cell";

const Row = ({ rowData, yPosition }) => {
  return (
    <div className="game__row">
      {rowData.map((item, index) => {
        return (
          <Cell
            data={item}
            key={index}
            yPosition={yPosition}
            xPosition={index}
          />
        );
      })}
    </div>
  );
};

const Board = ({ boardData }) => {
  if (boardData.length === 0) {
    return <div>Board not initialized</div>;
  }

  return (
    <>
      <h2>Game Board Component</h2>
      <div className="game__container">
        {boardData.map((x, index) => {
          return <Row rowData={x} key={index} yPosition={index} />;
        })}
      </div>
    </>
  );
};

export default Board;
