import { TrackingIdentifiers } from '../common';
export interface DriverAuthenticateGigDriverParams {
    /**
     *  본인인증 토큰
     */
    identityCertificationToken: string;
    trackingIdentifiers?: TrackingIdentifiers;
}
export declare namespace DriverAuthenticateGigDriverParams {
    function fromObject(obj: any): DriverAuthenticateGigDriverParams;
}
/**
 *  발급된 AccessToken은 응답의 X-GRYPHON-SET-ACCESS-TOKEN 헤더에 넣어줍니다.
 *  클라이언트는 이 헤더를 조회하여 클라이언트 앱에 저장하여 사용해야합니다.
 *  일단 로그인이 되면 다른 앱에서는 자동으로 로그인이 풀립니다.
 */
export interface DriverAuthenticateGigDriverResult {
}
export declare namespace DriverAuthenticateGigDriverResult {
    function fromObject(obj: any): DriverAuthenticateGigDriverResult;
}