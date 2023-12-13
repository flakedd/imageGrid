import * as React from "react";
import DataView = powerbi.DataView;
import DataViewCategorical = powerbi.DataViewCategorical;
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
        
        const categorical: DataViewCategorical | undefined = dataView && dataView.categorical;

        if (!categorical || !categorical.categories || !categorical.values) {
            return null;
        }

        const { categories, values } = categorical;

        return (
            <div className="grid-container">
                {categories[0].values.map((categoryValue, index) => {
                    const colIndex = index % 20;

                    // Variables que vienen de Power BI
                    const estilo = String(categoryValue);
                    const image = String(values[0].values[index]);
                    const salesP = Number(values[1]?.values[index]);
                    const salesM = Number(values[2]?.values[index]);
                    const invP = Number(values[3]?.values[index]);
                    const invM = Number(values[4]?.values[index]);
                    const marginValue = Number(values[5]?.values[index]);
                    const coverageValue = Number(values[6]?.values[index]);
                    const scrolling = Number(values[7]?.values[index]);

                    return (
                        <div key={index} className={`grid-item-${colIndex}`}>
                            <BoardCard colIndex={colIndex} estilo={estilo}>
                                <ImageStyle image={image}></ImageStyle>
                                <InfoSegment title={"Ventas"} pieces={salesP} cash={salesM}></InfoSegment>
                                <InfoSegment title={"Inventario"} pieces={invP} cash={invM}></InfoSegment>
                                <Graphics marginValue={marginValue} coverageValue={coverageValue} scrolling={scrolling}></Graphics>
                            </BoardCard>
                        </div>
                    );
                })}
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