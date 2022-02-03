import { UserMembershipDTO } from '../membership';
import { StringValue } from '../wrappers';
export interface UserConnectMembershipToSocarParams {
    membershipId: string;
}
export declare namespace UserConnectMembershipToSocarParams {
    function fromObject(obj: any): UserConnectMembershipToSocarParams;
}
export interface UserConnectMembershipToSocarResult {
    membership?: UserMembershipDTO;
    isSuccess: boolean;
    popup?: UserConnectMembershipToSocarResult.Popup;
}
export declare namespace UserConnectMembershipToSocarResult {
    function fromObject(obj: any): UserConnectMembershipToSocarResult;
    interface Popup {
        title: string;
        body: string;
        /**
         *  null이 아닐 때만 쏘카로 이동 버튼을 보여준다.
         */
        socarDeeplink?: StringValue;
    }
    namespace Popup {
        function fromObject(obj: any): Popup;
    }
}
