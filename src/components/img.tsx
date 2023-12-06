import * as React from "react";
import '../../css/index.css';

interface imgProps {
    colIndex: number;
  children: React.ReactNode;
  estilo:string;
}

const img: React.FC<imgProps> = ({ colIndex, children,estilo }) => {
  return (
    <div key={colIndex} className="Card">
      <div className="title">{`${estilo}`}</div>
      {children}
    </div>
  );
};

export default img;