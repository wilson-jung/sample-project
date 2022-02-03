/* eslint-disable */
import { Int32Value } from './wrappers';
import { PaymentMethodDTO } from './common';
import { Timestamp } from './timestamp';


export interface UserSubscriptionBillingReceipt {
  /**
   *  가격
   */
  price: number;
  /**
   *  환불된 가격 (환불된 경우에만 내려간다.)
   */
  refundAmount?: Int32Value;
  /**
   *  가격 - 환불된 가격
   */
  total: number;
}

export namespace UserSubscriptionBillingReceipt {
  export function fromObject(obj: any): UserSubscriptionBillingReceipt {
    return {
      ...obj,
      refundAmount: obj.refundAmount != null ? Int32Value.fromObject(obj.refundAmount) : undefined,
    }
  }
}

export interface UserSubscriptionProductDTO {
  id: string;
  price: number;
  identifier?: UserSubscriptionProductDTO.ProductIdentifier;
}

export namespace UserSubscriptionProductDTO {
  export function fromObject(obj: any): UserSubscriptionProductDTO {
    return {
      ...obj,
      identifier: UserSubscriptionProductDTO.ProductIdentifier_fromString(obj.identifier),
    }
  }

  /**
   * PASSPORT_202106_TADA : 
     *  타다 쿠폰 더 많이 주는 상품
   * PASSPORT_202106_SOCAR : 
     *  쏘카 쿠폰 더 많이 주는 상품
   */
  export type ProductIdentifier = 'UNKNOWN_PRODUCT_IDENTIFIER' | 'PASSPORT_202106_TADA' | 'PASSPORT_202106_SOCAR';

  export function ProductIdentifier_fromString(str: string): ProductIdentifier | undefined {
    switch (str) {
      case "UNKNOWN_PRODUCT_IDENTIFIER":
      case "PASSPORT_202106_TADA":
      case "PASSPORT_202106_SOCAR":
      return str
      default: return undefined
    }
  }
}

export interface UserSubscriptionDTO {
  id: string;
  /**
   *  구독상품 이름
   */
  subscriptionProductName: string;
  /**
   *  다음 정기 결제에 쓰일 결제 수단
   */
  paymentMethod?: PaymentMethodDTO;
  status?: UserSubscriptionDTO.Status;
  /**
   *  가장 최근에 결제된 subscription의 billing이 몇 회차인지 나타낸다.
   */
  totalBillingCount: number;
  /**
   *  구독이 해지된 이유
   */
  deactivatedReasonType?: UserSubscriptionDTO.DeactivatedReasonType;
  /**
   *  현재 유효한 billing. 현재 이용 중인 상품의 이용기간 등을 표시할 때 사용된다.
   */
  currentBilling?: UserSubscriptionBillingDTO;
  /**
   *  다음 결제일
   */
  nextBillingCreateAt?: Timestamp;
  /**
   *  현재 적용 중인 혜택의 상품 identifier (PASSPORT_202106_TADA, PASSPORT_202106_SOCAR)
   */
  currentProductIdentifier?: UserSubscriptionProductDTO.ProductIdentifier;
}

export namespace UserSubscriptionDTO {
  export function fromObject(obj: any): UserSubscriptionDTO {
    return {
      ...obj,
      paymentMethod: obj.paymentMethod != null ? PaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
      status: UserSubscriptionDTO.Status_fromString(obj.status),
      deactivatedReasonType: UserSubscriptionDTO.DeactivatedReasonType_fromString(obj.deactivatedReasonType),
      currentBilling: obj.currentBilling != null ? UserSubscriptionBillingDTO.fromObject(obj.currentBilling) : undefined,
      nextBillingCreateAt: obj.nextBillingCreateAt != null ? Timestamp.fromObject(obj.nextBillingCreateAt) : undefined,
      currentProductIdentifier: UserSubscriptionProductDTO.ProductIdentifier_fromString(obj.currentProductIdentifier),
    }
  }

  export type Status = 'ACTIVE' | 'DEACTIVATED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "ACTIVE":
      case "DEACTIVATED":
      return str
      default: return undefined
    }
  }

  export type DeactivatedReasonType = 'USER_REQUESTED' | 'PAY_FAILED' | 'PAY_TIMEOUT';

  export function DeactivatedReasonType_fromString(str: string): DeactivatedReasonType | undefined {
    switch (str) {
      case "USER_REQUESTED":
      case "PAY_FAILED":
      case "PAY_TIMEOUT":
      return str
      default: return undefined
    }
  }
}

export interface UserSubscriptionBillingDTO {
  id: string;
  /**
   *  구독상품 이름
   */
  subscriptionProductName: string;
  /**
   *  결제되었던 결제 수단
   */
  paymentMethod?: PaymentMethodDTO;
  status?: UserSubscriptionBillingDTO.Status;
  receipt?: UserSubscriptionBillingReceipt;
  /**
   *  해당 UserSubscription에 대해 몇 회차인지 나타낸다.
   */
  billingCount: number;
  /**
   *  이용기간 시작일
   */
  validAfter?: Timestamp;
  /**
   *  이용기간 종료일
   */
  expiresAt?: Timestamp;
  /**
   *  결제일
   */
  chargedAt?: Timestamp;
}

export namespace UserSubscriptionBillingDTO {
  export function fromObject(obj: any): UserSubscriptionBillingDTO {
    return {
      ...obj,
      paymentMethod: obj.paymentMethod != null ? PaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
      status: UserSubscriptionBillingDTO.Status_fromString(obj.status),
      receipt: obj.receipt != null ? UserSubscriptionBillingReceipt.fromObject(obj.receipt) : undefined,
      validAfter: obj.validAfter != null ? Timestamp.fromObject(obj.validAfter) : undefined,
      expiresAt: obj.expiresAt != null ? Timestamp.fromObject(obj.expiresAt) : undefined,
      chargedAt: obj.chargedAt != null ? Timestamp.fromObject(obj.chargedAt) : undefined,
    }
  }

  export type Status = 'COMPLETED' | 'FAILED' | 'REFUNDED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "COMPLETED":
      case "FAILED":
      case "REFUNDED":
      return str
      default: return undefined
    }
  }
}
