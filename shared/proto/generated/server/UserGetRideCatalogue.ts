/* eslint-disable */
import { Location, Image } from '../common';
import { Int32Value, StringValue } from '../wrappers';


export interface UserGetRideCatalogueParams {
  /**
   *  UserListRideEstimations.proto안에서 Estimation, RideType의 value를 사용합니다.
   *  LITE, PREMIUM, NEAR_TAXI(가까운 타다), RIDE_RESERVATION (호출예약) 등의 값이 올 수 있다.
   */
  rideType: string;
  location?: Location;
  callFee?: Int32Value;
}

export namespace UserGetRideCatalogueParams {
  export function fromObject(obj: any): UserGetRideCatalogueParams {
    return {
      ...obj,
      location: obj.location != null ? Location.fromObject(obj.location) : undefined,
      callFee: obj.callFee != null ? Int32Value.fromObject(obj.callFee) : undefined,
    }
  }
}

export interface UserGetRideCatalogueResult {
  rideType: string;
  image?: Image;
  name: string;
  description: string;
  lines: UserGetRideCatalogueResult.LineItem[];
  banner?: UserGetRideCatalogueResult.Banner;
}

export namespace UserGetRideCatalogueResult {
  export function fromObject(obj: any): UserGetRideCatalogueResult {
    return {
      ...obj,
      image: obj.image != null ? Image.fromObject(obj.image) : undefined,
      lines: obj.lines.map((v: any) => UserGetRideCatalogueResult.LineItem.fromObject(v)),
      banner: obj.banner != null ? UserGetRideCatalogueResult.Banner.fromObject(obj.banner) : undefined,
    }
  }

  export interface LineItem {
    title: string;
    content: string;
    detail?: StringValue;
  }

  export namespace LineItem {
    export function fromObject(obj: any): LineItem {
      return {
        ...obj,
        detail: obj.detail != null ? StringValue.fromObject(obj.detail) : undefined,
      }
    }
  }

  export interface Banner {
    url: string;
    image?: Image;
    logKey: string;
  }

  export namespace Banner {
    export function fromObject(obj: any): Banner {
      return {
        ...obj,
        image: obj.image != null ? Image.fromObject(obj.image) : undefined,
      }
    }
  }
}
