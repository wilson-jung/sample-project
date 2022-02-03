/* eslint-disable */
import { MissionDispatchTicketCampaignDTO } from '../mission';


export interface DriverListMissionDispatchTicketCampaignsParams {
}

export namespace DriverListMissionDispatchTicketCampaignsParams {
  export function fromObject(obj: any): DriverListMissionDispatchTicketCampaignsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListMissionDispatchTicketCampaignsResult {
  campaigns: MissionDispatchTicketCampaignDTO[];
}

export namespace DriverListMissionDispatchTicketCampaignsResult {
  export function fromObject(obj: any): DriverListMissionDispatchTicketCampaignsResult {
    return {
      ...obj,
      campaigns: obj.campaigns.map((v: any) => MissionDispatchTicketCampaignDTO.fromObject(v)),
    }
  }
}
