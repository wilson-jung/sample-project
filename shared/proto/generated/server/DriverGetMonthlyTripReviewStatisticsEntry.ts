/* eslint-disable */
import { ReviewStatisticsEntryDTO } from '../common';


export interface DriverGetMonthlyTripReviewStatisticsEntryParams {
  /**
   *  연도와 월
   */
  year: number;
  month: number;
}

export namespace DriverGetMonthlyTripReviewStatisticsEntryParams {
  export function fromObject(obj: any): DriverGetMonthlyTripReviewStatisticsEntryParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetMonthlyTripReviewStatisticsEntryResult {
  entry?: ReviewStatisticsEntryDTO;
  hasPrevMonth: boolean;
  hasNextMonth: boolean;
}

export namespace DriverGetMonthlyTripReviewStatisticsEntryResult {
  export function fromObject(obj: any): DriverGetMonthlyTripReviewStatisticsEntryResult {
    return {
      ...obj,
      entry: obj.entry != null ? ReviewStatisticsEntryDTO.fromObject(obj.entry) : undefined,
    }
  }
}
