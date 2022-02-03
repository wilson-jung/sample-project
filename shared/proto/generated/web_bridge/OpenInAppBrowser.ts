/* eslint-disable */
import { StringValue } from '../wrappers';


export interface OpenInAppBrowserParams {
  url: string;
  style?: OpenInAppBrowserParams.WebBrowserStyle;
  appBarTitle?: StringValue;
}

export namespace OpenInAppBrowserParams {
  export function fromObject(obj: any): OpenInAppBrowserParams {
    return {
      ...obj,
      style: OpenInAppBrowserParams.WebBrowserStyle_fromString(obj.style),
      appBarTitle: obj.appBarTitle != null ? StringValue.fromObject(obj.appBarTitle) : undefined,
    }
  }

  export type WebBrowserStyle = 'DEFAULT' | 'NONE' | 'PUSH';

  export function WebBrowserStyle_fromString(str: string): WebBrowserStyle | undefined {
    switch (str) {
      case "DEFAULT":
      case "NONE":
      case "PUSH":
      return str
      default: return undefined
    }
  }
}

export interface OpenInAppBrowserResult {
}

export namespace OpenInAppBrowserResult {
  export function fromObject(obj: any): OpenInAppBrowserResult {
    return {
      ...obj,
    }
  }
}
