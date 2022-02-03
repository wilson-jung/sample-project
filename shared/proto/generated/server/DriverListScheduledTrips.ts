/* eslint-disable */
import { StringValue, Int32Value } from '../wrappers';
import { TripDTO } from '../trip';


export interface DriverListScheduledTripsParams {
  nextToken?: StringValue;
  limit?: Int32Value;
}

export namespace DriverListScheduledTripsParams {
  export function fromObject(obj: any): DriverListScheduledTripsParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
    }
  }
}

export interface DriverListScheduledTripsResult {
  trips: TripDTO[];
  nextToken?: StringValue;
}

export namespace DriverListScheduledTripsResult {
  export function fromObject(obj: any): DriverListScheduledTripsResult {
    return {
      ...obj,
      trips: obj.trips.map((v: any) => TripDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}
