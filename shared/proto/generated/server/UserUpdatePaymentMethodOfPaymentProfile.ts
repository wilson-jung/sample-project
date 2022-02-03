/* eslint-disable */
import { PaymentProfileDTO } from '../common';


export interface UserUpdatePaymentMethodOfPaymentProfileParams {
  /**
   *  payment method를 변경하고 싶은 PaymentProfile의 id.
   */
  paymentProfileId: string;
  /**
   *  변경할 payment method의 id.
   */
  paymentMethodId: string;
}

export namespace UserUpdatePaymentMethodOfPaymentProfileParams {
  export function fromObject(obj: any): UserUpdatePaymentMethodOfPaymentProfileParams {
    return {
      ...obj,
    }
  }
}

export interface UserUpdatePaymentMethodOfPaymentProfileResult {
  /**
   *  변경된 PaymentProfile을 내려준다.
   */
  paymentProfile?: PaymentProfileDTO;
}

export namespace UserUpdatePaymentMethodOfPaymentProfileResult {
  export function fromObject(obj: any): UserUpdatePaymentMethodOfPaymentProfileResult {
    return {
      ...obj,
      paymentProfile: obj.paymentProfile != null ? PaymentProfileDTO.fromObject(obj.paymentProfile) : undefined,
    }
  }
}
