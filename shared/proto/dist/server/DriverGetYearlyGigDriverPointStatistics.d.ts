export interface DriverGetYearlyGigDriverPointStatisticsParams {
}
export declare namespace DriverGetYearlyGigDriverPointStatisticsParams {
    function fromObject(obj: any): DriverGetYearlyGigDriverPointStatisticsParams;
}
export interface DriverGetYearlyGigDriverPointStatisticsResult {
    year: number;
    feeDeposit: number;
    promoDeposit: number;
    luckyDeposit: number;
    luckyTaxFreeDeposit: number;
    withdrawal: number;
}
export declare namespace DriverGetYearlyGigDriverPointStatisticsResult {
    function fromObject(obj: any): DriverGetYearlyGigDriverPointStatisticsResult;
}
