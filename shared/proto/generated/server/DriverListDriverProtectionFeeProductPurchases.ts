/* eslint-disable */
import { StringValue, Int32Value } from '../wrappers';
import { DriverProtectionFeeProductPurchaseDTO } from '../common';


export interface DriverListDriverProtectionFeeProductPurchasesParams {
  nextToken?: StringValue;
  limit?: Int32Value;
}

export namespace DriverListDriverProtectionFeeProductPurchasesParams {
  export function fromObject(obj: any): DriverListDriverProtectionFeeProductPurchasesParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
    }
  }
}

export interface DriverListDriverProtectionFeeProductPurchasesResult {
  driverProtectionFeeProductPurchases: DriverProtectionFeeProductPurchaseDTO[];
  nextToken?: StringValue;
}

export namespace DriverListDriverProtectionFeeProductPurchasesResult {
  export function fromObject(obj: any): DriverListDriverProtectionFeeProductPurchasesResult {
    return {
      ...obj,
      driverProtectionFeeProductPurchases: obj.driverProtectionFeeProductPurchases.map((v: any) => DriverProtectionFeeProductPurchaseDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}
