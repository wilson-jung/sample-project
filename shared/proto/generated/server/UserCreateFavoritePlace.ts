/* eslint-disable */
import { FavoritePlaceDTO, AddressedLocation } from '../common';
import { StringValue } from '../wrappers';


export interface UserCreateFavoritePlaceParams {
  type?: FavoritePlaceDTO.Type;
  /**
   *  type이 CUSTOM이 아닌 경우 무시됨
   */
  name?: StringValue;
  location?: AddressedLocation;
}

export namespace UserCreateFavoritePlaceParams {
  export function fromObject(obj: any): UserCreateFavoritePlaceParams {
    return {
      ...obj,
      type: FavoritePlaceDTO.Type_fromString(obj.type),
      name: obj.name != null ? StringValue.fromObject(obj.name) : undefined,
      location: obj.location != null ? AddressedLocation.fromObject(obj.location) : undefined,
    }
  }
}

export interface UserCreateFavoritePlaceResult {
  favoritePlace?: FavoritePlaceDTO;
}

export namespace UserCreateFavoritePlaceResult {
  export function fromObject(obj: any): UserCreateFavoritePlaceResult {
    return {
      ...obj,
      favoritePlace: obj.favoritePlace != null ? FavoritePlaceDTO.fromObject(obj.favoritePlace) : undefined,
    }
  }
}
