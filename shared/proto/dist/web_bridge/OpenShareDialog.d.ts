import { StringValue } from '../wrappers';
import { BrazeEvent } from '../common';
export interface OpenShareDialogParams {
    dialogTitle?: StringValue;
    dialogDescription?: StringValue;
    kakaoTalkShareMessage?: OpenShareDialogParams.KakaoTalkShareMessage;
    /**
     *  카카오톡 외 공유용
     */
    textToShare?: StringValue;
    brazeEventsOnShare: BrazeEvent[];
}
export declare namespace OpenShareDialogParams {
    function fromObject(obj: any): OpenShareDialogParams;
    interface KakaoTalkShareMessage {
        title?: StringValue;
        imageUrl?: StringValue;
        description?: StringValue;
        link?: StringValue;
        buttons: OpenShareDialogParams.KakaoTalkShareMessage.Button[];
    }
    namespace KakaoTalkShareMessage {
        function fromObject(obj: any): KakaoTalkShareMessage;
        interface Button {
            title: string;
            url: string;
        }
        namespace Button {
            function fromObject(obj: any): Button;
        }
    }
}
export interface OpenShareDialogResult {
}
export declare namespace OpenShareDialogResult {
    function fromObject(obj: any): OpenShareDialogResult;
}
