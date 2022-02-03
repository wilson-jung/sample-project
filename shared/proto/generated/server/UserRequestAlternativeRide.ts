/* eslint-disable */
import { RideDTO } from '../ride';


export interface UserRequestAlternativeRideParams {
  alternativeRideSuggestionToken: string;
}

export namespace UserRequestAlternativeRideParams {
  export function fromObject(obj: any): UserRequestAlternativeRideParams {
    return {
      ...obj,
    }
  }
}

export interface UserRequestAlternativeRideResult {
  ride?: RideDTO;
}

export namespace UserRequestAlternativeRideResult {
  export function fromObject(obj: any): UserRequestAlternativeRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
