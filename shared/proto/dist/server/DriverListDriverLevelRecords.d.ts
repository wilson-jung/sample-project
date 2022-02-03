import { DriverLevelDescription } from '../common';
export interface DriverListDriverLevelRecordsParams {
}
export declare namespace DriverListDriverLevelRecordsParams {
    function fromObject(obj: any): DriverListDriverLevelRecordsParams;
}
export interface DriverListDriverLevelRecordsResult {
    levelRecords: DriverListDriverLevelRecordsResult.DriverLevelRecord[];
}
export declare namespace DriverListDriverLevelRecordsResult {
    function fromObject(obj: any): DriverListDriverLevelRecordsResult;
    interface DriverLevelRecord {
        /**
         *  연도와 월
         */
        year: number;
        month: number;
        /**
         *  해당 월의 드라이버 레벨
         */
        level?: DriverLevelDescription;
    }
    namespace DriverLevelRecord {
        function fromObject(obj: any): DriverLevelRecord;
    }
}
