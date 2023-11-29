import * as React from "react";

interface State {
    base64Image: string | null;
    loading: boolean;
    error: Error | null;
}

class ReactCircleCard extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
    }
    componentDidMount() {

    }

    render() {

        return (
            <div className="circleCard">
                Aqui debe de ir la imagen
                 <img src="https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_42377.jpg" alt="Descripción de la imagen" />
            </div>
        );
    }
}

export default ReactCircleCard;
