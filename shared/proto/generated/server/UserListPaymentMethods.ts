/* eslint-disable */
import { PaymentMethodDTO } from '../common';


export interface UserListPaymentMethodsParams {
}

export namespace UserListPaymentMethodsParams {
  export function fromObject(obj: any): UserListPaymentMethodsParams {
    return {
      ...obj,
    }
  }
}

export interface UserListPaymentMethodsResult {
  paymentMethods: PaymentMethodDTO[];
}

export namespace UserListPaymentMethodsResult {
  export function fromObject(obj: any): UserListPaymentMethodsResult {
    return {
      ...obj,
      paymentMethods: obj.paymentMethods.map((v: any) => PaymentMethodDTO.fromObject(v)),
    }
  }
}
