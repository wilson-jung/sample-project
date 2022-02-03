/* eslint-disable */
import { StringValue, Int32Value } from '../wrappers';
import { RideDTO } from '../ride';


export interface UserListRidesParams {
  nextToken?: StringValue;
  limit?: Int32Value;
}

export namespace UserListRidesParams {
  export function fromObject(obj: any): UserListRidesParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
    }
  }
}

export interface UserListRidesResult {
  rides: RideDTO[];
  nextToken?: StringValue;
}

export namespace UserListRidesResult {
  export function fromObject(obj: any): UserListRidesResult {
    return {
      ...obj,
      rides: obj.rides.map((v: any) => RideDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}
