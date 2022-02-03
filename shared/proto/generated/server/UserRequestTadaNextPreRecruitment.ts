/* eslint-disable */
import { EventRecruitmentDTO } from '../common';


export interface UserRequestTadaNextPreRecruitmentParams {
}

export namespace UserRequestTadaNextPreRecruitmentParams {
  export function fromObject(obj: any): UserRequestTadaNextPreRecruitmentParams {
    return {
      ...obj,
    }
  }
}

export interface UserRequestTadaNextPreRecruitmentResult {
  eventRecruitment?: EventRecruitmentDTO;
}

export namespace UserRequestTadaNextPreRecruitmentResult {
  export function fromObject(obj: any): UserRequestTadaNextPreRecruitmentResult {
    return {
      ...obj,
      eventRecruitment: obj.eventRecruitment != null ? EventRecruitmentDTO.fromObject(obj.eventRecruitment) : undefined,
    }
  }
}
