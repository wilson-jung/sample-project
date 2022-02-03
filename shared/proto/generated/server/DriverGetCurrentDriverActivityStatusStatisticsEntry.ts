/* eslint-disable */
import { DriverActivityStatusStatisticsEntryDTO } from '../common';


export interface DriverGetCurrentDriverActivityStatusStatisticsEntryParams {
}

export namespace DriverGetCurrentDriverActivityStatusStatisticsEntryParams {
  export function fromObject(obj: any): DriverGetCurrentDriverActivityStatusStatisticsEntryParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetCurrentDriverActivityStatusStatisticsEntryResult {
  entry?: DriverActivityStatusStatisticsEntryDTO;
}

export namespace DriverGetCurrentDriverActivityStatusStatisticsEntryResult {
  export function fromObject(obj: any): DriverGetCurrentDriverActivityStatusStatisticsEntryResult {
    return {
      ...obj,
      entry: obj.entry != null ? DriverActivityStatusStatisticsEntryDTO.fromObject(obj.entry) : undefined,
    }
  }
}
