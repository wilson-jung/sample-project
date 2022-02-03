import { DriverMissionStatisticsDTO } from '../mission';
import { StringValue } from '../wrappers';
export interface DriverListMissionSubStatisticsParams {
    periodType?: DriverMissionStatisticsDTO.PeriodType;
    /**
     *  PeriodType에 해당하는 기간을 포멧에 맞게 넣어주면 된다.
     *  ALL: 빈 값
     *  MONTHLY: YYYY-MM
     *  DAILY: YYYY-MM-DD (KST, 해당 날짜 업무 시작시간 기준. 1월 1일 04시 이라면 1월 1일로 넣어준다.)
     */
    period: string;
    nextToken?: StringValue;
}
export declare namespace DriverListMissionSubStatisticsParams {
    function fromObject(obj: any): DriverListMissionSubStatisticsParams;
}
export interface DriverListMissionSubStatisticsResult {
    /**
     *  하위 통계 리스트가 필요한 경우 내려간다.(월별로 요청한 경우에 일별 통계)
     */
    subStatistics: DriverMissionStatisticsDTO[];
    nextToken?: StringValue;
}
export declare namespace DriverListMissionSubStatisticsResult {
    function fromObject(obj: any): DriverListMissionSubStatisticsResult;
}
