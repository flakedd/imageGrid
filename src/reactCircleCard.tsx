import * as React from "react";
import DataView = powerbi.DataView;
import DataViewCategorical = powerbi.DataViewCategorical;
import HalfCircle from "./circularProgress";
import convertImageABase64 from "./convertImageABase64";

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
                    const estilo= String(categoryValue)
                    const image = String(values[0].values[rowIndex * numColumns + colIndex])
                    const convertImage = String(convertImageABase64(image))
                    var salesP = Number(values[1]?.values[rowIndex * numColumns + colIndex]);
                    var salesM = Number(values[2]?.values[rowIndex * numColumns + colIndex]).toFixed(0);
                    var invP = Number(values[3]?.values[rowIndex * numColumns + colIndex]).toFixed(0);
                    var invM = Number(values[4]?.values[rowIndex * numColumns + colIndex]).toFixed(0);
                    var marginValue = values[5]?.values[rowIndex * numColumns + colIndex];
                    var coverageValue = values[6]?.values[rowIndex * numColumns + colIndex];

                    return (
                        <div key={colIndex} style={{ margin: "10px", flexBasis: "50%", display: "flex", flexDirection: "column" }}>
                            <div style={{ padding:"10px", border:"0.5px solid black", borderRadius: "10px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)"}}>
                            <p>{`${estilo}`}</p>
                            <img
                                src={convertImage}
                                style={{ width: "130px", height: "150px" }}
                             />
                            
                             <div style={{ display: "flex" }}>
                                {salesP !== undefined ? (
                                    <div style={{ flexBasis: "50%" }}>
                                       <p>{`Ventas Pz ${salesP}`} </p>
                                       
                                    </div>
                                ) : (
                                    <div style={{ flexBasis: "50%" }}>N/A</div>
                                )}
                                {salesM !== undefined ? (
                                    <div style={{ flexBasis: "50%" }}>
                                       <p>{`Ventas $ ${salesM}`} </p>
                                    </div>
                                ) : (
                                    <div style={{ flexBasis: "50%" }}>N/A</div>
                                )}
                            </div>

                            <div style={{ display: "flex" }}>
                                {invP !== undefined ? (
                                    <div style={{ flexBasis: "50%" }}>
                                       <p>{`Inv Pz ${invP}`} </p>
                                       
                                    </div>
                                ) : (
                                    <div style={{ flexBasis: "50%" }}>N/A</div>
                                )}
                                {invM !== undefined ? (
                                    <div style={{ flexBasis: "50%" }}>
                                       <p>{`Inv $ ${invM}`} </p>
                                    </div>
                                ) : (
                                    <div style={{ flexBasis: "50%" }}>N/A</div>
                                )}
                            </div>

                            <div style={{ display: "flex" }}>
                                {marginValue !== undefined ? (
                                    <div style={{ flexBasis: "50%" }}>
                                        <HalfCircle
                                            percentage={(+marginValue * 100).toFixed(0)}
                                            color="44BB15"
                                            title="MG"
                                        />
                                    </div>
                                ) : (
                                    <div style={{ flexBasis: "50%" }}>N/A</div>
                                )}
                                {coverageValue !== undefined ? (
                                    <div style={{ flexBasis: "50%" }}>
                                        <HalfCircle
                                            percentage={(+coverageValue * 100).toFixed(0)}
                                            color="44BB15"
                                            title="COB"
                                        />
                                    </div>
                                ) : (
                                    <div style={{ flexBasis: "50%" }}>N/A</div>
                                )}
                            </div>
                            </div>
                            

                           
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