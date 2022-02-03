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
export declare namespace UserCreateFavoritePlaceParams {
    function fromObject(obj: any): UserCreateFavoritePlaceParams;
}
export interface UserCreateFavoritePlaceResult {
    favoritePlace?: FavoritePlaceDTO;
}
export declare namespace UserCreateFavoritePlaceResult {
    function fromObject(obj: any): UserCreateFavoritePlaceResult;
}
