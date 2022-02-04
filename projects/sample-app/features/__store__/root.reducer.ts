import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import deepmerge from 'deepmerge'
import { RootState } from './store'
import { counterReducer } from '@features/counter/__state__/counter.slice'
import { apiSlice } from '@features/api/__state__/api.slice'

export const combinedReducer = combineReducers({
  counter: counterReducer,
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
