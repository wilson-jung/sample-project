import { StringValue, BoolValue } from '../wrappers';
import { RideDTO } from '../ride';
export interface UserUpdateDiscountOptionsOfRideParams {
    rideId: string;
    couponId?: StringValue;
    usesCredit?: BoolValue;
}
export declare namespace UserUpdateDiscountOptionsOfRideParams {
    function fromObject(obj: any): UserUpdateDiscountOptionsOfRideParams;
}
export interface UserUpdateDiscountOptionsOfRideResult {
    ride?: RideDTO;
}
export declare namespace UserUpdateDiscountOptionsOfRideResult {
    function fromObject(obj: any): UserUpdateDiscountOptionsOfRideResult;
}
