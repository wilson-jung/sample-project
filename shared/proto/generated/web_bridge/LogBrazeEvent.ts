/* eslint-disable */
import { BrazeEvent } from '../common';


/**
 *  [웹 -> 앱 전달용]
 *  braze 에 로그 남기도록 하는 Bridge Call
 */
export interface LogBrazeEventParams {
  event?: BrazeEvent;
}

export namespace LogBrazeEventParams {
  export function fromObject(obj: any): LogBrazeEventParams {
    return {
      ...obj,
      event: obj.event != null ? BrazeEvent.fromObject(obj.event) : undefined,
    }
  }
}
