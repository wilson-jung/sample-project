/* eslint-disable */


export interface UserGetAlternativeRideSuggestionParams {
  rideId: string;
}

export namespace UserGetAlternativeRideSuggestionParams {
  export function fromObject(obj: any): UserGetAlternativeRideSuggestionParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetAlternativeRideSuggestionResult {
  alternativeRideSuggestion?: UserGetAlternativeRideSuggestionResult.AlternativeRideSuggestion;
}

export namespace UserGetAlternativeRideSuggestionResult {
  export function fromObject(obj: any): UserGetAlternativeRideSuggestionResult {
    return {
      ...obj,
      alternativeRideSuggestion: obj.alternativeRideSuggestion != null ? UserGetAlternativeRideSuggestionResult.AlternativeRideSuggestion.fromObject(obj.alternativeRideSuggestion) : undefined,
    }
  }

  export interface AlternativeRideSuggestion {
    suggestionButton: string;
    suggestionBody: string;
    confirmPopup?: UserGetAlternativeRideSuggestionResult.AlternativeRideSuggestion.ConfirmPopup;
    token: string;
  }

  export namespace AlternativeRideSuggestion {
    export function fromObject(obj: any): AlternativeRideSuggestion {
      return {
        ...obj,
        confirmPopup: obj.confirmPopup != null ? UserGetAlternativeRideSuggestionResult.AlternativeRideSuggestion.ConfirmPopup.fromObject(obj.confirmPopup) : undefined,
      }
    }

    export interface ConfirmPopup {
      body: string;
      logKey: string;
    }

    export namespace ConfirmPopup {
      export function fromObject(obj: any): ConfirmPopup {
        return {
          ...obj,
        }
      }
    }
  }
}
