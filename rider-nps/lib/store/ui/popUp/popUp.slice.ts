import type { RootState } from '@lib/store/store'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PopUpContentInfo {
  title?: string
  content?: string
  primaryButton?: { text: string; theme?: 'warn' | 'normal' }
  secondaryButton?: { text: string }
  buttonClickRequired?: boolean
  image?: { url: string; fixedHeight?: number }
}

interface PopUpState extends PopUpContentInfo {
  isVisible?: boolean
}

export const initialState = (): PopUpState => {
  return {}
}

const popUpSlice = createSlice({
  initialState: initialState(),
  name: 'popUp',
  reducers: {
    request: (state, action: PayloadAction<PopUpContentInfo>) => {},
    setContent: (state, action: PayloadAction<PopUpContentInfo>) => {
      state.title = action.payload.title
      state.content = action.payload.content
      state.primaryButton = action.payload.primaryButton
      state.secondaryButton = action.payload.secondaryButton
      state.image = action.payload.image
    },
    show: state => {
      state.isVisible = true
    },
    hide: state => {
      state.isVisible = false
    },
    onPrimary: () => {},
    onSecondary: () => {},
    onDismiss: () => {},
  },
})

const popUpState = (state: RootState): PopUpState => state.ui.popUp

// action creator
export const popUpActions = popUpSlice.actions

// reducer
export const popUpReducer = popUpSlice.reducer

// selector
export const selectPopUp = createSelector(popUpState, state => state)
