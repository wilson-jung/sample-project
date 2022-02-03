import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@lib/store/store'

interface SpinnerSliceState {
  isVisible?: boolean
  withDim?: boolean
}

export const initialState = (): SpinnerSliceState => {
  return {}
}

const globalSpinnerSlice = createSlice({
  initialState: initialState(),
  name: 'globalSpinner',
  reducers: {
    showWithDim: state => {
      state.isVisible = true
      state.withDim = true
    },
    showWithoutDim: state => {
      state.isVisible = true
      state.withDim = false
    },
    hide: state => {
      state.isVisible = false
      state.withDim = undefined
    },
  },
})

const globalSpinnerState = (state: RootState): SpinnerSliceState => state.ui.globalSpinner

// action creator
export const globalSpinnerActions = globalSpinnerSlice.actions

// reducer
export const globalSpinnerReducer = globalSpinnerSlice.reducer

// selector
export const selectGlobalSpinner = createSelector(globalSpinnerState, state => state)
