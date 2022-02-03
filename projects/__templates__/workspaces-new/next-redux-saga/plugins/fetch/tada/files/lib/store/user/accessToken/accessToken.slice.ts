import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccessToken } from '@tada-shared/common'
import { RootState } from '@lib/store/store'

interface AccessTokenSliceState {
  accessToken: string | undefined
}

export const initialState = (): AccessTokenSliceState => {
  return {
    accessToken: AccessToken.getToken(),
  }
}

const accessTokenSlice = createSlice({
  initialState: initialState(),
  name: 'accessToken',
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
      AccessToken.setToken(action.payload)
    },
    clearAccessToken: state => {
      state.accessToken = undefined
      AccessToken.setToken(undefined)
    },
  },
})
const AccessTokenState = (state: RootState) => state.user.accessToken

// action creator
export const accessTokenActions = accessTokenSlice.actions

// reducer
export const accessTokenReducer = accessTokenSlice.reducer

// selector
export const selectAccessToken = createSelector(AccessTokenState, state => state.accessToken)
