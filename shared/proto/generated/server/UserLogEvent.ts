/* eslint-disable */


export interface UserLogEventParams {
  eventKey?: UserLogEventParams.EventKey;
  payload: string;
  clientTimeMs: string;
}

export namespace UserLogEventParams {
  export function fromObject(obj: any): UserLogEventParams {
    return {
      ...obj,
      eventKey: UserLogEventParams.EventKey_fromString(obj.eventKey),
      clientTimeMs: obj.clientTimeMs.toString(),
    }
  }

  export type EventKey = 'CLICK_VIEW' | 'RIDE_AVAILABILITY_ISSUE';

  export function EventKey_fromString(str: string): EventKey | undefined {
    switch (str) {
      case "CLICK_VIEW":
      case "RIDE_AVAILABILITY_ISSUE":
      return str
      default: return undefined
    }
  }
}

export interface UserLogEventResult {
}

export namespace UserLogEventResult {
  export function fromObject(obj: any): UserLogEventResult {
    return {
      ...obj,
    }
  }
}
