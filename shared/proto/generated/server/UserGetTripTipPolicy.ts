/* eslint-disable */
import { TipPolicy } from '../common';


export interface UserGetTripTipPolicyParams {
  tripId: string;
}

export namespace UserGetTripTipPolicyParams {
  export function fromObject(obj: any): UserGetTripTipPolicyParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetTripTipPolicyResult {
  tipPolicy?: TipPolicy;
}

export namespace UserGetTripTipPolicyResult {
  export function fromObject(obj: any): UserGetTripTipPolicyResult {
    return {
      ...obj,
      tipPolicy: obj.tipPolicy != null ? TipPolicy.fromObject(obj.tipPolicy) : undefined,
    }
  }
}
