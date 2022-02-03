import { MissionDispatchTicketDTO } from '../mission';
export interface DriverActivateMissionDispatchTicketParams {
    ticketId: string;
}
export declare namespace DriverActivateMissionDispatchTicketParams {
    function fromObject(obj: any): DriverActivateMissionDispatchTicketParams;
}
export interface DriverActivateMissionDispatchTicketResult {
    ticket?: MissionDispatchTicketDTO;
}
export declare namespace DriverActivateMissionDispatchTicketResult {
    function fromObject(obj: any): DriverActivateMissionDispatchTicketResult;
}
