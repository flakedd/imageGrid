import * as React from "react";
import './../../css/index.css'

interface InfoSegmentProps {
    title: string;
    pieces: number;
    cash: string;
}

const InfoSegment: React.FC<InfoSegmentProps> = ({ title, pieces, cash }) => {
    return (
    <div className="InfoSegment" >
        <div className="subtitle">{title}</div>
        <div className="pieces">
            {pieces !== undefined ? (
                <p>{`${pieces} Pz`} </p>
            ) : (
                <p>N/A</p>
            )}
        </div>
        <div className="cash">
            {cash !== undefined ? (
                <p>{`${cash} $`} </p>
            ) : (
                <p>N/A</p>
            )}
        </div>
    </div>
    );
};

export default InfoSegment;