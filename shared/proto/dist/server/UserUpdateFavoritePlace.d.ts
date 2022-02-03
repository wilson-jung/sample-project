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
export declare namespace UserUpdateFavoritePlaceParams {
    function fromObject(obj: any): UserUpdateFavoritePlaceParams;
}
export interface UserUpdateFavoritePlaceResult {
    favoritePlace?: FavoritePlaceDTO;
}
export declare namespace UserUpdateFavoritePlaceResult {
    function fromObject(obj: any): UserUpdateFavoritePlaceResult;
}
