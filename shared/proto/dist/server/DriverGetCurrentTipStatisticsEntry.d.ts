export interface DriverGetCurrentTipStatisticsEntryParams {
}
export declare namespace DriverGetCurrentTipStatisticsEntryParams {
    function fromObject(obj: any): DriverGetCurrentTipStatisticsEntryParams;
}
export interface DriverGetCurrentTipStatisticsEntryResult {
    /**
     *  null이 내려올 수 있다.
     */
    entry?: DriverGetCurrentTipStatisticsEntryResult.Entry;
}
export declare namespace DriverGetCurrentTipStatisticsEntryResult {
    function fromObject(obj: any): DriverGetCurrentTipStatisticsEntryResult;
    interface Entry {
        /**
         *  월 단위: yyyy-MM 형식
         *  누적: 빈 문자열
         */
        period: string;
        amountKRW: number;
    }
    namespace Entry {
        function fromObject(obj: any): Entry;
    }
}
