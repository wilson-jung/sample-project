import { TermsEntry } from '../common';
export interface DriverGetCurrentGigTermsParams {
}
export declare namespace DriverGetCurrentGigTermsParams {
    function fromObject(obj: any): DriverGetCurrentGigTermsParams;
}
export interface DriverGetCurrentGigTermsResult {
    termsEntries: TermsEntry[];
    acceptToken: string;
}
export declare namespace DriverGetCurrentGigTermsResult {
    function fromObject(obj: any): DriverGetCurrentGigTermsResult;
}
