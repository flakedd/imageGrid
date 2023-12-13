import * as React from "react";
import './../../css/index.css'

interface InfoSegmentProps {
    title: string;
    pieces: number;
    cash: number;
}

const InfoSegment: React.FC<InfoSegmentProps> = ({ title, pieces, cash }) => {
    const opciones: any = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
    const cashMx = cash.toLocaleString('es-MX',opciones);
    return (
    <div className="InfoSegment" >
        <div className="subtitle">{title}</div>
        <div className="pieces">
            {pieces !== undefined ? (
                <p>{`${pieces.toLocaleString('es-MX', opciones)} Pz`} </p>
            ) : (
                <p>N/A</p>
            )}
        </div>
        <div className="cash">
            {cash !== undefined ? (
                <p>{`$ ${cashMx}`} </p>
            ) : (
                <p>N/A</p>
            )}
        </div>
    </div>
    );
};

export default InfoSegment;