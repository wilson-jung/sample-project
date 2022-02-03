/* eslint-disable */
import { UserDTO } from '../common';


export interface UserChangeNameParams {
  name: string;
}

export namespace UserChangeNameParams {
  export function fromObject(obj: any): UserChangeNameParams {
    return {
      ...obj,
    }
  }
}

export interface UserChangeNameResult {
  user?: UserDTO;
}

export namespace UserChangeNameResult {
  export function fromObject(obj: any): UserChangeNameResult {
    return {
      ...obj,
      user: obj.user != null ? UserDTO.fromObject(obj.user) : undefined,
    }
  }
}
