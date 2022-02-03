import { UserVehicleDTO } from '../common';
export interface UserListUserVehiclesParams {
}
export declare namespace UserListUserVehiclesParams {
    function fromObject(obj: any): UserListUserVehiclesParams;
}
export interface UserListUserVehiclesResult {
    vehicles: UserVehicleDTO[];
}
export declare namespace UserListUserVehiclesResult {
    function fromObject(obj: any): UserListUserVehiclesResult;
}
