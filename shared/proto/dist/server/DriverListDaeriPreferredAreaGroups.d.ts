import { DaeriMissionPreferences } from '../common';
export interface DriverListDaeriPreferredAreaGroupsParams {
}
export declare namespace DriverListDaeriPreferredAreaGroupsParams {
    function fromObject(obj: any): DriverListDaeriPreferredAreaGroupsParams;
}
export interface DriverListDaeriPreferredAreaGroupsResult {
    areaGroups: DriverListDaeriPreferredAreaGroupsResult.DaeriPreferredAreaGroup[];
}
export declare namespace DriverListDaeriPreferredAreaGroupsResult {
    function fromObject(obj: any): DriverListDaeriPreferredAreaGroupsResult;
    interface DaeriPreferredAreaGroup {
        siDo: string;
        areas: DaeriMissionPreferences.PreferredArea[];
    }
    namespace DaeriPreferredAreaGroup {
        function fromObject(obj: any): DaeriPreferredAreaGroup;
    }
}
