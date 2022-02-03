export interface DriverListTipStatisticsEntriesParams {
}
export declare namespace DriverListTipStatisticsEntriesParams {
    function fromObject(obj: any): DriverListTipStatisticsEntriesParams;
}
export interface DriverListTipStatisticsEntriesResult {
    entries: DriverListTipStatisticsEntriesResult.Entry[];
}
export declare namespace DriverListTipStatisticsEntriesResult {
    function fromObject(obj: any): DriverListTipStatisticsEntriesResult;
    interface Entry {
        year: number;
        month: number;
        amountKRW: number;
    }
    namespace Entry {
        function fromObject(obj: any): Entry;
    }
}
