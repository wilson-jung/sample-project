import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { appUserAgentActions } from '@lib/store/application/appUserAgent/appUserAgent.slice'
import { getRiderAppUserAgent } from '@tada-shared/util-application'

export function useAppUserAgent() {
  const dispatch = useDispatch()

  useEffect(() => {
    const appUserAgent = Cookies.get('appUserAgent')

    dispatch(appUserAgentActions.set(getRiderAppUserAgent(appUserAgent)))
  }, [dispatch])
}
