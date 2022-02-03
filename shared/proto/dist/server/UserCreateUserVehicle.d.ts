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
export declare namespace UserCreateUserVehicleParams {
    function fromObject(obj: any): UserCreateUserVehicleParams;
}
export interface UserCreateUserVehicleResult {
    vehicle?: UserVehicleDTO;
}
export declare namespace UserCreateUserVehicleResult {
    function fromObject(obj: any): UserCreateUserVehicleResult;
}
