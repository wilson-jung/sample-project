import { RideDTO } from '../ride';
export interface UserRequestPriceAdjustedRideParams {
    rideId: string;
    adjustedPrice: number;
}
export declare namespace UserRequestPriceAdjustedRideParams {
    function fromObject(obj: any): UserRequestPriceAdjustedRideParams;
}
export interface UserRequestPriceAdjustedRideResult {
    ride?: RideDTO;
}
export declare namespace UserRequestPriceAdjustedRideResult {
    function fromObject(obj: any): UserRequestPriceAdjustedRideResult;
}
