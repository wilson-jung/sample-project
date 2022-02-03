/* eslint-disable */
import { RideDTO } from '../ride';


export interface DriverCompleteRideAccidentReportParams {
  rideId: string;
}

export namespace DriverCompleteRideAccidentReportParams {
  export function fromObject(obj: any): DriverCompleteRideAccidentReportParams {
    return {
      ...obj,
    }
  }
}

export interface DriverCompleteRideAccidentReportResult {
  ride?: RideDTO;
}

export namespace DriverCompleteRideAccidentReportResult {
  export function fromObject(obj: any): DriverCompleteRideAccidentReportResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
