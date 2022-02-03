export interface UserGetAlternativeRideSuggestionParams {
    rideId: string;
}
export declare namespace UserGetAlternativeRideSuggestionParams {
    function fromObject(obj: any): UserGetAlternativeRideSuggestionParams;
}
export interface UserGetAlternativeRideSuggestionResult {
    alternativeRideSuggestion?: UserGetAlternativeRideSuggestionResult.AlternativeRideSuggestion;
}
export declare namespace UserGetAlternativeRideSuggestionResult {
    function fromObject(obj: any): UserGetAlternativeRideSuggestionResult;
    interface AlternativeRideSuggestion {
        suggestionButton: string;
        suggestionBody: string;
        confirmPopup?: UserGetAlternativeRideSuggestionResult.AlternativeRideSuggestion.ConfirmPopup;
        token: string;
    }
    namespace AlternativeRideSuggestion {
        function fromObject(obj: any): AlternativeRideSuggestion;
        interface ConfirmPopup {
            body: string;
            logKey: string;
        }
        namespace ConfirmPopup {
            function fromObject(obj: any): ConfirmPopup;
        }
    }
}
