/* eslint-disable */
import { PaymentMethodDTO, DriverPaymentMethodDTO } from '../common';


export interface DriverCreatePaymentMethodWithCardParams {
  /**
   *  카드 번호 (아맥스는 15자, 다이너스 클럽은 14자, 나머지는 16자)
   */
  cardNumber: string;
  /**
   *  카드의 유효기간
   */
  cardExpiry?: PaymentMethodDTO.CardExpiry;
  /**
   *  비밀번호 앞 2자리
   */
  partialPassword: string;
  /**
   *  생년월일: yymmdd 형식으로 올려준다.
   */
  birthDate: string;
}

export namespace DriverCreatePaymentMethodWithCardParams {
  export function fromObject(obj: any): DriverCreatePaymentMethodWithCardParams {
    return {
      ...obj,
      cardExpiry: obj.cardExpiry != null ? PaymentMethodDTO.CardExpiry.fromObject(obj.cardExpiry) : undefined,
    }
  }
}

export interface DriverCreatePaymentMethodWithCardResult {
  paymentMethod?: DriverPaymentMethodDTO;
}

export namespace DriverCreatePaymentMethodWithCardResult {
  export function fromObject(obj: any): DriverCreatePaymentMethodWithCardResult {
    return {
      ...obj,
      paymentMethod: obj.paymentMethod != null ? DriverPaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
    }
  }
}
