/* eslint-disable */
import { UserDTO } from '../common';


export interface UserChangePhoneNumberParams {
  verifiedPhoneNumberToken: string;
}

export namespace UserChangePhoneNumberParams {
  export function fromObject(obj: any): UserChangePhoneNumberParams {
    return {
      ...obj,
    }
  }
}

export interface UserChangePhoneNumberResult {
  user?: UserDTO;
}

export namespace UserChangePhoneNumberResult {
  export function fromObject(obj: any): UserChangePhoneNumberResult {
    return {
      ...obj,
      user: obj.user != null ? UserDTO.fromObject(obj.user) : undefined,
    }
  }
}
