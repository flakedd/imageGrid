import * as React from "react";
import '../../css/index.css';
import convertImageABase64 from "./convertImageABase64";

interface imgProps {
    image: string;
}

const ImageStyle: React.FC<imgProps> = ({ image }) => {
    const [convertedImage, setConvertedImage] = React.useState<string | null>(null);
   
    React.useEffect(() => {
        const fetchAndConvertImage = async () => {
                    const result = await convertImageABase64(image);
                    setConvertedImage(result);
        };
        fetchAndConvertImage();
    }, [image]);

    return (
        <div className="contentImage">
            <img src={image} className="img" />
        </div>
    );
};

export default ImageStyle;
