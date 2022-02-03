import { TermsEntry } from '../common';
export interface DriverGetUpdatedTermsParams {
}
export declare namespace DriverGetUpdatedTermsParams {
    function fromObject(obj: any): DriverGetUpdatedTermsParams;
}
export interface DriverGetUpdatedTermsResult {
    termsEntries: TermsEntry[];
    acceptToken: string;
}
export declare namespace DriverGetUpdatedTermsResult {
    function fromObject(obj: any): DriverGetUpdatedTermsResult;
}
