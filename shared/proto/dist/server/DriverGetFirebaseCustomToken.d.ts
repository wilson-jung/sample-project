import { Timestamp } from '../timestamp';
export interface DriverGetFirebaseCustomTokenParams {
}
export declare namespace DriverGetFirebaseCustomTokenParams {
    function fromObject(obj: any): DriverGetFirebaseCustomTokenParams;
}
export interface DriverGetFirebaseCustomTokenResult {
    customToken: string;
    /**
     *  새로 발급한 토큰이 언제까지 유효한지에 대한 정보
     *  일반적으로 발급한지 1시간동안만 유효하다.
     *  따라서 클라이언트는 발급받은지 1시간전에 새로 발급 요청을 해야한다.
     *  https://firebase.google.com/docs/auth/admin/create-custom-tokens
     */
    expiresAt?: Timestamp;
}
export declare namespace DriverGetFirebaseCustomTokenResult {
    function fromObject(obj: any): DriverGetFirebaseCustomTokenResult;
}
