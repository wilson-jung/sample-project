import { DriverActivityStatisticsEntryDTO } from '../common';
export interface DriverGetCurrentDriverActivityStatisticsEntryParams {
    periodType?: DriverActivityStatisticsEntryDTO.PeriodType;
}
export declare namespace DriverGetCurrentDriverActivityStatisticsEntryParams {
    function fromObject(obj: any): DriverGetCurrentDriverActivityStatisticsEntryParams;
}
export interface DriverGetCurrentDriverActivityStatisticsEntryResult {
    entry?: DriverActivityStatisticsEntryDTO;
}
export declare namespace DriverGetCurrentDriverActivityStatisticsEntryResult {
    function fromObject(obj: any): DriverGetCurrentDriverActivityStatisticsEntryResult;
}
