import { StringValue } from '../wrappers';
export interface UserGetSignUpStatusParams {
}
export declare namespace UserGetSignUpStatusParams {
    function fromObject(obj: any): UserGetSignUpStatusParams;
}
export interface UserGetSignUpStatusResult {
    /**
     *  쿠폰 툴팁 텍스트
     *  변수명과는 다르게 가입 시 지급되는 쿠폰과 관련없는 문구가 내려갈 수도 있다.
     *  ex) "서울, 부산, 성남 어디든"
     */
    couponTooltipText?: StringValue;
}
export declare namespace UserGetSignUpStatusResult {
    function fromObject(obj: any): UserGetSignUpStatusResult;
}
