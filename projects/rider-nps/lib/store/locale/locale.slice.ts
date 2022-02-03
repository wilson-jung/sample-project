import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LocaleSliceState {
  locale: string
}

export const initialState = (): LocaleSliceState => {
  return {
    locale: 'ko',
  }
}

const localeSlice = createSlice({
  initialState: initialState(),
  name: 'locale',
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload
    },
  },
})
// action creator
export const localeSliceActions = localeSlice.actions

// reducer
export const localeReducer = localeSlice.reducer

// selector
