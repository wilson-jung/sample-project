import { useCallback } from 'react'
import styled from '@emotion/styled'
import { ArrowBackIcon, IconButton, Tint, Typefaces, GrayColor } from '@tada-shared/ui-rider'
import { useBackKeyHandler } from '@tada-shared/util-native'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { npsNativeService } from '@lib/native/NativeService'
import { PLATFORM_TYPE, isNotInAppBrowser } from '@tada-shared/util-application'
import { useSelector } from 'react-redux'
import { selectPlatform } from '@lib/store/application/appUserAgent/appUserAgent.slice'
import { SkipButton } from '@pagesImpl/__components__/SkipButton'
import isUndefined from 'lodash/isUndefined'

interface ISkipButton {
  handler: () => void
}
interface AppBarProps {
  clicks: () => void
  hasAppBarTitle?: boolean
  skipButton?: ISkipButton
}

const AppBarWrapper = styled.header<{ hasAppBarTitle: boolean }>`
  display: flex;
  justify-content: ${props => (props.hasAppBarTitle ? 'flex-start' : 'space-between')};
  position: sticky;
  left: 0;
  top: 0;
  height: 56px;
  width: 100vw;
  padding: 4px 0px 8px 8px;
  display: flex;
  background-color: #fff;
  z-index: 10;
`

const PageTitle = styled.h2<{ platform: Omit<PLATFORM_TYPE, 'unknown'> }>`
  display: flex;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Typefaces.Regular18};
  padding: 9px 0;
  color: ${GrayColor.Black};
  width: 100%;
  ${({ platform }) => {
    switch (platform) {
      case PLATFORM_TYPE.iOS:
        return css`
          margin: 0 60px 0 8px;
          text-align: center;
        `
      case PLATFORM_TYPE.Android:
        return css`
          margin: 0 20px 0;
          text-align: left;
        `
    }
  }}
`

export const AppBar = ({ clicks, skipButton, hasAppBarTitle = true }: AppBarProps) => {
  const router = useRouter()
  const { t } = useTranslation()

  const backKeyCallback = useCallback(() => {
    clicks()
    return true
  }, [clicks])
  useBackKeyHandler(npsNativeService, backKeyCallback)

  const platform = useSelector(selectPlatform)

  if (isNotInAppBrowser(platform)) return <></>

  return (
    <AppBarWrapper hasAppBarTitle={hasAppBarTitle}>
      <IconButton size={44} tint={Tint.Black} icon={ArrowBackIcon} onClick={backKeyCallback} />

      {hasAppBarTitle && <PageTitle platform={platform}>{t(`${router.pathname.slice(1)}/appBar_title`)}</PageTitle>}
      {!isUndefined(skipButton) && <SkipButton handler={skipButton!.handler} />}
    </AppBarWrapper>
  )
}
