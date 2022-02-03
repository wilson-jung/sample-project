/* eslint-disable */
import { TermsEntry } from '../common';
import { StringValue } from '../wrappers';


export interface UserGetCurrentTermsParams {
}

export namespace UserGetCurrentTermsParams {
  export function fromObject(obj: any): UserGetCurrentTermsParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetCurrentTermsResult {
  termsEntries: TermsEntry[];
  acceptToken: string;
  marketingAgreementEventBannerBody?: StringValue;
}

export namespace UserGetCurrentTermsResult {
  export function fromObject(obj: any): UserGetCurrentTermsResult {
    return {
      ...obj,
      termsEntries: obj.termsEntries.map((v: any) => TermsEntry.fromObject(v)),
      marketingAgreementEventBannerBody: obj.marketingAgreementEventBannerBody != null ? StringValue.fromObject(obj.marketingAgreementEventBannerBody) : undefined,
    }
  }
}
