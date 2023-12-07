import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import * as React from "react";
import * as ReactDOM from "react-dom";
import boardSales from "./boardSales";
import "./../style/visual.less";

export class Visual implements IVisual {
    private target: HTMLElement;
    private reactRoot: React.ReactElement;  

    constructor(options: VisualConstructorOptions) {
        this.reactRoot = React.createElement(boardSales, { dataView: null }); 
        this.target = options.element;

        ReactDOM.render(this.reactRoot, this.target);
    }

    public update(options: VisualUpdateOptions) {
        const dataView: powerbi.DataView = options.dataViews[0];

        if (!dataView) {
            return;
        }

        this.reactRoot = React.createElement(boardSales, { dataView });
        ReactDOM.render(this.reactRoot, this.target);
    }
}
