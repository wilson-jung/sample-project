import { DriverActivityStatisticsEntryDTO } from '../common';
import { Int32Value } from '../wrappers';
export interface DriverListDriverActivityStatisticsEntriesParams {
    periodType?: DriverActivityStatisticsEntryDTO.PeriodType;
    limit?: Int32Value;
}
export declare namespace DriverListDriverActivityStatisticsEntriesParams {
    function fromObject(obj: any): DriverListDriverActivityStatisticsEntriesParams;
}
export interface DriverListDriverActivityStatisticsEntriesResult {
    entries: DriverActivityStatisticsEntryDTO[];
    comments: string[];
}
export declare namespace DriverListDriverActivityStatisticsEntriesResult {
    function fromObject(obj: any): DriverListDriverActivityStatisticsEntriesResult;
}
