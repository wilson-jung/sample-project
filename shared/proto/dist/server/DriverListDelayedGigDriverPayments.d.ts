import { GigDriverPaymentDTO } from '../common';
export interface DriverListDelayedGigDriverPaymentsParams {
}
export declare namespace DriverListDelayedGigDriverPaymentsParams {
    function fromObject(obj: any): DriverListDelayedGigDriverPaymentsParams;
}
export interface DriverListDelayedGigDriverPaymentsResult {
    payments: GigDriverPaymentDTO[];
}
export declare namespace DriverListDelayedGigDriverPaymentsResult {
    function fromObject(obj: any): DriverListDelayedGigDriverPaymentsResult;
}
