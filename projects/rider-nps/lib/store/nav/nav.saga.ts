import { PayloadAction } from '@reduxjs/toolkit'
import { call, all, takeEvery, takeLeading, delay } from 'redux-saga/effects'
import Router from 'next/router'
import { navActions, NavChangePayload, NavChangeWithDelayPayload } from '@lib/store/nav/nav.slice'
import { npsNativeService } from '@lib/native/NativeService'
import { QueryParam } from '@lib/utils/deeplink'
import qs from 'qs'

const NAV_BACK_THROTTLE_DELAY = 2000

export function* navPush(action: PayloadAction<NavChangePayload>) {
  Router.push(action.payload.url, action.payload.as, action.payload.options)
  yield call(Router.push, action.payload.url, action.payload.as, action.payload.options)
}

function* navReplace(action: PayloadAction<NavChangePayload>) {
  yield call(Router.replace, action.payload.url, action.payload.as, action.payload.options)
}

// eslint-disable-next-line require-yield
function* navBack() {
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true })
  if (queryParams[QueryParam.isInitialLandingPage] === '1') {
    yield call(navCloseInAppBrowser)
    return
  }
  Router.back()
}

// eslint-disable-next-line require-yield
function* navBackWithDelay() {
  yield all([call(navBack), delay(NAV_BACK_THROTTLE_DELAY)])
}

// eslint-disable-next-line require-yield
function* navOpenToExternalWeb(action: PayloadAction<string>) {
  const url = encodeURIComponent(action.payload)
  try {
    window.open(`tada-rider://external-web?uri=${url}`)
  } catch (e) {
    // empty
  }
}

// eslint-disable-next-line require-yield
function* navOpenDeeplink(action: PayloadAction<string>) {
  try {
    window.open(action.payload)
  } catch (e) {
    // empty
  }
}

// eslint-disable-next-line require-yield
function* navCloseInAppBrowser() {
  npsNativeService.closeInAppBrowser.call(null)
}

export function* navPushWithDelay(action: PayloadAction<NavChangeWithDelayPayload>) {
  yield delay(action.payload.delay)
  yield call(navPush, action)
}

function* watchNavPush() {
  yield takeEvery(navActions.push.type, navPush)
}

function* watchNavBackThrottled() {
  yield takeLeading(navActions.throttledBack, navBackWithDelay)
}

function* watchNavPushThrottled() {
  yield takeLeading(navActions.throttledPush.type, navPush)
}

function* watchNavPushWithDelay() {
  yield takeLeading(navActions.pushWithDelay.type, navPushWithDelay)
}

function* watchNavReplace() {
  yield takeEvery(navActions.replace.type, navReplace)
}

function* watchNavReplaceThrottled() {
  yield takeLeading(navActions.throttledReplace.type, navReplace)
}

function* watchNavBack() {
  yield takeEvery(navActions.back.type, navBack)
}

function* watchNavCloseInAppBrowser() {
  yield takeEvery(navActions.closeInAppBrowser.type, navCloseInAppBrowser)
}

export default [
  watchNavPush,
  watchNavReplace,
  watchNavPushThrottled,
  watchNavReplaceThrottled,
  watchNavBackThrottled,
  watchNavPushWithDelay,
  watchNavBack,
  watchNavCloseInAppBrowser,
]
