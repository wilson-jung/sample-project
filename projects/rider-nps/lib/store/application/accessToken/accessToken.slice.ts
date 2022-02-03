import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@lib/store/store'

interface Props {
  accessToken?: string
}

export const initialState = (): Props => {
  return {}
}

const accessTokenSlice = createSlice({
  initialState: initialState(),
  name: 'accessToken',
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      Object.assign(state, action.payload)
    },
    clearAccessToken: () => initialState(),
  },
})

const accessTokenState = (state: RootState) => state.application.accessToken

// action creator
export const accessTokenActions = accessTokenSlice.actions

// reducer
export const accessTokenReducer = accessTokenSlice.reducer

// selector
export const selectAccessToken = createSelector(accessTokenState, state => state.accessToken)
