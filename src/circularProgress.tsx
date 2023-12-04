import * as React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HalfCircle = ({ percentage, color }) => {
  const strokeWidth = 10; // Ancho del trazo

  return (
    <div style={{ width: "50px", height: "25px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
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
