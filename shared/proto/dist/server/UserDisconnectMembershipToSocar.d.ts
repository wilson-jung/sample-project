import { UserMembershipDTO } from '../membership';
export interface UserDisconnectMembershipToSocarParams {
    membershipId: string;
}
export declare namespace UserDisconnectMembershipToSocarParams {
    function fromObject(obj: any): UserDisconnectMembershipToSocarParams;
}
export interface UserDisconnectMembershipToSocarResult {
    membership?: UserMembershipDTO;
    isSuccess: boolean;
    popup?: UserDisconnectMembershipToSocarResult.Popup;
}
export declare namespace UserDisconnectMembershipToSocarResult {
    function fromObject(obj: any): UserDisconnectMembershipToSocarResult;
    interface Popup {
        title: string;
        body: string;
    }
    namespace Popup {
        function fromObject(obj: any): Popup;
    }
}
