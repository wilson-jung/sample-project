import { StringValue } from '../wrappers';
import { DriverPraiseDTO } from '../common';
export interface DriverListDriverPraisesParams {
    nextToken?: StringValue;
}
export declare namespace DriverListDriverPraisesParams {
    function fromObject(obj: any): DriverListDriverPraisesParams;
}
export interface DriverListDriverPraisesResult {
    praisesByPeriod: DriverListDriverPraisesResult.DriverPraisesByPeriod[];
    nextToken?: StringValue;
}
export declare namespace DriverListDriverPraisesResult {
    function fromObject(obj: any): DriverListDriverPraisesResult;
    interface DriverPraisesByPeriod {
        /**
         *  연도와 월
         */
        year: number;
        month: number;
        /**
         *  해당 월의 전체 감사메시지 개수
         */
        count: number;
        /**
         *  현재 page에 내려가는 칭찬 메시지
         */
        praises: DriverPraiseDTO[];
    }
    namespace DriverPraisesByPeriod {
        function fromObject(obj: any): DriverPraisesByPeriod;
    }
}
