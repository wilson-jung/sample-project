/* eslint-disable */
import { ReviewStatisticsEntryDTO, DriverReviewStatistics202107DTO } from '../common';


export interface DriverGetMonthlyRideReviewStatisticsEntryParams {
  /**
   *  연도와 월
   */
  year: number;
  month: number;
}

export namespace DriverGetMonthlyRideReviewStatisticsEntryParams {
  export function fromObject(obj: any): DriverGetMonthlyRideReviewStatisticsEntryParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetMonthlyRideReviewStatisticsEntryResult {
  entry?: ReviewStatisticsEntryDTO;
  statistics202107?: DriverReviewStatistics202107DTO;
  hasPrevMonth: boolean;
  hasNextMonth: boolean;
}

export namespace DriverGetMonthlyRideReviewStatisticsEntryResult {
  export function fromObject(obj: any): DriverGetMonthlyRideReviewStatisticsEntryResult {
    return {
      ...obj,
      entry: obj.entry != null ? ReviewStatisticsEntryDTO.fromObject(obj.entry) : undefined,
      statistics202107: obj.statistics202107 != null ? DriverReviewStatistics202107DTO.fromObject(obj.statistics202107) : undefined,
    }
  }
}
