/* eslint-disable */
import { StringValue } from '../wrappers';
import { Image } from '../common';


export interface UserGetActiveTripCountParams {
}

export namespace UserGetActiveTripCountParams {
  export function fromObject(obj: any): UserGetActiveTripCountParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetActiveTripCountResult {
  activeTripCount: number;
  label?: StringValue;
}

export namespace UserGetActiveTripCountResult {
  export function fromObject(obj: any): UserGetActiveTripCountResult {
    return {
      ...obj,
      label: obj.label != null ? StringValue.fromObject(obj.label) : undefined,
    }
  }

  export interface Banner {
    icon?: Image;
    title: string;
    description: string;
    deepLink?: StringValue;
  }

  export namespace Banner {
    export function fromObject(obj: any): Banner {
      return {
        ...obj,
        icon: obj.icon != null ? Image.fromObject(obj.icon) : undefined,
        deepLink: obj.deepLink != null ? StringValue.fromObject(obj.deepLink) : undefined,
      }
    }
  }
}
