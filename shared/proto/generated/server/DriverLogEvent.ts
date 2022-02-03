/* eslint-disable */


export interface DriverLogEventParams {
  eventKey?: DriverLogEventParams.EventKey;
  payload: string;
  clientTimeMs: string;
}

export namespace DriverLogEventParams {
  export function fromObject(obj: any): DriverLogEventParams {
    return {
      ...obj,
      eventKey: DriverLogEventParams.EventKey_fromString(obj.eventKey),
      clientTimeMs: obj.clientTimeMs.toString(),
    }
  }

  export type EventKey = 'CLICK_VIEW' | 'OPEN_NAVIGATION';

  export function EventKey_fromString(str: string): EventKey | undefined {
    switch (str) {
      case "CLICK_VIEW":
      case "OPEN_NAVIGATION":
      return str
      default: return undefined
    }
  }
}

export interface DriverLogEventResult {
}

export namespace DriverLogEventResult {
  export function fromObject(obj: any): DriverLogEventResult {
    return {
      ...obj,
    }
  }
}
