import { RideDTO } from '../ride';
export interface DriverCompleteRideAccidentReportParams {
    rideId: string;
}
export declare namespace DriverCompleteRideAccidentReportParams {
    function fromObject(obj: any): DriverCompleteRideAccidentReportParams;
}
export interface DriverCompleteRideAccidentReportResult {
    ride?: RideDTO;
}
export declare namespace DriverCompleteRideAccidentReportResult {
    function fromObject(obj: any): DriverCompleteRideAccidentReportResult;
}
