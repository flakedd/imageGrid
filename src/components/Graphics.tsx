import * as React from "react";
import './../../css/index.css'
import HalfCircle from "./../components/circularProgress";
import { getColorMargin } from "./common/getColorMargin";
import { getColorScrolling } from "./common/getColorScrolling";

interface GraphicsProps {
    marginValue: number;
    coverageValue: number;
    scrolling: number
}

const Graphics: React.FC<GraphicsProps> = ({ marginValue, coverageValue,scrolling }) => {
    const colorMargin = getColorMargin(marginValue);
    const colorScroling = getColorMargin(scrolling);
    return ( 
    <div className="graphics" >
        <div className="graph">
            {marginValue !== undefined ? (
               <HalfCircle
               percentage={(+marginValue * 100).toFixed(0)}
               color={colorMargin}
               title="MG"
           />
            ) : (
                <p>N/A</p>
            )}
        </div>
        <div className="graph">
            {scrolling !== undefined ? (
               <HalfCircle
               percentage={(+scrolling * 100).toFixed(0)}
               color={colorScroling}
               title="DE"
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
    </div>
    );
};

export default Graphics;