import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit'
import { applicationReducer } from '@lib/store/application/application.slice'
import { navReducer } from '@lib/store/nav/nav.slice'
import { RootState } from '@lib/store/store'
import { HYDRATE } from 'next-redux-wrapper'
import deepmerge from 'deepmerge'
import { accessTokenReducer } from '@store/user/accessToken/accessToken.slice'
import { localeReducer } from '@store/locale/locale.slice'
import { userReducer } from '@store/user/user.reducer'

const combinedReducer = combineReducers({
  application: applicationReducer,
  nav: navReducer,
  user: userReducer,
  accessToken: accessTokenReducer,
  locale: localeReducer,
})

export type CombinedReducerState = ReturnType<typeof combinedReducer>

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = deepmerge(state, action.payload, {
      arrayMerge: (destinationArray, sourceArray, options) => sourceArray,
    })
    return nextState
  }

  return combinedReducer(state, action)
}

export default rootReducer
