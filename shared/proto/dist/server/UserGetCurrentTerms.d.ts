import { TermsEntry } from '../common';
import { StringValue } from '../wrappers';
export interface UserGetCurrentTermsParams {
}
export declare namespace UserGetCurrentTermsParams {
    function fromObject(obj: any): UserGetCurrentTermsParams;
}
export interface UserGetCurrentTermsResult {
    termsEntries: TermsEntry[];
    acceptToken: string;
    marketingAgreementEventBannerBody?: StringValue;
}
export declare namespace UserGetCurrentTermsResult {
    function fromObject(obj: any): UserGetCurrentTermsResult;
}
