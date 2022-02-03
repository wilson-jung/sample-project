/* eslint-disable */

export interface Timestamp {
  /**
   *  number of milliseconds from the epoch of 1970-01-01T00:00:00Z
   */
  value: string;
}

export namespace Timestamp {
  export function fromObject(obj: any): Timestamp {
    return {
      ...obj,
      value: obj.value.toString(),
    }
  }
}
