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
import { <%= authType %>AuthenticateParams } from '@tada-shared/proto'
import { call } from '@redux-saga/core/effects'
import { commonErrorHandler } from '@lib/store/helperSaga/errorHandler'
import { ACCESS_TOKEN_KEY, ErrorHandler, fetchManager } from '@store/helperSaga/api'

/**
 * @see https://github.com/VCNC/tada-server/blob/sandbox/membership/subprojects/protocol/src/main/proto/server/UserAuthenticate.proto
 * @param param
 *
 * 로그인
 */
export function* userAuthenticate(param: <%= authType %>AuthenticateParams, errorHandler: ErrorHandler = commonErrorHandler) {
  return (yield call(
    fetchManager,
    '/u/Authenticate',
    param,
    ({ headers }) => headers[ACCESS_TOKEN_KEY],
    errorHandler
  )) as string | undefined
}
