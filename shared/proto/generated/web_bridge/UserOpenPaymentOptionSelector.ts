/* eslint-disable */
import { StringValue } from '../wrappers';


export interface UserOpenPaymentOptionSelectorParams {
  /**
   *  이미 선택 된 payment method id, null이면 선택 안한 상태
   */
  paymentMethodId?: StringValue;
  /**
   *  이미 선택 된 payment option id, null이면 선택 안한 상태
   */
  paymentProfileId?: StringValue;
}

export namespace UserOpenPaymentOptionSelectorParams {
  export function fromObject(obj: any): UserOpenPaymentOptionSelectorParams {
    return {
      ...obj,
      paymentMethodId: obj.paymentMethodId != null ? StringValue.fromObject(obj.paymentMethodId) : undefined,
      paymentProfileId: obj.paymentProfileId != null ? StringValue.fromObject(obj.paymentProfileId) : undefined,
    }
  }
}

export interface UserOpenPaymentOptionSelectorResult {
  /**
   *  null 이면 미선택이다.
   */
  option?: UserOpenPaymentOptionSelectorResult.PaymentOption;
  hasBusinessProfile: boolean;
}

export namespace UserOpenPaymentOptionSelectorResult {
  export function fromObject(obj: any): UserOpenPaymentOptionSelectorResult {
    return {
      ...obj,
      option: obj.option != null ? UserOpenPaymentOptionSelectorResult.PaymentOption.fromObject(obj.option) : undefined,
    }
  }

  export interface PaymentOption {
    profileName: string;
    methodName: string;
    methodId: string;
    profileId: string;
    profileType?: UserOpenPaymentOptionSelectorResult.PaymentOption.ProfileType;
  }

  export namespace PaymentOption {
    export function fromObject(obj: any): PaymentOption {
      return {
        ...obj,
        profileType: UserOpenPaymentOptionSelectorResult.PaymentOption.ProfileType_fromString(obj.profileType),
      }
    }

    export type ProfileType = 'PERSONAL' | 'BUSINESS';

    export function ProfileType_fromString(str: string): ProfileType | undefined {
      switch (str) {
        case "PERSONAL":
        case "BUSINESS":
        return str
        default: return undefined
      }
    }
  }
}
