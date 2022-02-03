/* eslint-disable */

export interface UserDeletePaymentMethodParams {
  paymentMethodId: string;
}

export namespace UserDeletePaymentMethodParams {
  export function fromObject(obj: any): UserDeletePaymentMethodParams {
    return {
      ...obj,
    }
  }
}

export interface UserDeletePaymentMethodResult {
}

export namespace UserDeletePaymentMethodResult {
  export function fromObject(obj: any): UserDeletePaymentMethodResult {
    return {
      ...obj,
    }
  }
}
