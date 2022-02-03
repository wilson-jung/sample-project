/* eslint-disable */
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

export namespace UserUpdatePreferencesParams {
  export function fromObject(obj: any): UserUpdatePreferencesParams {
    return {
      ...obj,
      isMarketingNotificationEnabled: obj.isMarketingNotificationEnabled != null ? BoolValue.fromObject(obj.isMarketingNotificationEnabled) : undefined,
      isMarketingEmailEnabled: obj.isMarketingEmailEnabled != null ? BoolValue.fromObject(obj.isMarketingEmailEnabled) : undefined,
      isMarketingSmsEnabled: obj.isMarketingSmsEnabled != null ? BoolValue.fromObject(obj.isMarketingSmsEnabled) : undefined,
      isInformativeNotificationEnabled: obj.isInformativeNotificationEnabled != null ? BoolValue.fromObject(obj.isInformativeNotificationEnabled) : undefined,
      isInformativeEmailEnabled: obj.isInformativeEmailEnabled != null ? BoolValue.fromObject(obj.isInformativeEmailEnabled) : undefined,
      isInformativeSmsEnabled: obj.isInformativeSmsEnabled != null ? BoolValue.fromObject(obj.isInformativeSmsEnabled) : undefined,
    }
  }
}

export interface UserUpdatePreferencesResult {
  preferences?: UserPreferencesDTO;
}

export namespace UserUpdatePreferencesResult {
  export function fromObject(obj: any): UserUpdatePreferencesResult {
    return {
      ...obj,
      preferences: obj.preferences != null ? UserPreferencesDTO.fromObject(obj.preferences) : undefined,
    }
  }
}
