import { Int32Value } from '../wrappers';
export interface UserOpenTripReviewParams {
    /**
     *  리뷰 요청할 trip id 정보
     */
    tripId: string;
}
export declare namespace UserOpenTripReviewParams {
    function fromObject(obj: any): UserOpenTripReviewParams;
}
export interface UserOpenTripReviewResult {
    /**
     *  측정된 점수, 점수 입력을 안했다면 값이 null
     */
    rating?: Int32Value;
}
export declare namespace UserOpenTripReviewResult {
    function fromObject(obj: any): UserOpenTripReviewResult;
}
