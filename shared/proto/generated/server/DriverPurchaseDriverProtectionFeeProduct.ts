/* eslint-disable */
import { DriverProtectionFeeProductPurchaseDTO } from '../common';


export interface DriverPurchaseDriverProtectionFeeProductParams {
  productId: string;
}

export namespace DriverPurchaseDriverProtectionFeeProductParams {
  export function fromObject(obj: any): DriverPurchaseDriverProtectionFeeProductParams {
    return {
      ...obj,
    }
  }
}

export interface DriverPurchaseDriverProtectionFeeProductResult {
  driverProtectionFeeProductPurchase?: DriverProtectionFeeProductPurchaseDTO;
}

export namespace DriverPurchaseDriverProtectionFeeProductResult {
  export function fromObject(obj: any): DriverPurchaseDriverProtectionFeeProductResult {
    return {
      ...obj,
      driverProtectionFeeProductPurchase: obj.driverProtectionFeeProductPurchase != null ? DriverProtectionFeeProductPurchaseDTO.fromObject(obj.driverProtectionFeeProductPurchase) : undefined,
    }
  }
}
