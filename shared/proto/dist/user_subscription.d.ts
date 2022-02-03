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
export declare namespace UserSubscriptionBillingReceipt {
    function fromObject(obj: any): UserSubscriptionBillingReceipt;
}
export interface UserSubscriptionProductDTO {
    id: string;
    price: number;
    identifier?: UserSubscriptionProductDTO.ProductIdentifier;
}
export declare namespace UserSubscriptionProductDTO {
    function fromObject(obj: any): UserSubscriptionProductDTO;
    /**
     * PASSPORT_202106_TADA :
       *  타다 쿠폰 더 많이 주는 상품
     * PASSPORT_202106_SOCAR :
       *  쏘카 쿠폰 더 많이 주는 상품
     */
    type ProductIdentifier = 'UNKNOWN_PRODUCT_IDENTIFIER' | 'PASSPORT_202106_TADA' | 'PASSPORT_202106_SOCAR';
    function ProductIdentifier_fromString(str: string): ProductIdentifier | undefined;
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
export declare namespace UserSubscriptionDTO {
    function fromObject(obj: any): UserSubscriptionDTO;
    type Status = 'ACTIVE' | 'DEACTIVATED';
    function Status_fromString(str: string): Status | undefined;
    type DeactivatedReasonType = 'USER_REQUESTED' | 'PAY_FAILED' | 'PAY_TIMEOUT';
    function DeactivatedReasonType_fromString(str: string): DeactivatedReasonType | undefined;
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
export declare namespace UserSubscriptionBillingDTO {
    function fromObject(obj: any): UserSubscriptionBillingDTO;
    type Status = 'COMPLETED' | 'FAILED' | 'REFUNDED';
    function Status_fromString(str: string): Status | undefined;
}
