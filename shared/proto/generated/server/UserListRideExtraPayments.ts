/* eslint-disable */
import { RideReceipt, RidePaymentMethodDTO, RidePaymentProfileDTO } from '../ride';


export interface UserListRideExtraPaymentsParams {
  rideId: string;
}

export namespace UserListRideExtraPaymentsParams {
  export function fromObject(obj: any): UserListRideExtraPaymentsParams {
    return {
      ...obj,
    }
  }
}

export interface UserListRideExtraPaymentsResult {
  extraPayments: UserListRideExtraPaymentsResult.RideExtraPaymentDTO[];
}

export namespace UserListRideExtraPaymentsResult {
  export function fromObject(obj: any): UserListRideExtraPaymentsResult {
    return {
      ...obj,
      extraPayments: obj.extraPayments.map((v: any) => UserListRideExtraPaymentsResult.RideExtraPaymentDTO.fromObject(v)),
    }
  }

  export interface RideExtraPaymentDTO {
    receipt?: RideReceipt;
    paymentMethod?: RidePaymentMethodDTO;
    paymentProfile?: RidePaymentProfileDTO;
    type?: UserListRideExtraPaymentsResult.RideExtraPaymentDTO.Type;
  }

  export namespace RideExtraPaymentDTO {
    export function fromObject(obj: any): RideExtraPaymentDTO {
      return {
        ...obj,
        receipt: obj.receipt != null ? RideReceipt.fromObject(obj.receipt) : undefined,
        paymentMethod: obj.paymentMethod != null ? RidePaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
        paymentProfile: obj.paymentProfile != null ? RidePaymentProfileDTO.fromObject(obj.paymentProfile) : undefined,
        type: UserListRideExtraPaymentsResult.RideExtraPaymentDTO.Type_fromString(obj.type),
      }
    }

    export type Type = 'DEFAULT' | 'TIP';

    export function Type_fromString(str: string): Type | undefined {
      switch (str) {
        case "DEFAULT":
        case "TIP":
        return str
        default: return undefined
      }
    }
  }
}
