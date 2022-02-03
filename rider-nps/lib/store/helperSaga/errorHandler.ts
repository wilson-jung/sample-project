import { call, put, take } from 'redux-saga/effects'
import { popUpActions } from '@lib/store/ui/popUp/popUp.slice'
import i18n from 'i18next'
import { ApiErrorType } from '@lib/store/api/api.slice'

function* tadaErrorHandler(error: ApiErrorType) {
  yield put(popUpActions.request({ title: error.data?.title?.value, content: error.data?.message }))
  yield take([popUpActions.onPrimary.type, popUpActions.onSecondary.type, popUpActions.onDismiss.type])
}

function isNetworkError(error: ApiErrorType) {
  return !error.data
}

function* networkErrorHandler() {
  yield put(popUpActions.request({ content: i18n.t('common-network-error-message') }))
  yield take([popUpActions.onPrimary.type, popUpActions.onSecondary.type, popUpActions.onDismiss.type])
}

export function* commonErrorHandler(err: ApiErrorType): Generator {
  if (isNetworkError(err)) {
    yield call(networkErrorHandler)
    return
  }

  yield call(tadaErrorHandler, err)
}
