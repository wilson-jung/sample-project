import { StringValue, BoolValue } from '../wrappers';
export interface UserReviewRideParams {
    rideId: string;
    rideRating: number;
    rideRatingTags: UserReviewRideParams.RideRatingTag[];
    reason?: StringValue;
    tip?: UserReviewRideParams.Tip;
    preventSameDriverMatching?: BoolValue;
    version?: UserReviewRideParams.RideReviewVersionValue;
}
export declare namespace UserReviewRideParams {
    function fromObject(obj: any): UserReviewRideParams;
    /**
     * CUSTOM :
       *  부정 태그
       *  기타 (직접입력)
     * UNKIND :
       *  불친절한 드라이버
     * WILD_DRIVING :
       *  급정거 및 급발진 (실시간 전용)
     * DETOUR :
       *  잘못된 길로 진입함
     * TOO_MUCH_TALKER :
       *  원치 않는 대화
     * UNCLEAN :
       *  담배 등 불쾌한 냄새
     * NO_GREETING :
       *  목적지 및 안전벨트 미확인
     * MONEY_DEMANDING :
       *  별점 및 서비스팁 요구
     * BAD_CLOTHING :
       *  단정하지 않은 복장
     * PHONE_USAGE :
       *  운행 중 휴대폰 사용
     * BYPASSING_ROUTE :
       *  경로 우회
     * LOW_QUALITY :
       *  타다 서비스에 걸맞지 않음 (대리에서 기본 태그)
     * DAERI_WILD_DRIVING :
       *  과속 및 불안한 주행 (대리 전용)
     * LONG_WAITING :
       *  긴 탑승 대기시간
     * NO_COMING_STARTING_POINT :
       *  출발지로 차가 오지 않음
     * COMFORTABLE_RIDE :
       *  긍정 태그
       *  편안한 운행
     * KIND :
       *  친절한 드라이버
     * CLEAN :
       *  쾌적한 차량 내부
     * RELAXED_MUSIC :
       *  차분한 음악
     */
    type RideRatingTag = 'CUSTOM' | 'UNKIND' | 'WILD_DRIVING' | 'DETOUR' | 'TOO_MUCH_TALKER' | 'UNCLEAN' | 'NO_GREETING' | 'MONEY_DEMANDING' | 'BAD_CLOTHING' | 'PHONE_USAGE' | 'BYPASSING_ROUTE' | 'LOW_QUALITY' | 'DAERI_WILD_DRIVING' | 'LONG_WAITING' | 'NO_COMING_STARTING_POINT' | 'COMFORTABLE_RIDE' | 'KIND' | 'CLEAN' | 'RELAXED_MUSIC';
    function RideRatingTag_fromString(str: string): RideRatingTag | undefined;
    /**
     *  하위호환성을 고려하여 nullable로 만든다.
     */
    interface RideReviewVersionValue {
        value?: UserReviewRideParams.RideReviewVersionValue.RideReviewVersion;
    }
    namespace RideReviewVersionValue {
        function fromObject(obj: any): RideReviewVersionValue;
        /**
         * V20211230 :
           *  해당 시점에 실제로 메인으로 사용하는 리뷰
         * V20211230_EXPERIMENT :
           *  실험 환경에서 작성된 리뷰는 _EXPERIMENT 를 접미어로 둔다
           *  동시에 여러 실험용 리뷰를 사용하면 V20211230_EXPERIMENT_A 이런식으로 알파벳을 추가하여 구분한다
           *  2021.12.30: 칭찬태그 추가, 불만태그 추가
         */
        type RideReviewVersion = 'V20211230' | 'V20211230_EXPERIMENT';
        function RideReviewVersion_fromString(str: string): RideReviewVersion | undefined;
    }
    interface Tip {
        amount: number;
        paymentMethodId: string;
        paymentProfileId: string;
    }
    namespace Tip {
        function fromObject(obj: any): Tip;
    }
}
export interface UserReviewRideResult {
    shouldAskAppSatisfaction?: BoolValue;
}
export declare namespace UserReviewRideResult {
    function fromObject(obj: any): UserReviewRideResult;
}
