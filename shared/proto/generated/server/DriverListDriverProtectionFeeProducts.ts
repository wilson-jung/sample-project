/* eslint-disable */
import { DriverProtectionFeeProductDTO } from '../common';


export interface DriverListDriverProtectionFeeProductsParams {
}

export namespace DriverListDriverProtectionFeeProductsParams {
  export function fromObject(obj: any): DriverListDriverProtectionFeeProductsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListDriverProtectionFeeProductsResult {
  driverProtectionFeeProducts: DriverProtectionFeeProductDTO[];
}

export namespace DriverListDriverProtectionFeeProductsResult {
  export function fromObject(obj: any): DriverListDriverProtectionFeeProductsResult {
    return {
      ...obj,
      driverProtectionFeeProducts: obj.driverProtectionFeeProducts.map((v: any) => DriverProtectionFeeProductDTO.fromObject(v)),
    }
  }
}
