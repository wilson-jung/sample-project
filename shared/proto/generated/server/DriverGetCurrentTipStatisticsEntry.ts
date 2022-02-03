/* eslint-disable */


export interface DriverGetCurrentTipStatisticsEntryParams {
}

export namespace DriverGetCurrentTipStatisticsEntryParams {
  export function fromObject(obj: any): DriverGetCurrentTipStatisticsEntryParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetCurrentTipStatisticsEntryResult {
  /**
   *  null이 내려올 수 있다.
   */
  entry?: DriverGetCurrentTipStatisticsEntryResult.Entry;
}

export namespace DriverGetCurrentTipStatisticsEntryResult {
  export function fromObject(obj: any): DriverGetCurrentTipStatisticsEntryResult {
    return {
      ...obj,
      entry: obj.entry != null ? DriverGetCurrentTipStatisticsEntryResult.Entry.fromObject(obj.entry) : undefined,
    }
  }

  export interface Entry {
    /**
     *  월 단위: yyyy-MM 형식
     *  누적: 빈 문자열
     */
    period: string;
    amountKRW: number;
  }

  export namespace Entry {
    export function fromObject(obj: any): Entry {
      return {
        ...obj,
      }
    }
  }
}
