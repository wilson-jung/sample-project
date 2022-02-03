/* eslint-disable */

/**
 *  [웹 -> 앱 전달용]
 *  Client log 에 남기도록 하는 Bridge Call
 */
export interface LogEventParams {
  eventName: string;
  params: { [key: string]: string };
}

export namespace LogEventParams {
  export function fromObject(obj: any): LogEventParams {
    return {
      ...obj,
    }
  }
}

export interface LogEventResult {
}

export namespace LogEventResult {
  export function fromObject(obj: any): LogEventResult {
    return {
      ...obj,
    }
  }
}
