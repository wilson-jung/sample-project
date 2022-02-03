/* eslint-disable */
import { TipPolicy } from '../common';


export interface UserGetRideTipPolicyParams {
  rideId: string;
}

export namespace UserGetRideTipPolicyParams {
  export function fromObject(obj: any): UserGetRideTipPolicyParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetRideTipPolicyResult {
  tipPolicy?: TipPolicy;
}

export namespace UserGetRideTipPolicyResult {
  export function fromObject(obj: any): UserGetRideTipPolicyResult {
    return {
      ...obj,
      tipPolicy: obj.tipPolicy != null ? TipPolicy.fromObject(obj.tipPolicy) : undefined,
    }
  }
}
