/* eslint-disable */
import { PaymentProfileDTO } from '../common';


export interface UserCreateBusinessPaymentProfileParams {
  activationCode: string;
}

export namespace UserCreateBusinessPaymentProfileParams {
  export function fromObject(obj: any): UserCreateBusinessPaymentProfileParams {
    return {
      ...obj,
    }
  }
}

export interface UserCreateBusinessPaymentProfileResult {
  paymentProfile?: PaymentProfileDTO;
}

export namespace UserCreateBusinessPaymentProfileResult {
  export function fromObject(obj: any): UserCreateBusinessPaymentProfileResult {
    return {
      ...obj,
      paymentProfile: obj.paymentProfile != null ? PaymentProfileDTO.fromObject(obj.paymentProfile) : undefined,
    }
  }
}
