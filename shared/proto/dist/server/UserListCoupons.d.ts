import { StringValue, Int32Value } from '../wrappers';
import { AddressedLocation } from '../common';
import { CouponDTO } from '../coupon';
/**
 *  아래 값들은 쿠폰 사용 가능 조건을 판단하기 위해 넣어준다. 아는 것만 넣어주면 된다.
 */
export interface UserListCouponsParams {
    /**
     *  rideType 이 존재할 경우 실시간 호출에 사용할 수 있는 쿠폰만 활성화됩니다.
     */
    rideType?: StringValue;
    /**
     *  Trip 서버에서 필요한 parameters
     *  클라이언트는 웹뷰에서 받은대로 서버로 넘기면 된다.
     *  존재하는 경우 예약 호출에 사용할 수 있는 쿠폰만 활성화됩니다.
     */
    tripParameters?: StringValue;
    origin?: AddressedLocation;
    destination?: AddressedLocation;
    /**
     *  햄버거 뷰에서는 설정되지 않는다.
     */
    paymentMethodId?: StringValue;
    paymentProfileId?: StringValue;
    /**
     *  한번에 내려줄 쿠폰의 수. limit이 있을 때만 페이지로 쪼개서 내려간다.
     */
    limit?: Int32Value;
    nextToken?: StringValue;
    /**
     *  true 일 경우 새 쿠폰을 표시하는 붉은 뱃지가 없어지지 않습니다.
     */
    glimpse: boolean;
}
export declare namespace UserListCouponsParams {
    function fromObject(obj: any): UserListCouponsParams;
}
export interface UserListCouponsResult {
    coupons: CouponDTO[];
    /**
     *  다음 페이지가 있을 때 내려간다.
     */
    nextToken?: StringValue;
    /**
     *  패스포트 넛지 쿠폰
     *  패스포트 넛지 쿠폰이 내려오면 쿠폰뷰에서 패스포트 넛지 쿠폰을 처리 해주어야 합니다.
     */
    passportMembershipNudgeCoupon?: UserListCouponsResult.PassportMembershipNudgeCoupon;
    /**
     *  쏘카 패스포트 넛지
     *  쏘카 패스포트 넛지가 내려오면 쿠폰함에서 쏘카 패스포트 넛지 처리를 해주어야 합니다.
     */
    socarPassportMembershipNudge?: UserListCouponsResult.SocarPassportMembershipNudge;
}
export declare namespace UserListCouponsResult {
    function fromObject(obj: any): UserListCouponsResult;
    interface PassportMembershipNudgeCoupon {
        /**
         *  넛지 문구 제목 ex) 패스포트 멤버십 전용 쿠폰
         */
        title: string;
        /**
         *  넛지 문구 내용 ex) 지금 패스포트 가입하면 7만원 쿠폰 혜택을 바로 드려요!
         */
        description: string;
        /**
         *  버튼 문구 ex) 혜택 보기
         */
        buttonText: string;
        /**
         *  혜택 쿠폰 태그 문구 ex) 패스포트
         */
        tagTexts: string[];
        /**
         *  멤버십 넛지 쿠폰의 위치를 나타냅니다.
         *  순서는 0부터 시작합니다.
         *  ex) index == 0 --> 첫 번째
         *      index == 2 --> 세 번째
         */
        index: number;
        url: string;
        logKey: string;
    }
    namespace PassportMembershipNudgeCoupon {
        function fromObject(obj: any): PassportMembershipNudgeCoupon;
    }
    interface SocarPassportMembershipNudge {
        /**
         *  넛지 문구 내용 ex) 패스포트 멤버십 혜택\n[b]쏘카 50% 쿠폰 사용하기[/b]
         */
        description: string;
        url: string;
        logKey: string;
    }
    namespace SocarPassportMembershipNudge {
        function fromObject(obj: any): SocarPassportMembershipNudge;
    }
}
