import { TipPolicy } from '../common';
export interface UserGetTripTipPolicyParams {
    tripId: string;
}
export declare namespace UserGetTripTipPolicyParams {
    function fromObject(obj: any): UserGetTripTipPolicyParams;
}
export interface UserGetTripTipPolicyResult {
    tipPolicy?: TipPolicy;
}
export declare namespace UserGetTripTipPolicyResult {
    function fromObject(obj: any): UserGetTripTipPolicyResult;
}
