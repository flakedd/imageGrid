import powerbi from "powerbi-visuals-api";

// d3
import { Selection as d3Selection, select as d3Select } from "d3-selection";
type Selection<T1, T2 = T1> = d3Selection<any, T1, any, T2>;

import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import { FilterType, IIdentityFilterTarget, IIdentityFilter } from "powerbi-models";
import FilterAction = powerbi.FilterAction;
import IFilter = powerbi.IFilter;
import { BoardDataPoint } from "./interfaces";


export interface BoardBehaviorOptions {
    visualHost: IVisualHost;
    dataPoints: BoardDataPoint[];
    isHighContrastMode: boolean;
    jsonFilters: IFilter[] | undefined | any;
}

export class BoardWebBehavior {
    public dataPoints: BoardDataPoint[];
    private visualHost: IVisualHost;
    private jsonFilters: IFilter[] | undefined | any;
    private saveSelection(): void {
        const filterTargets: IIdentityFilterTarget = this.dataPoints
            .filter(d => d.selected)
            .map(d => d.id);

        // Selection manager stores selection ids in the order in which they are selected by the user.
        // This is needed because data should be sent to the host in the same order that the user selected.
        // If the order is not maintained, the host will show incorrect data in the visual.

        const target = (this.jsonFilters?.length && this.jsonFilters[0]?.target) ? this.jsonFilters[0].target : [];
        const sortedTargers = BoardWebBehavior.sortByJSONFilterTarget(filterTargets, target);

        const filter: IIdentityFilter = {
            $schema: "https://powerbi.com/product/schema#identity",
            filterType: FilterType.Identity,
            operator: "In",
            target: sortedTargers
        }

        this.visualHost.applyJsonFilter(filter, "general", "filter", FilterAction.merge);
    }
    public static sortByJSONFilterTarget(selected, jsonFilters: number[]): number[] {
        const reversed = jsonFilters.reverse();

        function compareIndexes(a, b: number) {
            return reversed.indexOf(b) - reversed.indexOf(a);
        }
        return selected.toSorted(compareIndexes);
    }
}