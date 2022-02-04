import { VoidFunctionComponent } from 'react'
import { apiSlice } from '@features/api/__state__/api.slice'

export const UserStatus: VoidFunctionComponent = () => {
  const [trigger, result] = apiSlice.useLazyGetUserStatusQuery()
  const onClickGetUserStatus = () => trigger({})

  return (
    <div>
      <div>
        <h1>User ID: {result.isLoading ? 'loading...' : result?.data?.user?.id}</h1>
      </div>
      <button onClick={onClickGetUserStatus}>get user status</button>
    </div>
  )
}
