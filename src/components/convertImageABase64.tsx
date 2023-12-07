import * as React from "react";

const convertImageABase64 = async (image: string): Promise<string> => {
  
  try {
    const response = await fetch(image);

    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error al convertir la imagen a base64:", error);
    return ""; // Retornar una cadena vacía en caso de error
  }
};

export default convertImageABase64;