import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@lib/store/store'

interface UIFlagState {
  mainStepTopPosition?: number
}

export const initialState = (): UIFlagState => {
  return {}
}

const uiFlag = createSlice({
  initialState: initialState(),
  name: 'uiFlag',
  reducers: {
    setMainStepTopPosition: (state, action: PayloadAction<number | undefined>) => {
      state.mainStepTopPosition = action.payload
    },
  },
})

const uiFlagState = (state: RootState) => state.ui.uiFlag

// action creator
export const uiFlagActions = uiFlag.actions

// reducer
export const uiFlagReducer = uiFlag.reducer

// selector
export const selectMainStepTopPosition = createSelector(uiFlagState, state => state.mainStepTopPosition)
