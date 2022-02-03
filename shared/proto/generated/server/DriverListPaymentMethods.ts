/* eslint-disable */
import { DriverPaymentMethodDTO } from '../common';


export interface DriverListPaymentMethodsParams {
}

export namespace DriverListPaymentMethodsParams {
  export function fromObject(obj: any): DriverListPaymentMethodsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListPaymentMethodsResult {
  paymentMethods: DriverPaymentMethodDTO[];
}

export namespace DriverListPaymentMethodsResult {
  export function fromObject(obj: any): DriverListPaymentMethodsResult {
    return {
      ...obj,
      paymentMethods: obj.paymentMethods.map((v: any) => DriverPaymentMethodDTO.fromObject(v)),
    }
  }
}
