import { call, put } from 'redux-saga/effects'
import { globalSpinnerActions } from '@lib/store/ui/globalSpinner/globalSpinner.slice'

export function withSpinnerSaga<T, Fn extends (...args: any[]) => T>(saga: Fn, widthDim = true): any {
  const spinnerShow = widthDim ? globalSpinnerActions.showWithDim : globalSpinnerActions.showWithoutDim
  const spinnerHide = globalSpinnerActions.hide

  return function* innerSaga(...args: Parameters<Fn>) {
    try {
      yield put(spinnerShow())
      const res: T = yield call(saga, ...args)
      yield put(spinnerHide())
      return res
    } catch (e) {
      yield put(spinnerHide())
    }
  }
}
