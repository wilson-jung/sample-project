import { TermsEntry } from '../common';
export interface DriverGetUpdatedFeeTermsParams {
}
export declare namespace DriverGetUpdatedFeeTermsParams {
    function fromObject(obj: any): DriverGetUpdatedFeeTermsParams;
}
export interface DriverGetUpdatedFeeTermsResult {
    description: string;
    termsEntries: TermsEntry[];
}
export declare namespace DriverGetUpdatedFeeTermsResult {
    function fromObject(obj: any): DriverGetUpdatedFeeTermsResult;
}
