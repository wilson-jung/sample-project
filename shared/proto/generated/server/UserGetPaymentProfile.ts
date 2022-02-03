/* eslint-disable */
import { PaymentProfileDTO } from '../common';


export interface UserGetPaymentProfileParams {
  paymentProfileId: string;
}

export namespace UserGetPaymentProfileParams {
  export function fromObject(obj: any): UserGetPaymentProfileParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetPaymentProfileResult {
  paymentProfile?: PaymentProfileDTO;
}

export namespace UserGetPaymentProfileResult {
  export function fromObject(obj: any): UserGetPaymentProfileResult {
    return {
      ...obj,
      paymentProfile: obj.paymentProfile != null ? PaymentProfileDTO.fromObject(obj.paymentProfile) : undefined,
    }
  }
}
