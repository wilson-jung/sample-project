import { StringValue } from '../wrappers';
export interface UserOpenCountryCodeSelectorParams {
}
export declare namespace UserOpenCountryCodeSelectorParams {
    function fromObject(obj: any): UserOpenCountryCodeSelectorParams;
}
export interface UserOpenCountryCodeSelectorResult {
    /**
     *  도중 취소시 null 리턴
     */
    countryCode?: StringValue;
}
export declare namespace UserOpenCountryCodeSelectorResult {
    function fromObject(obj: any): UserOpenCountryCodeSelectorResult;
}
