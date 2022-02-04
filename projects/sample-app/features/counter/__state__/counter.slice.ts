import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@features/store/store'

interface CounterState {
  count: number
}

const initialState = (): CounterState => {
  return {
    count: 0,
  }
}

const counterSlice = createSlice({
  initialState: initialState(),
  name: 'counter',
  reducers: {
    addCountBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
})

const counterState = (state: RootState): CounterState => state.counter

// action creator
export const counterActions = counterSlice.actions

// selector
export const selectCounter = createSelector(counterState, state => state.count)

// root reducer
export const counterReducer = counterSlice.reducer
