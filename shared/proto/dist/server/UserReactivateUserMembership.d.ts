import { UserMembershipDTO } from '../membership';
export interface UserReactivateUserMembershipParams {
    membershipId: string;
}
export declare namespace UserReactivateUserMembershipParams {
    function fromObject(obj: any): UserReactivateUserMembershipParams;
}
export interface UserReactivateUserMembershipResult {
    membership?: UserMembershipDTO;
}
export declare namespace UserReactivateUserMembershipResult {
    function fromObject(obj: any): UserReactivateUserMembershipResult;
}
