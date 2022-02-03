/* eslint-disable */
import { StringValue, Int32Value } from '../wrappers';
import { TripDTO } from '../trip';


export interface DriverListTripsParams {
  nextToken?: StringValue;
  limit?: Int32Value;
}

export namespace DriverListTripsParams {
  export function fromObject(obj: any): DriverListTripsParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
    }
  }
}

export interface DriverListTripsResult {
  trips: TripDTO[];
  nextToken?: StringValue;
}

export namespace DriverListTripsResult {
  export function fromObject(obj: any): DriverListTripsResult {
    return {
      ...obj,
      trips: obj.trips.map((v: any) => TripDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}
