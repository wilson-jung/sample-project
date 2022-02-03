import { RideDTO } from '../ride';
export interface UserUpdatePaymentMethodOfRideParams {
    /**
     *  payment method를 변경하고 싶은 Ride의 id.
     */
    rideId: string;
    /**
     *  변경할 payment method의 id.
     */
    paymentMethodId: string;
}
export declare namespace UserUpdatePaymentMethodOfRideParams {
    function fromObject(obj: any): UserUpdatePaymentMethodOfRideParams;
}
export interface UserUpdatePaymentMethodOfRideResult {
    /**
     *  변경된 ride를 내려준다.
     */
    ride?: RideDTO;
}
export declare namespace UserUpdatePaymentMethodOfRideResult {
    function fromObject(obj: any): UserUpdatePaymentMethodOfRideResult;
}
