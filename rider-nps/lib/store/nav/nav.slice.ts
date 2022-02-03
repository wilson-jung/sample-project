import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UrlObject } from 'url'

interface NavSliceState {}

export interface TransitionOptions {
  shallow?: boolean
  locale?: string | false
  scroll?: boolean
}
export interface NavChangePayload {
  url: UrlObject | string
  as?: UrlObject | string
  options?: TransitionOptions
}

export interface NavChangeWithDelayPayload extends NavChangePayload {
  delay: number
}

export interface NavOpenToNewBrowserPayload {
  url: string
  title: string | undefined
  push?: boolean // default is true
}

export const initialState = (): NavSliceState => {
  return {}
}

const navSlice = createSlice({
  initialState: initialState(),
  name: 'nav',
  reducers: {
    push: (state, action: PayloadAction<NavChangePayload>) => {},
    pushWithDelay: (state, action: PayloadAction<NavChangeWithDelayPayload>) => {},
    throttledBack: (state, action) => {},
    replace: (state, action: PayloadAction<NavChangePayload>) => {},
    throttledPush: (state, action: PayloadAction<NavChangePayload>) => {},
    throttledReplace: (state, action: PayloadAction<NavChangePayload>) => {},
    back: (state, action) => {},
    openToExternalWeb: (state, action: PayloadAction<string>) => {},
    openDeeplink: (state, action: PayloadAction<string>) => {},
    openToNewBrowser: (state, action: PayloadAction<NavOpenToNewBrowserPayload>) => {},
    closeInAppBrowser: (state, action) => {},
  },
})

// action creator
export const navActions = navSlice.actions

// reducer
export const navReducer = navSlice.reducer
