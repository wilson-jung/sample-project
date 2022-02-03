/* eslint-disable */
import { FavoritePlaceDTO } from '../common';


export interface UserListFavoritePlacesParams {
}

export namespace UserListFavoritePlacesParams {
  export function fromObject(obj: any): UserListFavoritePlacesParams {
    return {
      ...obj,
    }
  }
}

export interface UserListFavoritePlacesResult {
  favoritePlaces: FavoritePlaceDTO[];
}

export namespace UserListFavoritePlacesResult {
  export function fromObject(obj: any): UserListFavoritePlacesResult {
    return {
      ...obj,
      favoritePlaces: obj.favoritePlaces.map((v: any) => FavoritePlaceDTO.fromObject(v)),
    }
  }
}
