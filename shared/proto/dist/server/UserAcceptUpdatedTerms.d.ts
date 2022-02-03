export interface UserAcceptUpdatedTermsParams {
    /**
     *  GetChangedTerms로 받은 accepToken을 올려줘야 한다.
     */
    acceptToken: string;
    /**
     *  유저가 수락한 약관의 아이디 리스트를 올려준다.
     *  필수 약관은 반드시 포함되어야 하며, 선택약관은 포함되지 않을 수 있다.
     */
    acceptingTermsIds: string[];
}
export declare namespace UserAcceptUpdatedTermsParams {
    function fromObject(obj: any): UserAcceptUpdatedTermsParams;
}
export interface UserAcceptUpdatedTermsResult {
}
export declare namespace UserAcceptUpdatedTermsResult {
    function fromObject(obj: any): UserAcceptUpdatedTermsResult;
}
