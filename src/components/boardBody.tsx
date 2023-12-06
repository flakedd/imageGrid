import * as React from "react";
import '../../css/index.css';
interface BoardBodyProps {
  rowIndex: number;
  children: React.ReactNode;
}

const BoardBody: React.FC<BoardBodyProps> = ({ rowIndex, children }) => {
  return (
    <div key={rowIndex} className="body">
      {children}
    </div>
  );
};

export default BoardBody;