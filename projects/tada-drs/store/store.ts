import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { Store } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { GetServerSidePropsContext, GetStaticPropsContext, NextPageContext } from 'next'
import { AppContext } from 'next/app'
import rootReducer, { CombinedReducerState } from './root.reducer'
import { apiSlice } from '@features/api/__state__/api.slice'
import isString from 'lodash/isString'

export type MakeStoreContext = NextPageContext | AppContext | GetStaticPropsContext | GetServerSidePropsContext

// eslint-disable-next-line import/no-mutable-exports
export let store: EnhancedStore

export const makeStore = (context: MakeStoreContext) => {
  // 2: Add an extra parameter for applying middleware:
  store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => {
      return [...getDefaultMiddleware(), apiSlice.middleware]
    },
  })

  return store
}

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
  serializeState: state => {
    // Hack needed to avoid JSON-Serialization validation error from Next.js https://github.com/zeit/next.js/discussions/11209
    // >>> Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value all together.
    return JSON.stringify(state)
  },
  deserializeState: state => {
    return isString(state) ? JSON.parse(state) : state
  },
})

export type RootState = CombinedReducerState
