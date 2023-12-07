import * as React from "react";
import '../../css/index.css';

interface BoardCardProps {
  colIndex: number;
  children: React.ReactNode;
  estilo: string;
}

const BoardCard: React.FC<BoardCardProps> = ({ colIndex, children,estilo }) => {
  return (
    <div key={colIndex} className="Card">
      <div className="title">{`${estilo}`}</div>
      {children}
    </div>
  );
};

export default BoardCard;