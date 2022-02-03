/* eslint-disable */
import { Image } from '../common';
import { StringValue } from '../wrappers';


export interface DriverListGigHomeViewBannersParams {
}

export namespace DriverListGigHomeViewBannersParams {
  export function fromObject(obj: any): DriverListGigHomeViewBannersParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListGigHomeViewBannersResult {
  banners: DriverListGigHomeViewBannersResult.Banner[];
}

export namespace DriverListGigHomeViewBannersResult {
  export function fromObject(obj: any): DriverListGigHomeViewBannersResult {
    return {
      ...obj,
      banners: obj.banners.map((v: any) => DriverListGigHomeViewBannersResult.Banner.fromObject(v)),
    }
  }

  export interface Banner {
    url: string;
    image?: Image;
    logKey?: StringValue;
  }

  export namespace Banner {
    export function fromObject(obj: any): Banner {
      return {
        ...obj,
        image: obj.image != null ? Image.fromObject(obj.image) : undefined,
        logKey: obj.logKey != null ? StringValue.fromObject(obj.logKey) : undefined,
      }
    }
  }
}
