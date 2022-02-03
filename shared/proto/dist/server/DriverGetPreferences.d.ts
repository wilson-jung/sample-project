import { DriverPreferencesDTO } from '../common';
export interface DriverGetPreferencesParams {
}
export declare namespace DriverGetPreferencesParams {
    function fromObject(obj: any): DriverGetPreferencesParams;
}
export interface DriverGetPreferencesResult {
    preferences?: DriverPreferencesDTO;
}
export declare namespace DriverGetPreferencesResult {
    function fromObject(obj: any): DriverGetPreferencesResult;
}
