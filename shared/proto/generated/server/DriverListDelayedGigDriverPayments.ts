/* eslint-disable */
import { GigDriverPaymentDTO } from '../common';


export interface DriverListDelayedGigDriverPaymentsParams {
}

export namespace DriverListDelayedGigDriverPaymentsParams {
  export function fromObject(obj: any): DriverListDelayedGigDriverPaymentsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListDelayedGigDriverPaymentsResult {
  payments: GigDriverPaymentDTO[];
}

export namespace DriverListDelayedGigDriverPaymentsResult {
  export function fromObject(obj: any): DriverListDelayedGigDriverPaymentsResult {
    return {
      ...obj,
      payments: obj.payments.map((v: any) => GigDriverPaymentDTO.fromObject(v)),
    }
  }
}
