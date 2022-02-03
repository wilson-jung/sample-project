/* eslint-disable */

export interface UserDeleteFavoritePlaceParams {
  favoritePlaceId: string;
}

export namespace UserDeleteFavoritePlaceParams {
  export function fromObject(obj: any): UserDeleteFavoritePlaceParams {
    return {
      ...obj,
    }
  }
}

export interface UserDeleteFavoritePlaceResult {
}

export namespace UserDeleteFavoritePlaceResult {
  export function fromObject(obj: any): UserDeleteFavoritePlaceResult {
    return {
      ...obj,
    }
  }
}
