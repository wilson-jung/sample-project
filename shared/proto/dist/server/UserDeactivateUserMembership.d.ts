import { UserMembershipDTO } from '../membership';
export interface UserDeactivateUserMembershipParams {
    membershipId: string;
}
export declare namespace UserDeactivateUserMembershipParams {
    function fromObject(obj: any): UserDeactivateUserMembershipParams;
}
export interface UserDeactivateUserMembershipResult {
    membership?: UserMembershipDTO;
}
export declare namespace UserDeactivateUserMembershipResult {
    function fromObject(obj: any): UserDeactivateUserMembershipResult;
}
