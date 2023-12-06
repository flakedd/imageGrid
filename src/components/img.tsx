import * as React from "react";
import '../../css/index.css';

interface imgProps {
    image: string;
}

const ImageStyle: React.FC<imgProps> = ({ image }) => {
  return (
    <div className="contentImage">
        <img src={image} className="img"/>
    </div>
    
  );
};

export default ImageStyle;