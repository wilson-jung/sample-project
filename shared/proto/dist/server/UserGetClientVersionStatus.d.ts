import { StringValue } from '../wrappers';
export interface UserGetClientVersionStatusParams {
}
export declare namespace UserGetClientVersionStatusParams {
    function fromObject(obj: any): UserGetClientVersionStatusParams;
}
export interface UserGetClientVersionStatusResult {
    status?: UserGetClientVersionStatusResult.Status;
    /**
     *  STABLE이 아닌 경우 강제 업데이트 및 업데이트 권장 사유가 내려온다.
     *  클라이언트에서는 이 문구를 알럿에 보여주면 된다.
     */
    message?: StringValue;
    /**
     *  현재의 가장 최신 안드로이드 클라이언트 버전
     */
    latestAndroidClientVersion: string;
    /**
     *  현재의 가장 최신 아이폰 클라이언트 버전
     */
    latestIosClientVersion: string;
}
export declare namespace UserGetClientVersionStatusResult {
    function fromObject(obj: any): UserGetClientVersionStatusResult;
    /**
     * STABLE :
       *  최신 버전 혹은 사용가능해서 업데이트가 필요하지 않은 버전인 경우
     * UPGRADE_RECOMMENDED :
       *  꼭 필요한건 아니지만 업데이트하면 새로운 기능을 쓸 수 있든지 해서 업데이트가 권장되는 경우
     * UPGRADE_NEEDED :
       *  현재 클라이언트 버전이 더 이상 유효하지 않아 강제 업데이트가 필요한 경우
     */
    type Status = 'STABLE' | 'UPGRADE_RECOMMENDED' | 'UPGRADE_NEEDED';
    function Status_fromString(str: string): Status | undefined;
}
