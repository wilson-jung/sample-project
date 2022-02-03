/* eslint-disable */
import { PaymentProfileDTO } from '../common';


export interface UserListPaymentProfilesParams {
}

export namespace UserListPaymentProfilesParams {
  export function fromObject(obj: any): UserListPaymentProfilesParams {
    return {
      ...obj,
    }
  }
}

export interface UserListPaymentProfilesResult {
  paymentProfiles: PaymentProfileDTO[];
}

export namespace UserListPaymentProfilesResult {
  export function fromObject(obj: any): UserListPaymentProfilesResult {
    return {
      ...obj,
      paymentProfiles: obj.paymentProfiles.map((v: any) => PaymentProfileDTO.fromObject(v)),
    }
  }
}
