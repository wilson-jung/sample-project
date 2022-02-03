import { Int32Value } from '../wrappers';
import { TripDTO } from '../trip';
export interface DriverChargeTripAdditionalFeeParams {
    tripId: string;
    /**
     *  드라이버가 입력한 톨게이트 비용
     */
    tollgateFee?: Int32Value;
    /**
     *  드라이버가 입력한 주차장 비용
     */
    parkingFee?: Int32Value;
}
export declare namespace DriverChargeTripAdditionalFeeParams {
    function fromObject(obj: any): DriverChargeTripAdditionalFeeParams;
}
export interface DriverChargeTripAdditionalFeeResult {
    trip?: TripDTO;
}
export declare namespace DriverChargeTripAdditionalFeeResult {
    function fromObject(obj: any): DriverChargeTripAdditionalFeeResult;
}
