/* eslint-disable */
import { DriverReviewStatistics202107DTO } from '../common';


export interface DriverGetCurrentReviewStatisticsEntryParams {
}

export namespace DriverGetCurrentReviewStatisticsEntryParams {
  export function fromObject(obj: any): DriverGetCurrentReviewStatisticsEntryParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetCurrentReviewStatisticsEntryResult {
  statistics202107?: DriverReviewStatistics202107DTO;
}

export namespace DriverGetCurrentReviewStatisticsEntryResult {
  export function fromObject(obj: any): DriverGetCurrentReviewStatisticsEntryResult {
    return {
      ...obj,
      statistics202107: obj.statistics202107 != null ? DriverReviewStatistics202107DTO.fromObject(obj.statistics202107) : undefined,
    }
  }
}
