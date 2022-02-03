/* eslint-disable */
import { StringValue } from '../wrappers';


export interface ReturnEximbayResponseParams {
  isSuccess: boolean;
  issueTokenRequestId?: StringValue;
}

export namespace ReturnEximbayResponseParams {
  export function fromObject(obj: any): ReturnEximbayResponseParams {
    return {
      ...obj,
      issueTokenRequestId: obj.issueTokenRequestId != null ? StringValue.fromObject(obj.issueTokenRequestId) : undefined,
    }
  }
}

export interface ReturnEximbayResponseResult {
}

export namespace ReturnEximbayResponseResult {
  export function fromObject(obj: any): ReturnEximbayResponseResult {
    return {
      ...obj,
    }
  }
}
