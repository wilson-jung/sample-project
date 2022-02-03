import { call, put } from 'redux-saga/effects'

export function withSpinnerSaga<T, Fn extends (...args: any[]) => T>(saga: Fn) {
  return function* innerSaga(...args: Parameters<Fn>) {
    try {
      const res: T = yield call(saga, ...args)
      return res
    } catch (e) {
      console.error(e)
    }
  }
}
