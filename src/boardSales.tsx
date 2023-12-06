import * as React from "react";
import DataView = powerbi.DataView;
import DataViewCategorical = powerbi.DataViewCategorical;
import convertImageABase64 from "./components/convertImageABase64";
import BoardBody from "./components/boardBody";
import BoardCard from "./components/BoardCard";
import InfoSegment from "./components/InfoSegment";
import Graphics from "./components/Graphics";
import ImageStyle from "./components/img";
interface Props {
    dataView: DataView;
}

interface State {
    loading: boolean;
    error: Error | null;
}

class boardSales extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
        };
    }

    renderMatrix() {
        const { dataView } = this.props;
        const categorical: DataViewCategorical = dataView && dataView.categorical;

        if (!categorical || !categorical.categories || !categorical.values) {
            return null;
        }

        const { categories, values } = categorical;
        const numRows = categories[0].values.length;
        const numColumns = 5;
        const totalRows = Math.ceil(numRows / numColumns);

        const renderRow = (rowIndex: number) => (
            <BoardBody rowIndex={rowIndex}>
                {categories[0].values.slice(rowIndex * numColumns, (rowIndex + 1) * numColumns).map((categoryValue, colIndex) => {

                    //varibles que vienen de power bi
                    const estilo= String(categoryValue)
                    const image = String(values[0].values[rowIndex * numColumns + colIndex])
                    //const convertImage = String(convertImageABase64(image))
                    var salesP = Number(values[1]?.values[rowIndex * numColumns + colIndex]);
                    var salesM = Number(values[2]?.values[rowIndex * numColumns + colIndex]).toFixed(0);
                    var invP = Number(values[3]?.values[rowIndex * numColumns + colIndex]);
                    var invM = Number(values[4]?.values[rowIndex * numColumns + colIndex]).toFixed(0);
                    var marginValue = Number(values[5]?.values[rowIndex * numColumns + colIndex]);
                    var coverageValue = Number(values[6]?.values[rowIndex * numColumns + colIndex]);
                    var scrolling = Number(values[7]?.values[rowIndex * numColumns + colIndex]);

                    return (
                        <BoardCard colIndex={colIndex} estilo={estilo}>
                            
                            <ImageStyle image={image}></ImageStyle>
                            
                            <InfoSegment title={"Ventas"} pieces={salesP} cash={salesM}></InfoSegment>

                            <InfoSegment title={"Inventario"} pieces={invP} cash={invM}></InfoSegment>

                            <Graphics marginValue={marginValue} coverageValue={coverageValue } scrolling={scrolling}></Graphics>
                            </BoardCard>
                    );
                })}
            </BoardBody>
        );
        return (
            <div>
                {[...Array(totalRows)].map((_, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {renderRow(rowIndex)}
                    </React.Fragment>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderMatrix()}
            </div>
        );
    }
}

export default boardSales;