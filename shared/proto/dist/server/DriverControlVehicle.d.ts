import { SmartKeyCommand } from '../common';
export interface DriverControlVehicleParams {
    vehicleId: string;
    controlCommand?: SmartKeyCommand;
}
export declare namespace DriverControlVehicleParams {
    function fromObject(obj: any): DriverControlVehicleParams;
}
export interface DriverControlVehicleResult {
}
export declare namespace DriverControlVehicleResult {
    function fromObject(obj: any): DriverControlVehicleResult;
}
