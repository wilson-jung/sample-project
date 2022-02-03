/* eslint-disable */
import { UserPreferencesDTO } from '../common';


export interface UserGetPreferencesParams {
}

export namespace UserGetPreferencesParams {
  export function fromObject(obj: any): UserGetPreferencesParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetPreferencesResult {
  preferences?: UserPreferencesDTO;
}

export namespace UserGetPreferencesResult {
  export function fromObject(obj: any): UserGetPreferencesResult {
    return {
      ...obj,
      preferences: obj.preferences != null ? UserPreferencesDTO.fromObject(obj.preferences) : undefined,
    }
  }
}
