/* eslint-disable */
import { PaymentMethodDTO } from '../common';


export interface UserGetPaymentMethodWithIssueTokenRequestIdParams {
  issueTokenRequestId: string;
}

export namespace UserGetPaymentMethodWithIssueTokenRequestIdParams {
  export function fromObject(obj: any): UserGetPaymentMethodWithIssueTokenRequestIdParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetPaymentMethodWithIssueTokenRequestIdResult {
  paymentMethod?: PaymentMethodDTO;
}

export namespace UserGetPaymentMethodWithIssueTokenRequestIdResult {
  export function fromObject(obj: any): UserGetPaymentMethodWithIssueTokenRequestIdResult {
    return {
      ...obj,
      paymentMethod: obj.paymentMethod != null ? PaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
    }
  }
}
