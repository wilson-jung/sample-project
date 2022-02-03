/* eslint-disable */

export interface DriverAcceptUpdatedTermsParams {
  acceptToken: string;
  acceptingTermsIds: string[];
}

export namespace DriverAcceptUpdatedTermsParams {
  export function fromObject(obj: any): DriverAcceptUpdatedTermsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverAcceptUpdatedTermsResult {
}

export namespace DriverAcceptUpdatedTermsResult {
  export function fromObject(obj: any): DriverAcceptUpdatedTermsResult {
    return {
      ...obj,
    }
  }
}
