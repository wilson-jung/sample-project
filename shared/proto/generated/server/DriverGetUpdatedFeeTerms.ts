/* eslint-disable */
import { TermsEntry } from '../common';


export interface DriverGetUpdatedFeeTermsParams {
}

export namespace DriverGetUpdatedFeeTermsParams {
  export function fromObject(obj: any): DriverGetUpdatedFeeTermsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetUpdatedFeeTermsResult {
  description: string;
  termsEntries: TermsEntry[];
}

export namespace DriverGetUpdatedFeeTermsResult {
  export function fromObject(obj: any): DriverGetUpdatedFeeTermsResult {
    return {
      ...obj,
      termsEntries: obj.termsEntries.map((v: any) => TermsEntry.fromObject(v)),
    }
  }
}
