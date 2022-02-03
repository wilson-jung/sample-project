/* eslint-disable */
import { PaymentProfileDTO } from '../common';


export interface UserGetPaymentProfileWithActivationStatusTokenParams {
  activationStatusToken: string;
}

export namespace UserGetPaymentProfileWithActivationStatusTokenParams {
  export function fromObject(obj: any): UserGetPaymentProfileWithActivationStatusTokenParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetPaymentProfileWithActivationStatusTokenResult {
  paymentProfile?: PaymentProfileDTO;
}

export namespace UserGetPaymentProfileWithActivationStatusTokenResult {
  export function fromObject(obj: any): UserGetPaymentProfileWithActivationStatusTokenResult {
    return {
      ...obj,
      paymentProfile: obj.paymentProfile != null ? PaymentProfileDTO.fromObject(obj.paymentProfile) : undefined,
    }
  }
}
