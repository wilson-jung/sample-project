<% let authType = (() => {
  switch(prefix){
      case 'rider':
          return 'User'
      case 'driver':
          return 'Driver'
      default:
          return null
  }
})()
_%>
import { call, put, takeLeading } from '@redux-saga/core/effects'
import { <%= authType %>AuthenticateParams } from '@tada-shared/proto'
import { authenticateSliceActions } from '@lib/store/user/auth/authenticate.slice'
import { PayloadAction } from '@reduxjs/toolkit'
import { userAuthenticate } from '@lib/apis/user'
import { ApiResult } from '@store/helperSaga/api'
import { accessTokenActions } from '../accessToken/accessToken.slice'

function* authenticateWork(action: PayloadAction<<%= authType %>AuthenticateParams>) {
  const res: ApiResult<string | undefined> = yield call(userAuthenticate, action.payload)

  if (res.error !== undefined) {
    yield put(authenticateSliceActions.failure(res.error.message))
    return
  }

  if (res.result !== undefined) {
    if (res.result === 'unset') {
      yield put(accessTokenActions.clearAccessToken())
    } else {
      yield put(accessTokenActions.setAccessToken(res.result))
    }
  } else {
    yield put(accessTokenActions.clearAccessToken())
  }

  yield put(authenticateSliceActions.success(res.result))
}

function* watchAuthenticate() {
  yield takeLeading(authenticateSliceActions.request, authenticateWork)
}

export default [watchAuthenticate]
