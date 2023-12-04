import * as React from "react";
import DataView = powerbi.DataView;
import DataViewCategorical = powerbi.DataViewCategorical;
import HalfCircle from "./circularProgress";

interface Props {
    dataView: DataView;
}

interface State {
    loading: boolean;
    error: Error | null;
}

class ReactCircleCard extends React.Component<Props, State> {
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
            <div key={rowIndex} style={{ display: "flex", flexDirection: "row" }}>
                {categories[0].values.slice(rowIndex * numColumns, (rowIndex + 1) * numColumns).map((categoryValue, colIndex) => {
                    const marginValue = values[1]?.values[rowIndex * numColumns + colIndex];
                    const mgValues = values.find((v) => v.source.roles.mg);
                    console.log("margen:",mgValues)

        console.log("Margen:", marginValue);
                    return (
                        <div key={colIndex} style={{ margin: "25px" }}>
                            <p>Estilo</p>
                            {String(categoryValue)}
                            {values[0].values[rowIndex * numColumns + colIndex] && (
                                <img
                                    src={String(values[0].values[rowIndex * numColumns + colIndex])} 
                                    style={{ width: "100px", height: "150px" }}
                                />
                            )}
                            <p>Margen</p>
                            {marginValue !== undefined ? (
                                <div>
                                    <HalfCircle
                                        percentage={(+marginValue * 100).toFixed(0)}
                                        color="44BB15"
                                    />
                                </div>
                            ) : (
                                <div>No hay valor de margen</div>
                            )}
                        </div>
                    );
                })}
            </div>
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

export default ReactCircleCard;
