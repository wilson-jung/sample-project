import { StringValue, Int32Value } from '../wrappers';
import { UserCompactRideDTO } from '../ride';
import { Image } from '../common';
export interface UserListUserCompactRidesParams {
    nextToken?: StringValue;
    limit?: Int32Value;
}
export declare namespace UserListUserCompactRidesParams {
    function fromObject(obj: any): UserListUserCompactRidesParams;
}
export interface UserListUserCompactRidesResult {
    rides: UserCompactRideDTO[];
    nextToken?: StringValue;
    /**
     *  유저가 넛지 대상인 경우 + nextToken 이 없을 경우에만(맨 윗부분 데이터를 가져올 경우) 값이 내려갑니다.
     */
    passportMembershipNudge?: UserListUserCompactRidesResult.PassportMembershipNudgeBanner;
}
export declare namespace UserListUserCompactRidesResult {
    function fromObject(obj: any): UserListUserCompactRidesResult;
    interface PassportMembershipNudgeBanner {
        image?: Image;
        /**
         *  넛지 문구 ex) 탈 때마다 최대 5% 적립!
         */
        description: string;
        /**
         *  추가적으로 다른 글자색을 가진 문구 내려줄 때 사용 ex) 패스포트 멤버십 혜택 보기 >
         */
        highlightDescription?: StringValue;
        url: string;
        logKey: string;
    }
    namespace PassportMembershipNudgeBanner {
        function fromObject(obj: any): PassportMembershipNudgeBanner;
    }
}
