/* eslint-disable */
import { PaymentDTO } from '../common';


export interface UserListFailedPaymentsParams {
}

export namespace UserListFailedPaymentsParams {
  export function fromObject(obj: any): UserListFailedPaymentsParams {
    return {
      ...obj,
    }
  }
}

export interface UserListFailedPaymentsResult {
  failedPayments: PaymentDTO[];
}

export namespace UserListFailedPaymentsResult {
  export function fromObject(obj: any): UserListFailedPaymentsResult {
    return {
      ...obj,
      failedPayments: obj.failedPayments.map((v: any) => PaymentDTO.fromObject(v)),
    }
  }
}
