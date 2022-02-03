import { BoolValue } from '../wrappers';
import { UserPreferencesDTO } from '../common';
export interface UserUpdatePreferencesParams {
    isMarketingNotificationEnabled?: BoolValue;
    isMarketingEmailEnabled?: BoolValue;
    isMarketingSmsEnabled?: BoolValue;
    isInformativeNotificationEnabled?: BoolValue;
    isInformativeEmailEnabled?: BoolValue;
    isInformativeSmsEnabled?: BoolValue;
}
export declare namespace UserUpdatePreferencesParams {
    function fromObject(obj: any): UserUpdatePreferencesParams;
}
export interface UserUpdatePreferencesResult {
    preferences?: UserPreferencesDTO;
}
export declare namespace UserUpdatePreferencesResult {
    function fromObject(obj: any): UserUpdatePreferencesResult;
}
