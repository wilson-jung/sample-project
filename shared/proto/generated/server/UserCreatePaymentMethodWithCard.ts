/* eslint-disable */
import { PaymentMethodDTO } from '../common';


export interface UserCreatePaymentMethodWithCardParams {
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
   *  카드 종류. 법인 혹은 개인. (common.proto의 PaymentMethodDTO 참조)
   */
  cardType?: PaymentMethodDTO.CardType;
  /**
   *  카드 종류에 따라 생년월일(yyyymmdd) 혹은 사업자등록번호를 올려주는 필드
   *  생년월일: 카드 종류가 개인 혹은 기명 법인카드인 경우. yymmdd 형식으로 올려준다.
   *  사업자등록번호: 카드 종류가 무기명 법인일 경우
   */
  certificationNumber: string;
}

export namespace UserCreatePaymentMethodWithCardParams {
  export function fromObject(obj: any): UserCreatePaymentMethodWithCardParams {
    return {
      ...obj,
      cardExpiry: obj.cardExpiry != null ? PaymentMethodDTO.CardExpiry.fromObject(obj.cardExpiry) : undefined,
      cardType: PaymentMethodDTO.CardType_fromString(obj.cardType),
    }
  }
}

export interface UserCreatePaymentMethodWithCardResult {
  paymentMethod?: PaymentMethodDTO;
}

export namespace UserCreatePaymentMethodWithCardResult {
  export function fromObject(obj: any): UserCreatePaymentMethodWithCardResult {
    return {
      ...obj,
      paymentMethod: obj.paymentMethod != null ? PaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
    }
  }
}
