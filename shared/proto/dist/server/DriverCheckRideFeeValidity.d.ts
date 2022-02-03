export interface DriverCheckRideFeeValidityParams {
    rideId: string;
    /**
     *  드라이버가 입력한 택시 사용료
     */
    usageFee: number;
    /**
     *  드라이버가 입력한 톨게이트 비용
     */
    tollgateFee: number;
}
export declare namespace DriverCheckRideFeeValidityParams {
    function fromObject(obj: any): DriverCheckRideFeeValidityParams;
}
export interface DriverCheckRideFeeValidityResult {
}
export declare namespace DriverCheckRideFeeValidityResult {
    function fromObject(obj: any): DriverCheckRideFeeValidityResult;
}
