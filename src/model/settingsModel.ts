import powerbi from "powerbi-visuals-api";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import ILocalizationManager = powerbi.extensibility.ILocalizationManager;

import { Cards } from "powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents";
import Model = formattingSettings.Model;

import IEnumMember = powerbi.IEnumMember;

const orientationOptions : IEnumMember[] = [
    { displayName: "Visual_Orientation_Horizontal", value: "Horizontal" },
    { displayName: "Visual_Orientation_Vertical", value: "Vertical" },
]

class ColumnsSettings {
    public static readonly DefaultValue: number = 3;
    public static readonly MinValue: number = 0;
}

// export class GeneralCardSettings extends Cards {

//     orientation = new formattingSettings.ItemDropdown({
//         name: "orientation",
//         displayNameKey: "Visual_Orientation",
//         items: orientationOptions,
//         value: orientationOptions[1]
//     });

//     columns = new formattingSettings.NumUpDown({
//         name: "columns",
//         displayNameKey: "Visual_Columns",
//         value: ColumnsSettings.DefaultValue,
//         options: {
//             minValue: {
//                 type: powerbi.visuals.ValidatorType.Min,
//                 value: ColumnsSettings.MinValue,
//             }
//         }
//     });

// }