/* eslint-disable */
import { StringValue } from '../wrappers';
import { AddressedLocation, FavoritePlaceDTO } from '../common';


export interface UserUpdateFavoritePlaceParams {
  /**
   *  type은 수정할 수 없다.
   */
  favoritePlaceId: string;
  /**
   *  name이 없으면 기존 name이 유지된다.
   */
  name?: StringValue;
  /**
   *  location이 없으면 기존 location이 유지된다.
   */
  location?: AddressedLocation;
}

export namespace UserUpdateFavoritePlaceParams {
  export function fromObject(obj: any): UserUpdateFavoritePlaceParams {
    return {
      ...obj,
      name: obj.name != null ? StringValue.fromObject(obj.name) : undefined,
      location: obj.location != null ? AddressedLocation.fromObject(obj.location) : undefined,
    }
  }
}

export interface UserUpdateFavoritePlaceResult {
  favoritePlace?: FavoritePlaceDTO;
}

export namespace UserUpdateFavoritePlaceResult {
  export function fromObject(obj: any): UserUpdateFavoritePlaceResult {
    return {
      ...obj,
      favoritePlace: obj.favoritePlace != null ? FavoritePlaceDTO.fromObject(obj.favoritePlace) : undefined,
    }
  }
}
