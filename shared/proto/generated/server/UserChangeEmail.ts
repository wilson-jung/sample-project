/* eslint-disable */
import { UserDTO } from '../common';


export interface UserChangeEmailParams {
  email: string;
}

export namespace UserChangeEmailParams {
  export function fromObject(obj: any): UserChangeEmailParams {
    return {
      ...obj,
    }
  }
}

export interface UserChangeEmailResult {
  user?: UserDTO;
}

export namespace UserChangeEmailResult {
  export function fromObject(obj: any): UserChangeEmailResult {
    return {
      ...obj,
      user: obj.user != null ? UserDTO.fromObject(obj.user) : undefined,
    }
  }
}
