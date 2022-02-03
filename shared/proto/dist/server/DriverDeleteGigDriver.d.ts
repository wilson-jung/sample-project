export interface DriverDeleteGigDriverParams {
    type?: DriverDeleteGigDriverParams.DeletionReasonType;
    /**
     *  CUSTOM이 없는 경우 빈 문자열로 올려줍니다.
     */
    reason: string;
    /**
     *  본인인증
     */
    identityCertificationToken: string;
}
export declare namespace DriverDeleteGigDriverParams {
    function fromObject(obj: any): DriverDeleteGigDriverParams;
    /**
     * QUIT :
       *  대리운전업을 그만둠
     * OTHER_SERVICE :
       *  다른 대리서비스 이용
     * FEW_CALLS :
       *  콜 요청이 많지 않음
     * OPS_DISSATISFACTION :
       *  운영방식 불만
     * CUSTOM :
       *  기타 (직접 입력)
     */
    type DeletionReasonType = 'QUIT' | 'OTHER_SERVICE' | 'FEW_CALLS' | 'OPS_DISSATISFACTION' | 'CUSTOM';
    function DeletionReasonType_fromString(str: string): DeletionReasonType | undefined;
}
export interface DriverDeleteGigDriverResult {
}
export declare namespace DriverDeleteGigDriverResult {
    function fromObject(obj: any): DriverDeleteGigDriverResult;
}
