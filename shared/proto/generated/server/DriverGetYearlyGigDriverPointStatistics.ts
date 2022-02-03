/* eslint-disable */

export interface DriverGetYearlyGigDriverPointStatisticsParams {
}

export namespace DriverGetYearlyGigDriverPointStatisticsParams {
  export function fromObject(obj: any): DriverGetYearlyGigDriverPointStatisticsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetYearlyGigDriverPointStatisticsResult {
  year: number;
  feeDeposit: number;
  promoDeposit: number;
  luckyDeposit: number;
  luckyTaxFreeDeposit: number;
  withdrawal: number;
}

export namespace DriverGetYearlyGigDriverPointStatisticsResult {
  export function fromObject(obj: any): DriverGetYearlyGigDriverPointStatisticsResult {
    return {
      ...obj,
    }
  }
}
