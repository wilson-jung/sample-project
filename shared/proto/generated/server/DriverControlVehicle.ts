/* eslint-disable */
import { SmartKeyCommand, SmartKeyCommand_fromString } from '../common';


export interface DriverControlVehicleParams {
  vehicleId: string;
  controlCommand?: SmartKeyCommand;
}

export namespace DriverControlVehicleParams {
  export function fromObject(obj: any): DriverControlVehicleParams {
    return {
      ...obj,
      controlCommand: SmartKeyCommand_fromString(obj.controlCommand),
    }
  }
}

export interface DriverControlVehicleResult {
}

export namespace DriverControlVehicleResult {
  export function fromObject(obj: any): DriverControlVehicleResult {
    return {
      ...obj,
    }
  }
}
