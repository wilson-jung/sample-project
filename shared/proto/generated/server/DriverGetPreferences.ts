/* eslint-disable */
import { DriverPreferencesDTO } from '../common';


export interface DriverGetPreferencesParams {
}

export namespace DriverGetPreferencesParams {
  export function fromObject(obj: any): DriverGetPreferencesParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetPreferencesResult {
  preferences?: DriverPreferencesDTO;
}

export namespace DriverGetPreferencesResult {
  export function fromObject(obj: any): DriverGetPreferencesResult {
    return {
      ...obj,
      preferences: obj.preferences != null ? DriverPreferencesDTO.fromObject(obj.preferences) : undefined,
    }
  }
}
