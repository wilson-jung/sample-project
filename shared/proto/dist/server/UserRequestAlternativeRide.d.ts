import { RideDTO } from '../ride';
export interface UserRequestAlternativeRideParams {
    alternativeRideSuggestionToken: string;
}
export declare namespace UserRequestAlternativeRideParams {
    function fromObject(obj: any): UserRequestAlternativeRideParams;
}
export interface UserRequestAlternativeRideResult {
    ride?: RideDTO;
}
export declare namespace UserRequestAlternativeRideResult {
    function fromObject(obj: any): UserRequestAlternativeRideResult;
}
