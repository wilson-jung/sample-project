import { all, call } from '@redux-saga/core/effects'
import navSaga from '@lib/store/nav/nav.saga'
import localeSaga from '@lib/store/locale/locale.saga'
import scoreSaga from '@lib/store/score/score.saga'

const allSagas = [...localeSaga, ...navSaga, ...scoreSaga]

export default function* root() {
  yield all(allSagas.map(call))
}
