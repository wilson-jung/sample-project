import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@features/store/store'

interface IState {
  count: number
}

const initialState = (): IState => {
  return {
    count: 0,
  }
}

const slice = createSlice({
  initialState: initialState(),
  name: 'counter',
  reducers: {
    addCountBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
})

const state = (state: RootState): IState => state.counter

// action creator
export const counterActions = slice.actions

// selector
export const selectCounter = createSelector(state, state => state.count)

// root reducer
export const counterReducer = slice.reducer
