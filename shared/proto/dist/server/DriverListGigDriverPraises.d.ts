import { DriverMissionDTO } from '../mission';
import { StringValue } from '../wrappers';
import { DriverPraiseDTO } from '../common';
export interface DriverListGigDriverPraisesParams {
    missionType?: DriverMissionDTO.MissionType;
    nextToken?: StringValue;
}
export declare namespace DriverListGigDriverPraisesParams {
    function fromObject(obj: any): DriverListGigDriverPraisesParams;
}
export interface DriverListGigDriverPraisesResult {
    praisesByPeriod: DriverListGigDriverPraisesResult.DriverPraisesByPeriod[];
    nextToken?: StringValue;
}
export declare namespace DriverListGigDriverPraisesResult {
    function fromObject(obj: any): DriverListGigDriverPraisesResult;
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
