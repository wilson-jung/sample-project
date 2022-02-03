/* eslint-disable */
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

export namespace DriverListCompactMissionsParams {
  export function fromObject(obj: any): DriverListCompactMissionsParams {
    return {
      ...obj,
      periodType: DriverListCompactMissionsParams.PeriodType_fromString(obj.periodType),
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }

  export type PeriodType = 'ALL' | 'MONTHLY' | 'DAILY';

  export function PeriodType_fromString(str: string): PeriodType | undefined {
    switch (str) {
      case "ALL":
      case "MONTHLY":
      case "DAILY":
      return str
      default: return undefined
    }
  }
}

export interface DriverListCompactMissionsResult {
  missions: DriverCompactMissionDTO[];
  nextToken?: StringValue;
}

export namespace DriverListCompactMissionsResult {
  export function fromObject(obj: any): DriverListCompactMissionsResult {
    return {
      ...obj,
      missions: obj.missions.map((v: any) => DriverCompactMissionDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}
