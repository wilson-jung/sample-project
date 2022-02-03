/* eslint-disable */
import { DriverMissionDTO } from '../mission';
import { StringValue } from '../wrappers';
import { DriverPraiseDTO } from '../common';


export interface DriverListGigDriverPraisesParams {
  missionType?: DriverMissionDTO.MissionType;
  nextToken?: StringValue;
}

export namespace DriverListGigDriverPraisesParams {
  export function fromObject(obj: any): DriverListGigDriverPraisesParams {
    return {
      ...obj,
      missionType: DriverMissionDTO.MissionType_fromString(obj.missionType),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}

export interface DriverListGigDriverPraisesResult {
  praisesByPeriod: DriverListGigDriverPraisesResult.DriverPraisesByPeriod[];
  nextToken?: StringValue;
}

export namespace DriverListGigDriverPraisesResult {
  export function fromObject(obj: any): DriverListGigDriverPraisesResult {
    return {
      ...obj,
      praisesByPeriod: obj.praisesByPeriod.map((v: any) => DriverListGigDriverPraisesResult.DriverPraisesByPeriod.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }

  export interface DriverPraisesByPeriod {
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

  export namespace DriverPraisesByPeriod {
    export function fromObject(obj: any): DriverPraisesByPeriod {
      return {
        ...obj,
        praises: obj.praises.map((v: any) => DriverPraiseDTO.fromObject(v)),
      }
    }
  }
}
