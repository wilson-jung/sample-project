/* eslint-disable */
import { Location, AddressedLocation } from '../common';


export interface UserSearchPlacesParams {
  /**
   *  검색하고자 하는 키워드
   */
  keyword: string;
  /**
   *  현재 검색하고자 하는 대상 (출발지, 도착지에 대한 정보)
   */
  hint?: UserSearchPlacesParams.Hint;
}

export namespace UserSearchPlacesParams {
  export function fromObject(obj: any): UserSearchPlacesParams {
    return {
      ...obj,
      hint: obj.hint != null ? UserSearchPlacesParams.Hint.fromObject(obj.hint) : undefined,
    }
  }

  export interface Hint {
    type?: UserSearchPlacesParams.Hint.Type;
    /**
     *  그냥 라이더앱에서 현재 위치를 올려준다.
     *  만약 현재 위치를 알 수 없다면 올려주지 않아도 된다.
     *  서버는 이 정보를 바탕으로 출발지 검색시 근처에 있는 장소 위주로 검색해서 내려준다.
     */
    location?: Location;
  }

  export namespace Hint {
    export function fromObject(obj: any): Hint {
      return {
        ...obj,
        type: UserSearchPlacesParams.Hint.Type_fromString(obj.type),
        location: obj.location != null ? Location.fromObject(obj.location) : undefined,
      }
    }

    export type Type = 'UNSPECIFIED' | 'ORIGIN' | 'DESTINATION' | 'WAYPOINT';

    export function Type_fromString(str: string): Type | undefined {
      switch (str) {
        case "UNSPECIFIED":
        case "ORIGIN":
        case "DESTINATION":
        case "WAYPOINT":
        return str
        default: return undefined
      }
    }
  }
}

export interface UserSearchPlacesResult {
  places: UserSearchPlacesResult.Place[];
}

export namespace UserSearchPlacesResult {
  export function fromObject(obj: any): UserSearchPlacesResult {
    return {
      ...obj,
      places: obj.places.map((v: any) => UserSearchPlacesResult.Place.fromObject(v)),
    }
  }

  export interface Place {
    name: string;
    address: string;
    location?: AddressedLocation;
  }

  export namespace Place {
    export function fromObject(obj: any): Place {
      return {
        ...obj,
        location: obj.location != null ? AddressedLocation.fromObject(obj.location) : undefined,
      }
    }
  }
}
