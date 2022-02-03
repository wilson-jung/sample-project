/* eslint-disable */
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

export namespace OpenShareDialogParams {
  export function fromObject(obj: any): OpenShareDialogParams {
    return {
      ...obj,
      dialogTitle: obj.dialogTitle != null ? StringValue.fromObject(obj.dialogTitle) : undefined,
      dialogDescription: obj.dialogDescription != null ? StringValue.fromObject(obj.dialogDescription) : undefined,
      kakaoTalkShareMessage: obj.kakaoTalkShareMessage != null ? OpenShareDialogParams.KakaoTalkShareMessage.fromObject(obj.kakaoTalkShareMessage) : undefined,
      textToShare: obj.textToShare != null ? StringValue.fromObject(obj.textToShare) : undefined,
      brazeEventsOnShare: obj.brazeEventsOnShare.map((v: any) => BrazeEvent.fromObject(v)),
    }
  }

  export interface KakaoTalkShareMessage {
    title?: StringValue;
    imageUrl?: StringValue;
    description?: StringValue;
    link?: StringValue;
    buttons: OpenShareDialogParams.KakaoTalkShareMessage.Button[];
  }

  export namespace KakaoTalkShareMessage {
    export function fromObject(obj: any): KakaoTalkShareMessage {
      return {
        ...obj,
        title: obj.title != null ? StringValue.fromObject(obj.title) : undefined,
        imageUrl: obj.imageUrl != null ? StringValue.fromObject(obj.imageUrl) : undefined,
        description: obj.description != null ? StringValue.fromObject(obj.description) : undefined,
        link: obj.link != null ? StringValue.fromObject(obj.link) : undefined,
        buttons: obj.buttons.map((v: any) => OpenShareDialogParams.KakaoTalkShareMessage.Button.fromObject(v)),
      }
    }

    export interface Button {
      title: string;
      url: string;
    }

    export namespace Button {
      export function fromObject(obj: any): Button {
        return {
          ...obj,
        }
      }
    }
  }
}

export interface OpenShareDialogResult {
}

export namespace OpenShareDialogResult {
  export function fromObject(obj: any): OpenShareDialogResult {
    return {
      ...obj,
    }
  }
}
