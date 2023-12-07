import * as React from "react";
import '../../css/index.css';
import convertImageABase64 from "./convertImageABase64";

interface imgProps {
    image: string;
}

const ImageStyle: React.FC<imgProps> = ({ image }) => {
    const [convertedImage, setConvertedImage] = React.useState<string | null>(null);
    console.log("aqui deberia llegar la imagen",image)
    React.useEffect(() => {
        const fetchAndConvertImage = async () => {
            try {
                if (image) {
                    
                    const result = await convertImageABase64(image);
                    setConvertedImage(result);
                    console.log('aqui debe regresar convertido', result)
                }
            } catch (error) {
                console.error("Error al obtener la imagen:", error);
            }
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
