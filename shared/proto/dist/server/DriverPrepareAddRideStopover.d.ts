export interface DriverPrepareAddRideStopoverParams {
    rideId: string;
}
export declare namespace DriverPrepareAddRideStopoverParams {
    function fromObject(obj: any): DriverPrepareAddRideStopoverParams;
}
export interface DriverPrepareAddRideStopoverResult {
    currentAddress: string;
    /**
     *  토큰은 5분간 유효하다.
     */
    addToken: string;
}
export declare namespace DriverPrepareAddRideStopoverResult {
    function fromObject(obj: any): DriverPrepareAddRideStopoverResult;
}
