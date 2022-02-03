/* eslint-disable */
import { StringValue } from '../wrappers';
import { DriverPraiseDTO } from '../common';


export interface DriverListDriverPraisesParams {
  nextToken?: StringValue;
}

export namespace DriverListDriverPraisesParams {
  export function fromObject(obj: any): DriverListDriverPraisesParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}

export interface DriverListDriverPraisesResult {
  praisesByPeriod: DriverListDriverPraisesResult.DriverPraisesByPeriod[];
  nextToken?: StringValue;
}

export namespace DriverListDriverPraisesResult {
  export function fromObject(obj: any): DriverListDriverPraisesResult {
    return {
      ...obj,
      praisesByPeriod: obj.praisesByPeriod.map((v: any) => DriverListDriverPraisesResult.DriverPraisesByPeriod.fromObject(v)),
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
