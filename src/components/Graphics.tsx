import * as React from "react";
import './../../css/index.css'
import HalfCircle from "./../components/circularProgress";
interface GraphicsProps {
    marginValue: number;
    coverageValue: number;
}

const Graphics: React.FC<GraphicsProps> = ({ marginValue, coverageValue }) => {
    return (
    <div className="graphics" >
        <div className="graph1">
            {marginValue !== undefined ? (
               <HalfCircle
               percentage={(+marginValue * 100).toFixed(0)}
               color="44BB15"
               title="MG"
           />
            ) : (
                <p>N/A</p>
            )}
        </div>
        <div className="grap2">
            {coverageValue !== undefined ? (
               <HalfCircle
               percentage={(+coverageValue * 100).toFixed(0)}
               color="44BB15"
               title="CB"
           />
            ) : (
                <p>N/A</p>
            )}
        </div>
    </div>
    );
};

export default Graphics;