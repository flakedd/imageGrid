import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import * as React from "react";
import * as ReactDOM from "react-dom";
import boardSales from "./boardSales";
import "./../style/visual.less";
import { IFilter } from "powerbi-models";

export class Visual implements IVisual {
    private target: HTMLElement;
    private reactRoot: React.ReactElement;
    private dataView: powerbi.DataView | null = null;  
    private jsonFilters: IFilter[] | any[];

    constructor(options: VisualConstructorOptions) {
        
        
        this.reactRoot = React.createElement(boardSales, { dataView: this.dataView}); 
        this.target = options.element;
        
        ReactDOM.render(this.reactRoot, this.target);
    }

    public update(options: VisualUpdateOptions) {
        
        const newDataView: powerbi.DataView | undefined = options.dataViews && options.dataViews[0];
        
       const datos = options.dataViews
       console.log('estos son mis datos',datos)
       
        if (!newDataView) {
            return;
        }

        if (this.dataView !== newDataView) {
            this.dataView = newDataView;
            this.reactRoot = React.createElement(boardSales, { dataView: this.dataView });
            ReactDOM.render(this.reactRoot, this.target);
        }
    
    }
}
