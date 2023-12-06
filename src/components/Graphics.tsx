import * as React from "react";
import './../../css/index.css'
import HalfCircle from "./../components/circularProgress";
interface GraphicsProps {
    marginValue: number;
    coverageValue: number;
    scrolling: Number
}

const Graphics: React.FC<GraphicsProps> = ({ marginValue, coverageValue,scrolling }) => {
    return (
    <div className="graphics" >
        <div className="graph">
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
        <div className="graph">
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
        <div className="graph">
            {scrolling !== undefined ? (
               <HalfCircle
               percentage={(+scrolling * 100).toFixed(0)}
               color="44BB15"
               title="DE"
           />
            ) : (
                <p>N/A</p>
            )}
        </div>
    </div>
    );
};

export default Graphics;