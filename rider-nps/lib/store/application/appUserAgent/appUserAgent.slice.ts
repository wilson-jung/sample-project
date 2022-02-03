import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@lib/store/store'
import { IAppUserAgent } from '@tada-shared/util-application'

export const initialState = (): IAppUserAgent => {
  return {}
}

const appUserAgentSlice = createSlice({
  initialState: initialState(),
  name: 'appUserAgent',
  reducers: {
    set: (state, action: PayloadAction<IAppUserAgent>) => {
      Object.assign(state, action.payload)
    },
    clear: () => initialState(),
  },
})

const appUserAgentState = (state: RootState) => state.application.appUserAgent

// action creator
export const appUserAgentActions = appUserAgentSlice.actions

// reducer
export const appUserAgentReducer = appUserAgentSlice.reducer

// selector
export const selectAppUserAgent = createSelector(appUserAgentState, state => state)
export const selectPlatform = createSelector(appUserAgentState, state => state.platform)
