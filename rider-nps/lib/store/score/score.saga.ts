import { call, takeLatest } from '@redux-saga/core/effects'
import { scoreActions, selectRating, selectRatingReason, SetRatingPayload } from '@lib/store/score/score.slice'
import { PayloadAction } from '@reduxjs/toolkit'
import { put, select, takeLeading } from 'redux-saga/effects'
import { pageConfig } from '@lib/router/config'
import { navPushWithDelay } from '@lib/store/nav/nav.saga'
import { navActions } from '@lib/store/nav/nav.slice'
import { StringValue, UserSubmitNpsRecordParams } from '@tada-shared/proto'
import { fetchEndpoint } from '@lib/store/helperSaga/fetchEndpoint'
import isUndefined from 'lodash/isUndefined'
import { ApiErrorType } from '@lib/store/api/api.slice'
import { commonErrorHandler } from '@lib/store/helperSaga/errorHandler'
import { withSpinnerSaga } from '@lib/store/helperSaga/ui'

function* setRatingWork(action: PayloadAction<SetRatingPayload>) {
  yield put(scoreActions.beginSetRating())
  yield put(scoreActions.setRating({ rating: action.payload.rating }))
  yield put(scoreActions.successSetRating())
  yield call(navPushWithDelay, {
    type: navActions.pushWithDelay.type,
    payload: { url: pageConfig.mainStep2.props.build(), delay: 400 },
  })
}

function* workCreateNpsRecord() {
  yield put(scoreActions.beginSubmitNpsRecord())
  const rating: number | undefined = yield select(selectRating)
  const ratingReason: StringValue | undefined = yield select(selectRatingReason)

  if (isUndefined(rating)) {
    yield put(scoreActions.failureSubmitNpsRecord())
    return
  }

  const makeBodyParams = (rating: number, ratingReason?: StringValue): UserSubmitNpsRecordParams => {
    if (isUndefined(ratingReason?.value)) {
      return { score: rating }
    }
    return { score: rating, reason: ratingReason }
  }

  const { data, error }: { data: UserSubmitNpsRecordParams; error: ApiErrorType } = yield fetchEndpoint(
    'submitNpsRecord',
    makeBodyParams(rating, ratingReason)
  )

  if (!isUndefined(error)) {
    yield commonErrorHandler(error)
    yield put(scoreActions.failureSubmitNpsRecord())
    yield put(navActions.push({ url: pageConfig.confirm.props.build() }))
    return
  }

  yield put(scoreActions.successSubmitNpsRecord())
  yield put(navActions.push({ url: pageConfig.confirm.props.build() }))
}

function* watchRequestSetRating() {
  yield takeLatest(scoreActions.requestSetRating.type, setRatingWork)
}

function* watchRequestSubmitNpsRecord() {
  yield takeLeading(scoreActions.requestSubmitNpsRecord.type, withSpinnerSaga(workCreateNpsRecord, true))
}

export default [watchRequestSetRating, watchRequestSubmitNpsRecord]
