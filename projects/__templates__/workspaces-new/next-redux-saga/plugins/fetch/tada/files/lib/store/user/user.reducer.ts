import { combineReducers } from '@reduxjs/toolkit'
import { accessTokenReducer } from '@lib/store/user/accessToken/accessToken.slice'
import { authenticateReducer } from '@store/user/auth/authenticate.slice'

export const userReducer = combineReducers({
  accessToken: accessTokenReducer,
  authentication: authenticateReducer,
})
