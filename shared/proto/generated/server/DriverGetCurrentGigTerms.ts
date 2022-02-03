/* eslint-disable */
import { TermsEntry } from '../common';


export interface DriverGetCurrentGigTermsParams {
}

export namespace DriverGetCurrentGigTermsParams {
  export function fromObject(obj: any): DriverGetCurrentGigTermsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetCurrentGigTermsResult {
  termsEntries: TermsEntry[];
  acceptToken: string;
}

export namespace DriverGetCurrentGigTermsResult {
  export function fromObject(obj: any): DriverGetCurrentGigTermsResult {
    return {
      ...obj,
      termsEntries: obj.termsEntries.map((v: any) => TermsEntry.fromObject(v)),
    }
  }
}
