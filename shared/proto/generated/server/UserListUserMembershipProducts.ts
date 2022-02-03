/* eslint-disable */
import { UserMembershipProductDTO } from '../membership';


export interface UserListUserMembershipProductsParams {
}

export namespace UserListUserMembershipProductsParams {
  export function fromObject(obj: any): UserListUserMembershipProductsParams {
    return {
      ...obj,
    }
  }
}

export interface UserListUserMembershipProductsResult {
  products: UserMembershipProductDTO[];
}

export namespace UserListUserMembershipProductsResult {
  export function fromObject(obj: any): UserListUserMembershipProductsResult {
    return {
      ...obj,
      products: obj.products.map((v: any) => UserMembershipProductDTO.fromObject(v)),
    }
  }
}
