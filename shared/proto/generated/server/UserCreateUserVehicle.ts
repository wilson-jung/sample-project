/* eslint-disable */
import { UserVehicleDTO } from '../common';


export interface UserCreateUserVehicleParams {
  manufacturer: string;
  model: string;
  /**
   *  기어 종류
   */
  gearType?: UserVehicleDTO.GearType;
  licensePlate: string;
  seats: number;
}

export namespace UserCreateUserVehicleParams {
  export function fromObject(obj: any): UserCreateUserVehicleParams {
    return {
      ...obj,
      gearType: UserVehicleDTO.GearType_fromString(obj.gearType),
    }
  }
}

export interface UserCreateUserVehicleResult {
  vehicle?: UserVehicleDTO;
}

export namespace UserCreateUserVehicleResult {
  export function fromObject(obj: any): UserCreateUserVehicleResult {
    return {
      ...obj,
      vehicle: obj.vehicle != null ? UserVehicleDTO.fromObject(obj.vehicle) : undefined,
    }
  }
}
