/* eslint-disable */
import { RideReviewByUserDTO } from '../ride';


export interface UserGetRideReviewParams {
  rideId: string;
}

export namespace UserGetRideReviewParams {
  export function fromObject(obj: any): UserGetRideReviewParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetRideReviewResult {
  review?: RideReviewByUserDTO;
}

export namespace UserGetRideReviewResult {
  export function fromObject(obj: any): UserGetRideReviewResult {
    return {
      ...obj,
      review: obj.review != null ? RideReviewByUserDTO.fromObject(obj.review) : undefined,
    }
  }
}
