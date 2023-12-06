import * as React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface HalfCircleProps {
    percentage: number; // Ajusta el tipo según tus necesidades
    color: string;
    title: string;
  }

const HalfCircle = ({ percentage, color, title }) => {
  const strokeWidth = 10; // Ancho del trazo

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${title} ${percentage}%`} 
        strokeWidth={strokeWidth}
        styles={{
          path: { stroke: color },
          text: { fill: color },
        }}
      />
    </div>
  );
};

export default HalfCircle;
