import { UserMembershipDTO } from '../membership';
export interface UserGetUserMembershipParams {
}
export declare namespace UserGetUserMembershipParams {
    function fromObject(obj: any): UserGetUserMembershipParams;
}
export interface UserGetUserMembershipResult {
    /**
     *  optional (현재 구독중이지 않은 경우 안내려줌)
     */
    membership?: UserMembershipDTO;
    /**
     *  유저 이름
     */
    userName: string;
}
export declare namespace UserGetUserMembershipResult {
    function fromObject(obj: any): UserGetUserMembershipResult;
}
