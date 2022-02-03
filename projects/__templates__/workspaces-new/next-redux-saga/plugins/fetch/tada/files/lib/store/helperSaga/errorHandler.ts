import { AxiosError } from 'axios'
import { call, put, take } from 'redux-saga/effects'
import { ErrorDTO } from '@tada-shared/proto'
import { popUpActions } from '@lib/store/ui/popUp/popUp.slice'
import { ApiError } from '@lib/store/helperSaga/api'
import i18n from 'i18next'

function* tadaErrorHandler(error: ErrorDTO) {
  yield put(popUpActions.request({ title: error.title?.value, content: error.message }))
  yield take([popUpActions.onPrimary.type, popUpActions.onSecondary.type, popUpActions.onDismiss.type])
}

function* networkErrorHandler(error: AxiosError) {
  yield put(popUpActions.request({ content: i18n.t('common-network-error-message') }))
  yield take([popUpActions.onPrimary.type, popUpActions.onSecondary.type, popUpActions.onDismiss.type])
}

export function* emptyErrorHandler(err: ApiError): Generator {
  // Do nothing
}

function isAxiosError(error: ApiError): error is AxiosError {
  return (error as any).isAxiosError === true
}

export function* commonErrorHandler(err: ApiError): Generator {
  if (isAxiosError(err)) {
    // ErrorDTO 가 떨어지지 않았다는건 network 에러이다.
    yield call(networkErrorHandler, err)
  } else {
    // errorDTO
    yield call(tadaErrorHandler, err)
  }
}
