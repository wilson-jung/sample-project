import { localeSliceActions } from '@lib/store/locale/locale.slice'
import { takeLatest } from '@redux-saga/core/effects'
import { setUpLanguage } from '@locale/setUpLanguage'

function* changeLocale(action: ReturnType<typeof localeSliceActions.setLocale>) {
  const locale = action.payload
  yield setUpLanguage(locale)
}

function* watchRequestChangeLocale() {
  yield takeLatest(localeSliceActions.setLocale, changeLocale)
}

export default [watchRequestChangeLocale]
