import { StringValue } from '../wrappers';
export interface DriverReviewTripParams {
    tripId: string;
    /**
     *  좋아요 : 0, 싫어요 : -1
     */
    tripRating: number;
    reason?: StringValue;
    tripRatingTags: DriverReviewTripParams.TripRatingTag[];
}
export declare namespace DriverReviewTripParams {
    function fromObject(obj: any): DriverReviewTripParams;
    /**
     * CUSTOM :
       *  기타 (직접입력)
     * LONG_WAITING :
       *  과도한 대기시간 발생
     * RUDE_ATTITUDE :
       *  하대하는 언행 (갑질)
     * REQUEST_ILLEGAL :
       *  법규위반 요구 (과속, 신호위반 등)
     * SMOKING :
       *  차내 흡연
     * INGESTION :
       *  음식물 섭취
     * GARBAGE_DUMPING :
       *  쓰레기 투기 (더럽게 쓰는 경우)
     * NOISY :
       *  차내 소란
     * NO_MASK :
       *  마스크 착용하지 않음
     */
    type TripRatingTag = 'CUSTOM' | 'LONG_WAITING' | 'RUDE_ATTITUDE' | 'REQUEST_ILLEGAL' | 'SMOKING' | 'INGESTION' | 'GARBAGE_DUMPING' | 'NOISY' | 'NO_MASK';
    function TripRatingTag_fromString(str: string): TripRatingTag | undefined;
}
export interface DriverReviewTripResult {
}
export declare namespace DriverReviewTripResult {
    function fromObject(obj: any): DriverReviewTripResult;
}
