import { all, call } from '@redux-saga/core/effects'
import navSaga from '@lib/store/nav/nav.saga'
import localeSaga from '@lib/store/locale/locale.saga'
import authenticateSaga from '@lib/store/user/auth/authenticate.saga'

const allSagas = [...navSaga, ...localeSaga, ...authenticateSaga]

export default function* root() {
  yield all(allSagas.map(call))
}
