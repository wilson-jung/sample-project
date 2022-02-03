import { combineReducers } from '@reduxjs/toolkit'
import { appUserAgentReducer } from '@lib/store/application/appUserAgent/appUserAgent.slice'
import { accessTokenReducer } from '@lib/store/application/accessToken/accessToken.slice'

export const applicationReducer = combineReducers({
  accessToken: accessTokenReducer,
  appUserAgent: appUserAgentReducer,
})
