/* eslint-disable */

export interface DriverRequestDaeriTaxDocIssuanceParams {
  operationYear: number;
  emailAddress: string;
}

export namespace DriverRequestDaeriTaxDocIssuanceParams {
  export function fromObject(obj: any): DriverRequestDaeriTaxDocIssuanceParams {
    return {
      ...obj,
    }
  }
}

export interface DriverRequestDaeriTaxDocIssuanceResult {
}

export namespace DriverRequestDaeriTaxDocIssuanceResult {
  export function fromObject(obj: any): DriverRequestDaeriTaxDocIssuanceResult {
    return {
      ...obj,
    }
  }
}
