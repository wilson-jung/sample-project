<% let authType = (() => {
  switch(prefix){
      case 'rider':
          return 'User'
      case 'driver':
          return 'Driver'
      default:
          return null
  }
})()
_%>
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { <%= authType %>AuthenticateParams } from '@tada-shared/proto'

interface AuthenticateSliceState {
  error?: string
  success?: boolean
}

export const initialState = (): AuthenticateSliceState => {
  return {}
}

const authenticateSlice = createSlice({
  initialState: initialState(),
  name: 'authenticate',
  reducers: {
    request: (state, action: PayloadAction<<%= authType %>AuthenticateParams>) => {},
    success: (state, action) => {},
    failure: (state, action) => {},
  },
})
// action creator
export const authenticateSliceActions = authenticateSlice.actions

// reducer
export const authenticateReducer = authenticateSlice.reducer

// selector
