import { StringValue } from '../wrappers';
export interface UserReviewTripParams {
    tripId: string;
    tripRating: number;
    tripRatingTags: UserReviewTripParams.TripRatingTag[];
    reason?: StringValue;
    tip?: UserReviewTripParams.Tip;
}
export declare namespace UserReviewTripParams {
    function fromObject(obj: any): UserReviewTripParams;
    /**
     * CUSTOM :
       *  기타 (직접입력)
     * TOO_LATE :
       *  예약시간에 늦음
     * UNKIND :
       *  불친절한 태도
     * WILD_DRIVING :
       *  급정거 및 급발진
     * PHONE_USAGE :
       *  운행중 휴대폰사용
     * TOO_MUCH_TALKER :
       *  원치 않는 대화
     * DETOUR :
       *  잘못된 길로 진입함
     * UNCLEAN :
       *  담배 등 불쾌한 냄새
     * MONEY_DEMANDING :
       *  별점 및 서비스팁 요구
     * NO_GREETING :
       *  목적지 및 안전벨트 미확인
     */
    type TripRatingTag = 'CUSTOM' | 'TOO_LATE' | 'UNKIND' | 'WILD_DRIVING' | 'PHONE_USAGE' | 'TOO_MUCH_TALKER' | 'DETOUR' | 'UNCLEAN' | 'MONEY_DEMANDING' | 'NO_GREETING';
    function TripRatingTag_fromString(str: string): TripRatingTag | undefined;
    interface Tip {
        amount: number;
        paymentMethodId: string;
        paymentProfileId: string;
    }
    namespace Tip {
        function fromObject(obj: any): Tip;
    }
}
export interface UserReviewTripResult {
}
export declare namespace UserReviewTripResult {
    function fromObject(obj: any): UserReviewTripResult;
}
