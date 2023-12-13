import colors from "./colors";

export const getColorMargin = (marginValue: number): string => {
    if (marginValue < .25) {
      return colors.rojo;
    } else if (marginValue >= .25 && marginValue < .35) {
      return colors.amarillo;
    } else if (marginValue > .35) {
      return colors.verde;
    } else {
      return colors.blanco;
    }
  };