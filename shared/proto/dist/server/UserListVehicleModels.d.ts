export interface UserListVehicleModelsParams {
    manufacturer: string;
}
export declare namespace UserListVehicleModelsParams {
    function fromObject(obj: any): UserListVehicleModelsParams;
}
export interface UserListVehicleModelsResult {
    manufacturer: string;
    models: UserListVehicleModelsResult.VehicleModel[];
}
export declare namespace UserListVehicleModelsResult {
    function fromObject(obj: any): UserListVehicleModelsResult;
    interface VehicleModel {
        model: string;
        availableSeats: number[];
    }
    namespace VehicleModel {
        function fromObject(obj: any): VehicleModel;
    }
}
