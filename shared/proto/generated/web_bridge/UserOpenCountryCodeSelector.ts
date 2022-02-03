/* eslint-disable */
import { StringValue } from '../wrappers';


export interface UserOpenCountryCodeSelectorParams {
}

export namespace UserOpenCountryCodeSelectorParams {
  export function fromObject(obj: any): UserOpenCountryCodeSelectorParams {
    return {
      ...obj,
    }
  }
}

export interface UserOpenCountryCodeSelectorResult {
  /**
   *  도중 취소시 null 리턴
   */
  countryCode?: StringValue;
}

export namespace UserOpenCountryCodeSelectorResult {
  export function fromObject(obj: any): UserOpenCountryCodeSelectorResult {
    return {
      ...obj,
      countryCode: obj.countryCode != null ? StringValue.fromObject(obj.countryCode) : undefined,
    }
  }
}
