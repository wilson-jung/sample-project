import { TipPolicy } from '../common';
export interface UserGetRideTipPolicyParams {
    rideId: string;
}
export declare namespace UserGetRideTipPolicyParams {
    function fromObject(obj: any): UserGetRideTipPolicyParams;
}
export interface UserGetRideTipPolicyResult {
    tipPolicy?: TipPolicy;
}
export declare namespace UserGetRideTipPolicyResult {
    function fromObject(obj: any): UserGetRideTipPolicyResult;
}
