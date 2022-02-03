/* eslint-disable */
import { EventRecruitmentDTO } from '../common';


export interface UserGetTadaNextPreRecruitmentStatusParams {
}

export namespace UserGetTadaNextPreRecruitmentStatusParams {
  export function fromObject(obj: any): UserGetTadaNextPreRecruitmentStatusParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetTadaNextPreRecruitmentStatusResult {
  status?: EventRecruitmentDTO.Status;
}

export namespace UserGetTadaNextPreRecruitmentStatusResult {
  export function fromObject(obj: any): UserGetTadaNextPreRecruitmentStatusResult {
    return {
      ...obj,
      status: EventRecruitmentDTO.Status_fromString(obj.status),
    }
  }
}
