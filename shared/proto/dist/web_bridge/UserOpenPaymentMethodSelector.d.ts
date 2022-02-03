import { StringValue } from '../wrappers';
export interface UserOpenPaymentMethodSelectorParams {
    /**
     *  이미 선택 된 payment method id, null이면 선택 안한 상태
     */
    paymentMethodId?: StringValue;
}
export declare namespace UserOpenPaymentMethodSelectorParams {
    function fromObject(obj: any): UserOpenPaymentMethodSelectorParams;
}
export interface UserOpenPaymentMethodSelectorResult {
    /**
     *  null 이면 미선택이다.
     */
    method?: UserOpenPaymentMethodSelectorResult.PaymentMethod;
}
export declare namespace UserOpenPaymentMethodSelectorResult {
    function fromObject(obj: any): UserOpenPaymentMethodSelectorResult;
    interface PaymentMethod {
        id: string;
        name: string;
        /**
         * OneOf-method
         */
        card?: UserOpenPaymentMethodSelectorResult.PaymentMethod.Card;
        /**
         * OneOf-method
         */
        tossAppPay?: UserOpenPaymentMethodSelectorResult.PaymentMethod.TossAppPay;
    }
    namespace PaymentMethod {
        function fromObject(obj: any): PaymentMethod;
        type CardType = 'CORPORATION' | 'PERSONAL' | 'UNSPECIFIED';
        function CardType_fromString(str: string): CardType | undefined;
        type CardPartialNumberType = 'SUFFIX' | 'PREFIX';
        function CardPartialNumberType_fromString(str: string): CardPartialNumberType | undefined;
        interface Card {
            type?: UserOpenPaymentMethodSelectorResult.PaymentMethod.CardType;
            publisher: string;
            /**
             *  카드의 앞자리 혹은 뒷자리
             */
            partialNumber: string;
            partialNumberType?: UserOpenPaymentMethodSelectorResult.PaymentMethod.CardPartialNumberType;
        }
        namespace Card {
            function fromObject(obj: any): Card;
        }
        interface Bank {
            name: string;
        }
        namespace Bank {
            function fromObject(obj: any): Bank;
        }
        interface TossAppPay {
            /**
             * OneOf-method
             */
            bank?: UserOpenPaymentMethodSelectorResult.PaymentMethod.Bank;
            /**
             * OneOf-method
             */
            card?: UserOpenPaymentMethodSelectorResult.PaymentMethod.Card;
        }
        namespace TossAppPay {
            function fromObject(obj: any): TossAppPay;
        }
    }
}
