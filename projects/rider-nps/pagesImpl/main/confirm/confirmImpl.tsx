import { PageLayout } from '@pagesImpl/__components__/PageLayout'
import { useTranslation } from 'react-i18next'
import { useEffect, useMemo, useState } from 'react'
import { PAGE_LOG_PLATFORM, useLogPageView } from '@tada-shared/hooks'
import { npsNativeLog } from '@lib/native/NativeService'
import { useDispatch } from 'react-redux'
import { useEffectOnce } from 'react-use'
import styled from '@emotion/styled'
import { Colors } from '@tada-shared/ui-common/src'
import { navActions } from '@lib/store/nav/nav.slice'
import { RiderCheck } from '@pagesImpl/main/confirm/__components__/RiderCheck'

export default function ConfirmImpl() {
  const [isStoppedLottie, setStoppedLottie] = useState(true)
  const [isAnimationComplete, setAnimationComplete] = useState(false)
  const logConfig = useMemo(() => {
    return [
      {
        type: PAGE_LOG_PLATFORM.FIREBASE,
        getParams: () => ({}),
      },
    ]
  }, [])
  useLogPageView(logConfig, npsNativeLog)

  const dispatch = useDispatch()

  useEffectOnce(() => {
    setTimeout(() => {
      setStoppedLottie(false)
      setAnimationComplete(true)
    }, 500)
  })

  useEffect(() => {
    if (isAnimationComplete) {
      setTimeout(() => {
        dispatch(navActions.closeInAppBrowser({}))
      }, 1000)
    }
  }, [dispatch, isAnimationComplete])

  const { t } = useTranslation()
  return (
    <>
      <PageLayout fillParentVertical>
        <TextBoxWrapper>
          <RiderCheck isPaused={isStoppedLottie} />
          <TextBoxTop>{t('main/confirm/title')}</TextBoxTop>
          <TextBoxBottom>{t('main/confirm/description')}</TextBoxBottom>
        </TextBoxWrapper>
      </PageLayout>
    </>
  )
}

const TextBoxWrapper = styled.div`
  display: inline-flex;
  margin-top: calc(50vh - 61px - 20px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TextBoxTop = styled.div`
  margin-top: 20px;
  color: ${Colors.Gray900};
  font-size: 20px;
  font-weight: 700;
  line-height: 29.6px;
`
const TextBoxBottom = styled.div`
  margin-top: 5px;
  color: ${Colors.Gray950};
  font-size: 14px;
  font-weight: 400;
  line-height: 20.72px;
`
