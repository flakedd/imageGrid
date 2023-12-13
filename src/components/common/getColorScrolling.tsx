import colors from "./colors";

export const getColorScrolling = (marginValue: number): string => {
    if (marginValue < .50) {
      return colors.rojo;
    } else if (marginValue >= .50 && marginValue < .90) {
      return colors.amarillo;
    } else if (marginValue > .90) {
      return colors.verde;
    } else {
      return colors.blanco;
    }
  };