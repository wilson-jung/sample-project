import { ReviewStatisticsEntryDTO } from '../common';
export interface DriverGetMonthlyTripReviewStatisticsEntryParams {
    /**
     *  연도와 월
     */
    year: number;
    month: number;
}
export declare namespace DriverGetMonthlyTripReviewStatisticsEntryParams {
    function fromObject(obj: any): DriverGetMonthlyTripReviewStatisticsEntryParams;
}
export interface DriverGetMonthlyTripReviewStatisticsEntryResult {
    entry?: ReviewStatisticsEntryDTO;
    hasPrevMonth: boolean;
    hasNextMonth: boolean;
}
export declare namespace DriverGetMonthlyTripReviewStatisticsEntryResult {
    function fromObject(obj: any): DriverGetMonthlyTripReviewStatisticsEntryResult;
}
