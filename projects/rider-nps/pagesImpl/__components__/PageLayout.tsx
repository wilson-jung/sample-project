import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { GrayColor } from '@tada-shared/ui-rider'
import { LayoutDirection, LinearLayout, State } from '@tada-shared/ui-common'
import Head from 'next/head'

export type PageState = State.Error | State.Loading | State.Default

interface PageLayoutProps {
  state?: PageState
  backgroundColor?: string
  contentBackgroundColor?: string
  horizontalPadding?: number
  verticalPadding?: number
  fillParentVertical?: boolean
  withGNB?: boolean
  handleRetryOnError?: () => void
}

export const PageLayout: React.FC<PageLayoutProps> = props => {
  const state = props.state ?? State.Default
  const pageRef = useRef<HTMLDivElement>(null)

  const contentSelector = (state: PageState) => {
    return (
      <ContentArea
        direction={LayoutDirection.Vertical}
        contentBackgroundColor={props.contentBackgroundColor}
        fillParentVertical={props.fillParentVertical}
      >
        {props.children}
      </ContentArea>
    )
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Page {...props} ref={pageRef} id="pageLayout">
        {contentSelector(state)}
      </Page>
    </>
  )
}

const ContentArea = styled(LinearLayout)<{ fillParentVertical?: boolean; contentBackgroundColor?: string }>`
  ${props => css`
    max-width: 440px;
    width: 100%;

    ${props.fillParentVertical && 'flex-grow: 1;'}
    background-color: ${props.contentBackgroundColor ?? GrayColor.White};
  `}
`

const Page = styled.div<PageLayoutProps>`
  ${props => css`
    position: relative;
    min-height: ${props.withGNB ? `calc(100vh - 56px)` : `100vh`};

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props.backgroundColor ?? GrayColor.Gray050};
  `}
`
