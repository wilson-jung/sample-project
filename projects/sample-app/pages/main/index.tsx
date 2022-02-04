import { PageView } from '@features/layout/__components__/PageView'
import { Counter } from '@features/counter/__components__/Counter'
import { UserStatus } from '@features/user/__components__/UserStatus'

export default function () {
  return (
    <PageView>
      <UserStatus />
      <Counter />
    </PageView>
  )
}
