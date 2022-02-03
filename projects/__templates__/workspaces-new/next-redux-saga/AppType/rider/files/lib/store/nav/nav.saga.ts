import { PayloadAction } from '@reduxjs/toolkit'
import { call } from 'redux-saga/effects'
import Router from 'next/router'
import { select, takeEvery, takeLeading } from '@redux-saga/core/effects'
import { navActions, NavChangePayload } from '@lib/store/nav/nav.slice'
import { <%= camelCaseName %>NativeService } from '@lib/native/NativeService'

function* navPush(action: PayloadAction<NavChangePayload>) {
  yield call(Router.push, action.payload.url, action.payload.as, action.payload.options)
}

function* navReplace(action: PayloadAction<NavChangePayload>) {
  yield call(Router.replace, action.payload.url, action.payload.as, action.payload.options)
}

// eslint-disable-next-line require-yield
function* navBack() {
  Router.back()
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
  <%= camelCaseName %>NativeService.closeInAppBrowser.call(null)
}

function* watchNavPush() {
  yield takeEvery(navActions.push, navPush)
}

function* watchNavPushThrottled() {
  yield takeLeading(navActions.throttledPush, navPush)
}

function* watchNavReplace() {
  yield takeEvery(navActions.replace, navReplace)
}

function* watchNavReplaceThrottled() {
  yield takeLeading(navActions.throttledReplace, navReplace)
}

function* watchNavBack() {
  yield takeEvery(navActions.back, navBack)
}

function* watchNavCloseInAppBrowser() {
  yield takeEvery(navActions.closeInAppBrowser, navCloseInAppBrowser)
}

export default [
  watchNavPush,
  watchNavReplace,
  watchNavPushThrottled,
  watchNavReplaceThrottled,
  watchNavBack,
  watchNavCloseInAppBrowser,
]
