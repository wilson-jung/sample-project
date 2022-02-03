import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import deepmerge from 'deepmerge'
import { RootState } from '@lib/store/store'

import { applicationReducer } from '@lib/store/application/application.slice'
import { localeReducer } from '@lib/store/locale/locale.slice'
import { apiSlice } from '@lib/store/api/api.slice'
import { scoreReducer } from '@lib/store/score/score.slice'
import { uiReducer } from '@lib/store/ui/ui.slice'

const combinedReducer = combineReducers({
  application: applicationReducer,
  locale: localeReducer,
  score: scoreReducer,
  ui: uiReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
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
