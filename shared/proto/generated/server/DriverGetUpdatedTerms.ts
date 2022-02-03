/* eslint-disable */
import { TermsEntry } from '../common';


export interface DriverGetUpdatedTermsParams {
}

export namespace DriverGetUpdatedTermsParams {
  export function fromObject(obj: any): DriverGetUpdatedTermsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetUpdatedTermsResult {
  termsEntries: TermsEntry[];
  acceptToken: string;
}

export namespace DriverGetUpdatedTermsResult {
  export function fromObject(obj: any): DriverGetUpdatedTermsResult {
    return {
      ...obj,
      termsEntries: obj.termsEntries.map((v: any) => TermsEntry.fromObject(v)),
    }
  }
}
