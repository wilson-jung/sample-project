import { ReviewStatisticsEntryDTO, DriverReviewStatistics202107DTO } from '../common';
export interface DriverGetMonthlyRideReviewStatisticsEntryParams {
    /**
     *  연도와 월
     */
    year: number;
    month: number;
}
export declare namespace DriverGetMonthlyRideReviewStatisticsEntryParams {
    function fromObject(obj: any): DriverGetMonthlyRideReviewStatisticsEntryParams;
}
export interface DriverGetMonthlyRideReviewStatisticsEntryResult {
    entry?: ReviewStatisticsEntryDTO;
    statistics202107?: DriverReviewStatistics202107DTO;
    hasPrevMonth: boolean;
    hasNextMonth: boolean;
}
export declare namespace DriverGetMonthlyRideReviewStatisticsEntryResult {
    function fromObject(obj: any): DriverGetMonthlyRideReviewStatisticsEntryResult;
}
