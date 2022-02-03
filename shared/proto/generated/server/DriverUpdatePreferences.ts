/* eslint-disable */
import { BoolValue } from '../wrappers';
import { DriverPreferencesDTO } from '../common';


export interface DriverUpdatePreferencesParams {
  isMarketingNotificationEnabled?: BoolValue;
  isMarketingSmsEnabled?: BoolValue;
  isNightMarketingEnabled?: BoolValue;
}

export namespace DriverUpdatePreferencesParams {
  export function fromObject(obj: any): DriverUpdatePreferencesParams {
    return {
      ...obj,
      isMarketingNotificationEnabled: obj.isMarketingNotificationEnabled != null ? BoolValue.fromObject(obj.isMarketingNotificationEnabled) : undefined,
      isMarketingSmsEnabled: obj.isMarketingSmsEnabled != null ? BoolValue.fromObject(obj.isMarketingSmsEnabled) : undefined,
      isNightMarketingEnabled: obj.isNightMarketingEnabled != null ? BoolValue.fromObject(obj.isNightMarketingEnabled) : undefined,
    }
  }
}

export interface DriverUpdatePreferencesResult {
  preferences?: DriverPreferencesDTO;
}

export namespace DriverUpdatePreferencesResult {
  export function fromObject(obj: any): DriverUpdatePreferencesResult {
    return {
      ...obj,
      preferences: obj.preferences != null ? DriverPreferencesDTO.fromObject(obj.preferences) : undefined,
    }
  }
}
