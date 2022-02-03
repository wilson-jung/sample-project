import { GrayColor } from '@tada-shared/ui-rider'
import { VoidFunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'

interface ISkipButtonProps {
  handler?: () => void
}

export const SkipButton: VoidFunctionComponent<ISkipButtonProps> = ({ handler }) => {
  const { t } = useTranslation()

  return (
    <SkipButtonWrapper onClick={handler}>
      <span>{t('appBar_skipButton')}</span>
    </SkipButtonWrapper>
  )
}

const SkipButtonWrapper = styled.div`
  display: flex;
  height: 41px;
  width: 72px;
  margin: 0 10px 0 0;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  color: ${GrayColor.Gray700};
`
