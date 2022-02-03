import { all, call } from '@redux-saga/core/effects'
import navSaga from '@lib/store/nav/nav.saga'
import localeSaga from '@lib/store/locale/locale.saga'

const allSagas = [...localeSaga, ...navSaga]

export default function* root() {
  yield all(allSagas.map(call))
}
