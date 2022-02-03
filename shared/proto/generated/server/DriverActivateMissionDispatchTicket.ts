/* eslint-disable */
import { MissionDispatchTicketDTO } from '../mission';


export interface DriverActivateMissionDispatchTicketParams {
  ticketId: string;
}

export namespace DriverActivateMissionDispatchTicketParams {
  export function fromObject(obj: any): DriverActivateMissionDispatchTicketParams {
    return {
      ...obj,
    }
  }
}

export interface DriverActivateMissionDispatchTicketResult {
  ticket?: MissionDispatchTicketDTO;
}

export namespace DriverActivateMissionDispatchTicketResult {
  export function fromObject(obj: any): DriverActivateMissionDispatchTicketResult {
    return {
      ...obj,
      ticket: obj.ticket != null ? MissionDispatchTicketDTO.fromObject(obj.ticket) : undefined,
    }
  }
}
