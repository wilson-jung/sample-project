import { UserPreferencesDTO } from '../common';
export interface UserGetPreferencesParams {
}
export declare namespace UserGetPreferencesParams {
    function fromObject(obj: any): UserGetPreferencesParams;
}
export interface UserGetPreferencesResult {
    preferences?: UserPreferencesDTO;
}
export declare namespace UserGetPreferencesResult {
    function fromObject(obj: any): UserGetPreferencesResult;
}
