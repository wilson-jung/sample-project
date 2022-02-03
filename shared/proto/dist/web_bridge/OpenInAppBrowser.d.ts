import { StringValue } from '../wrappers';
export interface OpenInAppBrowserParams {
    url: string;
    style?: OpenInAppBrowserParams.WebBrowserStyle;
    appBarTitle?: StringValue;
}
export declare namespace OpenInAppBrowserParams {
    function fromObject(obj: any): OpenInAppBrowserParams;
    type WebBrowserStyle = 'DEFAULT' | 'NONE' | 'PUSH';
    function WebBrowserStyle_fromString(str: string): WebBrowserStyle | undefined;
}
export interface OpenInAppBrowserResult {
}
export declare namespace OpenInAppBrowserResult {
    function fromObject(obj: any): OpenInAppBrowserResult;
}
