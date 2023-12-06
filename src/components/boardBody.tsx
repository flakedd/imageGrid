import * as React from "react";

interface BoardBodyProps {
  rowIndex: number;
  children: React.ReactNode;
}

const BoardBody: React.FC<BoardBodyProps> = ({ rowIndex, children }) => {
  return (
    <div key={rowIndex} style={{ display: "flex", flexDirection: "row" }}>
      {children}
    </div>
  );
};

export default BoardBody;