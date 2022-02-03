import { BoolValue } from '../wrappers';
import { DriverPreferencesDTO } from '../common';
export interface DriverUpdatePreferencesParams {
    isMarketingNotificationEnabled?: BoolValue;
    isMarketingSmsEnabled?: BoolValue;
    isNightMarketingEnabled?: BoolValue;
}
export declare namespace DriverUpdatePreferencesParams {
    function fromObject(obj: any): DriverUpdatePreferencesParams;
}
export interface DriverUpdatePreferencesResult {
    preferences?: DriverPreferencesDTO;
}
export declare namespace DriverUpdatePreferencesResult {
    function fromObject(obj: any): DriverUpdatePreferencesResult;
}
