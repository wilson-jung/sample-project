import { UserMembershipProductDTO } from '../membership';
export interface UserListUserMembershipProductsParams {
}
export declare namespace UserListUserMembershipProductsParams {
    function fromObject(obj: any): UserListUserMembershipProductsParams;
}
export interface UserListUserMembershipProductsResult {
    products: UserMembershipProductDTO[];
}
export declare namespace UserListUserMembershipProductsResult {
    function fromObject(obj: any): UserListUserMembershipProductsResult;
}
