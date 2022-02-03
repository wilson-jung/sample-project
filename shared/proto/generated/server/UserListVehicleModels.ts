/* eslint-disable */


export interface UserListVehicleModelsParams {
  manufacturer: string;
}

export namespace UserListVehicleModelsParams {
  export function fromObject(obj: any): UserListVehicleModelsParams {
    return {
      ...obj,
    }
  }
}

export interface UserListVehicleModelsResult {
  manufacturer: string;
  models: UserListVehicleModelsResult.VehicleModel[];
}

export namespace UserListVehicleModelsResult {
  export function fromObject(obj: any): UserListVehicleModelsResult {
    return {
      ...obj,
      models: obj.models.map((v: any) => UserListVehicleModelsResult.VehicleModel.fromObject(v)),
    }
  }

  export interface VehicleModel {
    model: string;
    availableSeats: number[];
  }

  export namespace VehicleModel {
    export function fromObject(obj: any): VehicleModel {
      return {
        ...obj,
      }
    }
  }
}
