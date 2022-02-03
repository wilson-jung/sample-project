/* eslint-disable */
import { StringValue } from '../wrappers';


export interface UserSubmitNpsRecordParams {
  score: number;
  reason?: StringValue;
}

export namespace UserSubmitNpsRecordParams {
  export function fromObject(obj: any): UserSubmitNpsRecordParams {
    return {
      ...obj,
      reason: obj.reason != null ? StringValue.fromObject(obj.reason) : undefined,
    }
  }
}

export interface UserSubmitNpsRecordResult {
}

export namespace UserSubmitNpsRecordResult {
  export function fromObject(obj: any): UserSubmitNpsRecordResult {
    return {
      ...obj,
    }
  }
}
