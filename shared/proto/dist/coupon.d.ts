import { Timestamp } from './timestamp';
import { StringValue, Int32Value } from './wrappers';
export interface CouponDTO {
    /**
     *  쿠폰 id
     */
    id: string;
    /**
     *  쿠폰 이름
     */
    name: string;
    /**
     *  유효 기간
     */
    validAfter?: Timestamp;
    expiresAt?: Timestamp;
    /**
     *  쿠폰 코드(혹은 입력한 값)
     */
    couponCode: string;
    /**
     *  쿠폰의 활성 상태. 주의: 이 값은 쿠폰 리스트에서만 의미가 있습니다.
     */
    isActive: boolean;
    /**
     *  쿠폰을 사용 가능한 Ride 와 Trip 의 type
     */
    availableTypes: string[];
    /**
     *  쿠폰의 사용 조건
     *  ex) "5000원 이상 결제 시"
     *  ex) "신한 카드로 결제시"
     */
    conditionText?: StringValue;
    /**
     *  할인되는 종류(DISCOUNT_RATE, DISCOUNT_AMOUNT)
     */
    benefitType?: CouponDTO.BenefitType;
    /**
     *  할인 정보(양수로 내려갑니다. 클라에서 필요할 때 - 붙여주시면 됩니다.)
     *  DISCOUNT_RATE일때는 퍼센트(ex. 70%인 경우 70)가 내려갑니다.
     *  DISCOUNT_AMOUNT일 때에는 할인되는 금액이 내려갑니다.
     *
     *  조건에 상관없이 가격이 동일한 경우, minBenefitAmount 와 maxBenefitAmount 가 동일하게 내려갑니다.
     */
    minBenefitAmount: number;
    maxBenefitAmount: number;
    /**
     *  RideCouponDTO 를 대체하기 위해 존재하는 필드
     */
    benefitAmount: number;
    /**
     *  잔여 사용 가능 횟수
     */
    remainingUseCount?: Int32Value;
    /**
     *  총 사용 가능 횟수
     *  null이면 무제한으로 사용 가능한 쿠폰이다.
     *  항상 null 또는 1 이상의 값이 내려간다.
     */
    totalUseCount?: Int32Value;
}
export declare namespace CouponDTO {
    function fromObject(obj: any): CouponDTO;
    type BenefitType = 'DISCOUNT_RATE' | 'DISCOUNT_AMOUNT' | 'DISCOUNT_FIXED';
    function BenefitType_fromString(str: string): BenefitType | undefined;
}
