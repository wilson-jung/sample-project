import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@lib/store/store'
import { StringValue } from '@tada-shared/proto'

interface ScoreSliceState {
  rating?: number
  ratingReason?: StringValue
}

export const initialState = (): ScoreSliceState => {
  return {}
}

export interface SetRatingPayload {
  rating: number
}

export interface SetRatingReasonPayload {
  ratingReason: string
}

const scoreSlice = createSlice({
  initialState: initialState(),
  name: 'score',
  reducers: {
    setRating: (state, action: PayloadAction<SetRatingPayload>) => {
      state.rating = action.payload.rating
    },
    setRatingReason: (state, action: PayloadAction<SetRatingReasonPayload>) => {
      state.ratingReason = { value: action.payload.ratingReason }
    },
    requestSetRating: (state, action: PayloadAction<SetRatingPayload>) => {},
    beginSetRating: () => {},
    successSetRating: () => {},
    failureSetRating: () => {},
    requestSubmitNpsRecord: () => {},
    beginSubmitNpsRecord: () => {},
    successSubmitNpsRecord: () => {},
    failureSubmitNpsRecord: () => {},
  },
})

const scoreState = (state: RootState) => state.score

// action creator
export const scoreActions = scoreSlice.actions

// reducer
export const scoreReducer = scoreSlice.reducer

// selector
export const selectRating = createSelector(scoreState, state => state.rating)
export const selectRatingReason = createSelector(scoreState, state => state.ratingReason)
