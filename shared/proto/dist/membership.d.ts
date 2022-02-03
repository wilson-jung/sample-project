import { PaymentMethodDTO } from './common';
import { UserSubscriptionDTO } from './user_subscription';
import { Timestamp } from './timestamp';
import { BoolValue } from './wrappers';
export interface UserMembershipProductDTO {
    id: string;
    price: number;
    monthlyPrice: number;
    identifier?: UserMembershipProductDTO.ProductIdentifier;
    /**
     *  혜택 패키지 타입
     */
    benefitPackageType?: UserMembershipProductDTO.BenefitPackageType;
    /**
     *  라이트 첫 달 20% 할인 프로모션 적용 여부
     */
    litePromotionIncluded: boolean;
}
export declare namespace UserMembershipProductDTO {
    function fromObject(obj: any): UserMembershipProductDTO;
    /**
     * PASSPORT_202106_TADA :
       *  타다 쿠폰 더 많이 주는 상품
     * PASSPORT_202106_SOCAR :
       *  쏘카 쿠폰 더 많이 주는 상품
     */
    type ProductIdentifier = 'UNKNOWN_PRODUCT_IDENTIFIER' | 'PASSPORT_202106_TADA' | 'PASSPORT_202106_SOCAR';
    function ProductIdentifier_fromString(str: string): ProductIdentifier | undefined;
    /**
     * WELCOME :
       *  웰컴 기프트 (1회차 혜택)
     * GIFT :
       *  기프트 패키지 (2회차 이상 혜택)
     */
    type BenefitPackageType = 'UNKNOWN' | 'WELCOME' | 'GIFT';
    function BenefitPackageType_fromString(str: string): BenefitPackageType | undefined;
}
export interface UserMembershipDTO {
    id: string;
    /**
     *  현재 적용 중인 혜택의 상품 identifier
     */
    productIdentifier?: UserMembershipProductDTO.ProductIdentifier;
    /**
     *  타다/쏘카 중 어디서 구매되었는지를 나타낸다.
     */
    source?: UserMembershipDTO.UserMembershipSource;
    /**
     *  다음 정기 결제에 쓰일 결제 수단
     *  optional (쏘카에서 구독한 경우에는 없음)
     */
    paymentMethod?: PaymentMethodDTO;
    /**
     *  다음 결제일에 결제가 예정되어있는지, 아니면 해지해서 예정되어있지 않은지를 나타낸다.
     */
    userSubscriptionStatus?: UserSubscriptionDTO.Status;
    /**
     *  현재 구독이 몇 회차인지 나타낸다.
     */
    renewalCount: number;
    /**
     *  구독 시작일
     */
    validAfter?: Timestamp;
    /**
     *  구독 만료일
     *  다음 결제일은 user_subscription_status 랑 expires_at 가지고 판단해서 보여준다.
     */
    expiresAt?: Timestamp;
    /**
     *  혜택 타입
     */
    benefitPackageType?: UserMembershipProductDTO.BenefitPackageType;
    /**
     *  라이트 첫 달 20% 할인 프로모션 적용 여부
     */
    litePromotionIncluded: boolean;
    /**
     *  갱신 유예 여부
     */
    deactivationDelayed: boolean;
    /**
     *  환불 가능 여부 (타다에서 구입한 경우에만 있음)
     */
    refundAvailable?: BoolValue;
    /**
     *  유저의 휴대폰 번호
     */
    phoneNumber: string;
    /**
     *  연동 여부
     */
    membershipSynced: boolean;
    /**
     *  쏘카 앱으로 연결되는 deeplink
     */
    socarSyncDeeplink: string;
}
export declare namespace UserMembershipDTO {
    function fromObject(obj: any): UserMembershipDTO;
    type UserMembershipSource = 'UNKNOWN' | 'VCNC' | 'SOCAR';
    function UserMembershipSource_fromString(str: string): UserMembershipSource | undefined;
}
