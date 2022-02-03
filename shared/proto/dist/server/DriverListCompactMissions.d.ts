import { Int32Value, StringValue } from '../wrappers';
import { DriverCompactMissionDTO } from '../mission';
export interface DriverListCompactMissionsParams {
    periodType?: DriverListCompactMissionsParams.PeriodType;
    /**
     *  PeriodType에 해당하는 기간을 포멧에 맞게 넣어준다.
     *  ALL: 빈 값
     *  MONTHLY: YYYY-MM
     *  DAILY: YYYY-MM-DD (KST, 해당 날짜 업무 시작시간 기준. 1월 1일 04시 이라면 1월 1일로 넣어준다.)
     */
    period: string;
    /**
     *  한 번에 받고싶은 개수. 안채우면 32개가 내려간다.
     */
    limit?: Int32Value;
    nextToken?: StringValue;
}
export declare namespace DriverListCompactMissionsParams {
    function fromObject(obj: any): DriverListCompactMissionsParams;
    type PeriodType = 'ALL' | 'MONTHLY' | 'DAILY';
    function PeriodType_fromString(str: string): PeriodType | undefined;
}
export interface DriverListCompactMissionsResult {
    missions: DriverCompactMissionDTO[];
    nextToken?: StringValue;
}
export declare namespace DriverListCompactMissionsResult {
    function fromObject(obj: any): DriverListCompactMissionsResult;
}
