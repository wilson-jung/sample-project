/* eslint-disable */


export interface DriverListTipStatisticsEntriesParams {
}

export namespace DriverListTipStatisticsEntriesParams {
  export function fromObject(obj: any): DriverListTipStatisticsEntriesParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListTipStatisticsEntriesResult {
  entries: DriverListTipStatisticsEntriesResult.Entry[];
}

export namespace DriverListTipStatisticsEntriesResult {
  export function fromObject(obj: any): DriverListTipStatisticsEntriesResult {
    return {
      ...obj,
      entries: obj.entries.map((v: any) => DriverListTipStatisticsEntriesResult.Entry.fromObject(v)),
    }
  }

  export interface Entry {
    year: number;
    month: number;
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
