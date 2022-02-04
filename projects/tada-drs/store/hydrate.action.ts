import { createAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { HYDRATE } from 'next-redux-wrapper'

export const hydrateAction = createAction<RootState>(HYDRATE)
