/* eslint-disable */
import { DriverActivityStatisticsEntryDTO } from '../common';
import { Int32Value } from '../wrappers';


export interface DriverListDriverActivityStatisticsEntriesParams {
  periodType?: DriverActivityStatisticsEntryDTO.PeriodType;
  limit?: Int32Value;
}

export namespace DriverListDriverActivityStatisticsEntriesParams {
  export function fromObject(obj: any): DriverListDriverActivityStatisticsEntriesParams {
    return {
      ...obj,
      periodType: DriverActivityStatisticsEntryDTO.PeriodType_fromString(obj.periodType),
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
    }
  }
}

export interface DriverListDriverActivityStatisticsEntriesResult {
  entries: DriverActivityStatisticsEntryDTO[];
  comments: string[];
}

export namespace DriverListDriverActivityStatisticsEntriesResult {
  export function fromObject(obj: any): DriverListDriverActivityStatisticsEntriesResult {
    return {
      ...obj,
      entries: obj.entries.map((v: any) => DriverActivityStatisticsEntryDTO.fromObject(v)),
    }
  }
}
