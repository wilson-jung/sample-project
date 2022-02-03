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
export declare namespace UserOpenPaymentOptionSelectorParams {
    function fromObject(obj: any): UserOpenPaymentOptionSelectorParams;
}
export interface UserOpenPaymentOptionSelectorResult {
    /**
     *  null 이면 미선택이다.
     */
    option?: UserOpenPaymentOptionSelectorResult.PaymentOption;
    hasBusinessProfile: boolean;
}
export declare namespace UserOpenPaymentOptionSelectorResult {
    function fromObject(obj: any): UserOpenPaymentOptionSelectorResult;
    interface PaymentOption {
        profileName: string;
        methodName: string;
        methodId: string;
        profileId: string;
        profileType?: UserOpenPaymentOptionSelectorResult.PaymentOption.ProfileType;
    }
    namespace PaymentOption {
        function fromObject(obj: any): PaymentOption;
        type ProfileType = 'PERSONAL' | 'BUSINESS';
        function ProfileType_fromString(str: string): ProfileType | undefined;
    }
}
