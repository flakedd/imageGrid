import * as React from "react";

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
  });
};

const convertImageABase64 = async (imageUrl: string): Promise<string | null> => {
 
    console.log('esto mando', imageUrl)
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const base64 = await blobToBase64(blob);
    (console.log('yaaaa',base64))
    return base64;

 
};

export default convertImageABase64;