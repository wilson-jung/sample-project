import { AppBar } from '@pagesImpl/__components__/AppBar'
import { useDispatch, useSelector } from 'react-redux'
import { navActions } from '@lib/store/nav/nav.slice'
import { selectPlatform } from '@lib/store/application/appUserAgent/appUserAgent.slice'
import { PageLayout } from '@pagesImpl/__components__/PageLayout'
import { isNotInAppBrowser } from '@tada-shared/util-application/src'
import styled from '@emotion/styled'
import { Colors } from '@tada-shared/ui-common/src'
import { useEffectOnce } from 'react-use'
import { useRouter } from 'next/router'
import { pageConfig } from '@lib/router/config'
import { useTranslation } from 'react-i18next'
import { splitByDivide } from '@tada-shared/util-format/src'
import { scoreActions, selectRating } from '@lib/store/score/score.slice'
import { usePageContainer } from '@pagesImpl/main/step1/container'
import { PAGE_LOG_PLATFORM, useLogPageView } from '@tada-shared/hooks'
import { useMemo } from 'react'
import { npsNativeLog } from '@lib/native/NativeService'
import { NPS_CLICK_LOG } from '@tada-shared/util-native'

const SCORE_LIST = Array.from({ length: 11 }, (_, i) => i)

const isSame = (a?: number) => (b?: number) => a === b

export default function Step1Impl() {
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

  const dispatch = useDispatch()
  const router = useRouter()
  useEffectOnce(() => {
    // TODO: 모든 페이지에서 ssr을 사용하는 상황에서 prefetch가 유효한지 확인필요
    router.prefetch(pageConfig.mainStep2.props.build())
  })
  const closeBrowser = () => dispatch(navActions.closeInAppBrowser({}))
  const platform = useSelector(selectPlatform)
  const rating: number | undefined = useSelector(selectRating)
  const onClickScore = (v: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(scoreActions.requestSetRating({ rating: v }))
    npsNativeLog.click({
      componentName: NPS_CLICK_LOG.SCORE,
      params: { score: String(v) },
    })
  }
  const isActiveRating = isSame(rating)

  const { t } = useTranslation()
  const { refOfTopTextTop } = usePageContainer()
  return (
    <>
      <AppBar hasAppBarTitle={false} clicks={closeBrowser} />
      <PageLayout withGNB={!isNotInAppBrowser(platform)} fillParentVertical>
        <TopBox withGNB={!isNotInAppBrowser(platform)}>
          <TopText>
            <TopTextTop ref={refOfTopTextTop}>
              {splitByDivide(t('main/step1/recommendQuestion')).map((str, i) => (
                <p key={i}>{str}</p>
              ))}
            </TopTextTop>
            <TopTextBot>
              {splitByDivide(t('main/step1/topDescription')).map((str, i) => (
                <p key={i}>{str}</p>
              ))}
            </TopTextBot>
          </TopText>
        </TopBox>
        <MiddleBox>
          <ScoreWrapper>
            <ScoreTop>
              <span>{t('main/step1/notRecommended')}</span>
            </ScoreTop>
            <ScoreInner>
              {SCORE_LIST.map((v, i) => (
                <ScoreBox key={i}>
                  <ScoreBoxInner isActive={isActiveRating(v)} onClick={onClickScore(v)}>
                    {v}
                  </ScoreBoxInner>
                </ScoreBox>
              ))}
            </ScoreInner>
            <ScoreBottom>
              <span>{t('main/step1/highlyRecommended')}</span>
            </ScoreBottom>
          </ScoreWrapper>
        </MiddleBox>
        <BottomBox withGNB={!isNotInAppBrowser(platform)} />
      </PageLayout>
    </>
  )
}

const SCORE_BOX_HEIGHT = 154
const PADDING_FOR_ALIGN = 2.5

interface SectionBox {
  withGNB: boolean
}
const TopBox = styled.div<SectionBox>`
  display: flex;
  align-items: center;
  padding: 35px 25px;
  height: ${props => `calc(${props.withGNB ? `(100vh - 56px) / 2` : `50vh`}  - (${SCORE_BOX_HEIGHT / 2}px) + 35px)`};
`
const MiddleBox = styled.div`
  padding: 0 25px;
  height: ${SCORE_BOX_HEIGHT}px;
`
const BottomBox = styled.div<SectionBox>`
  display: flex;
  height: ${props => `calc(${props.withGNB ? `(100vh - 56px) / 2` : `50vh`}  - (${SCORE_BOX_HEIGHT / 2}px) - 35px)`};
  padding: 0 25px;
`

const TopText = styled.div`
  word-break: keep-all;
  color: ${Colors.Gray950};
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

const ScoreWrapper = styled.div`
  width: calc(295px + ${PADDING_FOR_ALIGN * 2}px);
  margin: 0 auto;
`

const ScoreInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: bold;
`
const ScoreTop = styled.div`
  padding-left: calc(5px + ${PADDING_FOR_ALIGN}px);
  font-size: 12px;
  color: ${Colors.Gray400};
`
const ScoreBottom = styled.div`
  padding-right: calc(23px + ${PADDING_FOR_ALIGN}px);
  text-align: right;
  font-size: 12px;
  color: ${Colors.Gray400};
`
const ScoreBox = styled.div`
  padding: 3px ${PADDING_FOR_ALIGN}px;
`
const ScoreBoxInner = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 50px;
  border-radius: 6px;
  color: ${props => (props.isActive ? Colors.White : Colors.Black)};
  background-color: ${props => (props.isActive ? Colors.TadaNavyLight : Colors.Gray30)};
`
