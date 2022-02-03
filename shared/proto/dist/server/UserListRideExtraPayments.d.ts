import { RideReceipt, RidePaymentMethodDTO, RidePaymentProfileDTO } from '../ride';
export interface UserListRideExtraPaymentsParams {
    rideId: string;
}
export declare namespace UserListRideExtraPaymentsParams {
    function fromObject(obj: any): UserListRideExtraPaymentsParams;
}
export interface UserListRideExtraPaymentsResult {
    extraPayments: UserListRideExtraPaymentsResult.RideExtraPaymentDTO[];
}
export declare namespace UserListRideExtraPaymentsResult {
    function fromObject(obj: any): UserListRideExtraPaymentsResult;
    interface RideExtraPaymentDTO {
        receipt?: RideReceipt;
        paymentMethod?: RidePaymentMethodDTO;
        paymentProfile?: RidePaymentProfileDTO;
        type?: UserListRideExtraPaymentsResult.RideExtraPaymentDTO.Type;
    }
    namespace RideExtraPaymentDTO {
        function fromObject(obj: any): RideExtraPaymentDTO;
        type Type = 'DEFAULT' | 'TIP';
        function Type_fromString(str: string): Type | undefined;
    }
}
