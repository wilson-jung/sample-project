/* eslint-disable */
import { TripDTO } from '../trip';


export interface DriverNotifyTripRiderPickedUpParams {
  tripId: string;
}

export namespace DriverNotifyTripRiderPickedUpParams {
  export function fromObject(obj: any): DriverNotifyTripRiderPickedUpParams {
    return {
      ...obj,
    }
  }
}

export interface DriverNotifyTripRiderPickedUpResult {
  trip?: TripDTO;
}

export namespace DriverNotifyTripRiderPickedUpResult {
  export function fromObject(obj: any): DriverNotifyTripRiderPickedUpResult {
    return {
      ...obj,
      trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
    }
  }
}
