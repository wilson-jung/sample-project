import { BoolValue } from '../wrappers';
export interface UserGetRideCurrentFeeParams {
    rideId: string;
}
export declare namespace UserGetRideCurrentFeeParams {
    function fromObject(obj: any): UserGetRideCurrentFeeParams;
}
export interface UserGetRideCurrentFeeResult {
    currentFeeKrw: number;
    /**
     *  sec
     */
    nextUpdateInterval: number;
    taxiSurgeType?: UserGetRideCurrentFeeResult.TaxiSurgeType;
    isGpsUnavailable?: BoolValue;
}
export declare namespace UserGetRideCurrentFeeResult {
    function fromObject(obj: any): UserGetRideCurrentFeeResult;
    /**
     * NONE :
       *  핧증 없음
     * TAXI_REGION_SURGE :
       *  시계외 할증
     * NIGHT_SURGE :
       *  야간 할증
     * COMPOUND_SURGE :
       *  복합 할증
     */
    type TaxiSurgeType = 'NONE' | 'TAXI_REGION_SURGE' | 'NIGHT_SURGE' | 'COMPOUND_SURGE';
    function TaxiSurgeType_fromString(str: string): TaxiSurgeType | undefined;
}
