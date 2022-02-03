/* eslint-disable */
import { UserVehicleDTO } from '../common';


export interface UserListUserVehiclesParams {
}

export namespace UserListUserVehiclesParams {
  export function fromObject(obj: any): UserListUserVehiclesParams {
    return {
      ...obj,
    }
  }
}

export interface UserListUserVehiclesResult {
  vehicles: UserVehicleDTO[];
}

export namespace UserListUserVehiclesResult {
  export function fromObject(obj: any): UserListUserVehiclesResult {
    return {
      ...obj,
      vehicles: obj.vehicles.map((v: any) => UserVehicleDTO.fromObject(v)),
    }
  }
}
