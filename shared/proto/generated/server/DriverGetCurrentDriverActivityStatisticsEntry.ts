/* eslint-disable */
import { DriverActivityStatisticsEntryDTO } from '../common';


export interface DriverGetCurrentDriverActivityStatisticsEntryParams {
  periodType?: DriverActivityStatisticsEntryDTO.PeriodType;
}

export namespace DriverGetCurrentDriverActivityStatisticsEntryParams {
  export function fromObject(obj: any): DriverGetCurrentDriverActivityStatisticsEntryParams {
    return {
      ...obj,
      periodType: DriverActivityStatisticsEntryDTO.PeriodType_fromString(obj.periodType),
    }
  }
}

export interface DriverGetCurrentDriverActivityStatisticsEntryResult {
  entry?: DriverActivityStatisticsEntryDTO;
}

export namespace DriverGetCurrentDriverActivityStatisticsEntryResult {
  export function fromObject(obj: any): DriverGetCurrentDriverActivityStatisticsEntryResult {
    return {
      ...obj,
      entry: obj.entry != null ? DriverActivityStatisticsEntryDTO.fromObject(obj.entry) : undefined,
    }
  }
}
