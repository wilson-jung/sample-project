import { AppBar } from '@pagesImpl/__components__/AppBar'
import { navActions } from '@lib/store/nav/nav.slice'
import { useDispatch, useSelector } from 'react-redux'
import { isNotInAppBrowser } from '@tada-shared/util-application/src'
import { PageLayout } from '@pagesImpl/__components__/PageLayout'
import { selectPlatform } from '@lib/store/application/appUserAgent/appUserAgent.slice'
import { splitByDivide } from '@tada-shared/util-format/src'
import { GrayColor } from '@tada-shared/ui-rider'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { scoreActions, selectRating } from '@lib/store/score/score.slice'
import { selectMainStepTopPosition } from '@lib/store/ui/uiFlag/uiFlag.slice'
import { FormBox } from '@pagesImpl/main/step2/__components__/FormBox'
import { PAGE_LOG_PLATFORM, useLogPageView } from '@tada-shared/hooks'
import { npsNativeLog } from '@lib/native/NativeService'
import { useMemo } from 'react'
import { pageConfig } from '@lib/router/config'
import { useEffectOnce } from 'react-use'
import { useRouter } from 'next/router'
import { NPS_CLICK_LOG } from '@tada-shared/util-native'

export default function Step2Impl() {
  const logConfig = useMemo(
    () => [
      {
        type: PAGE_LOG_PLATFORM.FIREBASE,
        getParams: () => ({}),
      },
    ],
    []
  )
  useLogPageView(logConfig, npsNativeLog)
  const router = useRouter()
  const dispatch = useDispatch()
  const platform = useSelector(selectPlatform)
  const rating = useSelector(selectRating)
  const mainStepTopPosition = useSelector(selectMainStepTopPosition)

  const navBack = () => dispatch(navActions.back({}))

  const onClickSkip = () => {
    dispatch(scoreActions.requestSubmitNpsRecord())
    npsNativeLog.click({
      componentName: NPS_CLICK_LOG.SKIP_REASON,
      params: { score: String(rating) },
    })
  }

  const { t } = useTranslation()

  useEffectOnce(() => {
    // TODO: 모든 페이지에서 ssr을 사용하는 상황에서 prefetch가 유효한지 확인필요
    router.prefetch(pageConfig.confirm.props.build())
  })

  return (
    <>
      <AppBar skipButton={{ handler: onClickSkip }} hasAppBarTitle={false} clicks={navBack} />
      <PageLayout withGNB={!isNotInAppBrowser(platform)} fillParentVertical>
        <PaddingForAlign mainStepTopPosition={mainStepTopPosition} withGNB={!isNotInAppBrowser(platform)} />
        <TopBox withGNB={!isNotInAppBrowser(platform)}>
          <TopText>
            <TopTextTop>
              {splitByDivide(t('main/step2/reasonForRating', { 0: rating })).map((str, i) => (
                <p key={i}>{str}</p>
              ))}
            </TopTextTop>
            <TopTextBot>
              {splitByDivide(t('main/step2/reasonForRatingDescription')).map((str, i) => (
                <p key={i}>{str}</p>
              ))}
            </TopTextBot>
          </TopText>
        </TopBox>
        <FormBox />
      </PageLayout>
    </>
  )
}

const PaddingForAlign = styled.div<{ mainStepTopPosition?: number; withGNB: boolean }>`
  height: ${({ mainStepTopPosition, withGNB }) => {
    if (!mainStepTopPosition) {
      return '0px'
    }
    return `${mainStepTopPosition - (withGNB ? 56 : 0)}px`
  }};
`

interface SectionBox {
  withGNB: boolean
}
const TopBox = styled.div<SectionBox>`
  display: flex;
  align-items: center;
  padding: 0 25px;
`

const TopText = styled.div`
  word-break: keep-all;
  color: ${GrayColor.Gray950};
`
const TopTextTop = styled.div`
  line-height: 33px;
  font-weight: 700;
  font-size: 22px;
`
const TopTextBot = styled.div`
  margin-top: 15px;
  line-height: 21px;
  font-size: 14px;
`
