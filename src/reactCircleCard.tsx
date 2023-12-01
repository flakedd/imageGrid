import * as React from "react";
import DataView = powerbi.DataView;
import DataViewCategorical = powerbi.DataViewCategorical;

interface State {
    base64Image: string | null;
    loading: boolean;
    error: Error | null;
}

class ReactCircleCard extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
    }

    render() {

        return (
            <div>
                <p>Aqui deberia ir una imagen </p>
                <img src="https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_42319.jpg"/>
            </div>
        );
    }
}

export default ReactCircleCard;
