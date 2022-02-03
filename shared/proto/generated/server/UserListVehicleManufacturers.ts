/* eslint-disable */

export interface UserListVehicleManufacturersParams {
}

export namespace UserListVehicleManufacturersParams {
  export function fromObject(obj: any): UserListVehicleManufacturersParams {
    return {
      ...obj,
    }
  }
}

export interface UserListVehicleManufacturersResult {
  manufacturers: string[];
}

export namespace UserListVehicleManufacturersResult {
  export function fromObject(obj: any): UserListVehicleManufacturersResult {
    return {
      ...obj,
    }
  }
}
