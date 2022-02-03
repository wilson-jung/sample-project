/* eslint-disable */
import { StringValue } from '../wrappers';


export interface UserOpenPaymentMethodSelectorParams {
  /**
   *  이미 선택 된 payment method id, null이면 선택 안한 상태
   */
  paymentMethodId?: StringValue;
}

export namespace UserOpenPaymentMethodSelectorParams {
  export function fromObject(obj: any): UserOpenPaymentMethodSelectorParams {
    return {
      ...obj,
      paymentMethodId: obj.paymentMethodId != null ? StringValue.fromObject(obj.paymentMethodId) : undefined,
    }
  }
}

export interface UserOpenPaymentMethodSelectorResult {
  /**
   *  null 이면 미선택이다.
   */
  method?: UserOpenPaymentMethodSelectorResult.PaymentMethod;
}

export namespace UserOpenPaymentMethodSelectorResult {
  export function fromObject(obj: any): UserOpenPaymentMethodSelectorResult {
    return {
      ...obj,
      method: obj.method != null ? UserOpenPaymentMethodSelectorResult.PaymentMethod.fromObject(obj.method) : undefined,
    }
  }

  export interface PaymentMethod {
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

  export namespace PaymentMethod {
    export function fromObject(obj: any): PaymentMethod {
      return {
        ...obj,
        card: obj.card != null ? UserOpenPaymentMethodSelectorResult.PaymentMethod.Card.fromObject(obj.card) : undefined,
        tossAppPay: obj.tossAppPay != null ? UserOpenPaymentMethodSelectorResult.PaymentMethod.TossAppPay.fromObject(obj.tossAppPay) : undefined,
      }
    }

    export type CardType = 'CORPORATION' | 'PERSONAL' | 'UNSPECIFIED';

    export function CardType_fromString(str: string): CardType | undefined {
      switch (str) {
        case "CORPORATION":
        case "PERSONAL":
        case "UNSPECIFIED":
        return str
        default: return undefined
      }
    }

    export type CardPartialNumberType = 'SUFFIX' | 'PREFIX';

    export function CardPartialNumberType_fromString(str: string): CardPartialNumberType | undefined {
      switch (str) {
        case "SUFFIX":
        case "PREFIX":
        return str
        default: return undefined
      }
    }

    export interface Card {
      type?: UserOpenPaymentMethodSelectorResult.PaymentMethod.CardType;
      publisher: string;
      /**
       *  카드의 앞자리 혹은 뒷자리
       */
      partialNumber: string;
      partialNumberType?: UserOpenPaymentMethodSelectorResult.PaymentMethod.CardPartialNumberType;
    }

    export namespace Card {
      export function fromObject(obj: any): Card {
        return {
          ...obj,
          type: UserOpenPaymentMethodSelectorResult.PaymentMethod.CardType_fromString(obj.type),
          partialNumberType: UserOpenPaymentMethodSelectorResult.PaymentMethod.CardPartialNumberType_fromString(obj.partialNumberType),
        }
      }
    }

    export interface Bank {
      name: string;
    }

    export namespace Bank {
      export function fromObject(obj: any): Bank {
        return {
          ...obj,
        }
      }
    }

    export interface TossAppPay {
      /**
       * OneOf-method
       */
      bank?: UserOpenPaymentMethodSelectorResult.PaymentMethod.Bank;
      /**
       * OneOf-method
       */
      card?: UserOpenPaymentMethodSelectorResult.PaymentMethod.Card;
    }

    export namespace TossAppPay {
      export function fromObject(obj: any): TossAppPay {
        return {
          ...obj,
          bank: obj.bank != null ? UserOpenPaymentMethodSelectorResult.PaymentMethod.Bank.fromObject(obj.bank) : undefined,
          card: obj.card != null ? UserOpenPaymentMethodSelectorResult.PaymentMethod.Card.fromObject(obj.card) : undefined,
        }
      }
    }
  }
}
