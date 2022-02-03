import { FavoritePlaceDTO } from '../common';
export interface UserListFavoritePlacesParams {
}
export declare namespace UserListFavoritePlacesParams {
    function fromObject(obj: any): UserListFavoritePlacesParams;
}
export interface UserListFavoritePlacesResult {
    favoritePlaces: FavoritePlaceDTO[];
}
export declare namespace UserListFavoritePlacesResult {
    function fromObject(obj: any): UserListFavoritePlacesResult;
}
