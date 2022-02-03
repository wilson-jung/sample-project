import { combineReducers } from '@reduxjs/toolkit'
import { popUpReducer } from '@lib/store/ui/popUp/popUp.slice'
import { uiFlagReducer } from '@lib/store/ui/uiFlag/uiFlag.slice'
import { globalSpinnerReducer } from '@lib/store/ui/globalSpinner/globalSpinner.slice'

export const uiReducer = combineReducers({
  popUp: popUpReducer,
  uiFlag: uiFlagReducer,
  globalSpinner: globalSpinnerReducer,
})
