import { Colors } from '@tada-shared/ui-common/src'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import Image from 'next/image'
import { useEffectOnce } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import { scoreActions, selectRating } from '@lib/store/score/score.slice'
import { npsNativeLog } from '@lib/native/NativeService'
import { NPS_CLICK_LOG } from '@tada-shared/util-native'

export const FormBox = () => {
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [reason, setReason] = useState('')
  const focusInput = () => inputRef.current?.focus()
  useEffectOnce(() => {
    focusInput()
  })

  const dispatch = useDispatch()
  const rating: number | undefined = useSelector(selectRating)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(scoreActions.setRatingReason({ ratingReason: reason }))
    dispatch(scoreActions.requestSubmitNpsRecord())

    npsNativeLog.click({
      componentName: NPS_CLICK_LOG.SUBMIT_NPS_RECORD,
      params: { score: String(rating), reason },
    })
  }

  const hasInputError = reason.length === 0
  const isInputFocused = () => {
    if (typeof window !== 'undefined') {
      return inputRef.current === document.activeElement
    }
    return false
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value)
  }
  const onClickInputDelete = () => {
    setReason('')
    focusInput()
  }

  const isShowInputDeleteButton = () => !hasInputError && isInputFocused()
  const isShowSubmitButton = () => !hasInputError && isInputFocused()

  return (
    <FormBoxWrapper>
      <form onSubmit={onSubmit}>
        <InputWrapper isHighlighted={isInputFocused()}>
          <ReasonInput
            type="text"
            ref={inputRef}
            value={reason}
            onChange={onChangeHandler}
            placeholder={t('main/step2/reason_placeholder')}
          />
          <InputDeleteIconWrapper onClick={onClickInputDelete}>
            {isShowInputDeleteButton() && <Image src="/images/btn_input_delete.png" width={14} height={14} />}
          </InputDeleteIconWrapper>
        </InputWrapper>
        {isShowSubmitButton() && <SubmitButton type="submit">{t('main/step2/submit')}</SubmitButton>}
      </form>
    </FormBoxWrapper>
  )
}

const FormBoxWrapper = styled.div`
  padding: 0 25px;
`
const InputWrapper = styled.div<{ isHighlighted: boolean }>`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 13px 0;
  border-bottom: ${props => (props.isHighlighted ? `2px solid ${Colors.Black}` : `1px solid ${Colors.Gray200}`)};
`
const ReasonInput = styled.input`
  display: block;
  width: 100%;
  height: 24px;
  line-height: 24px;
  padding: 0 0 0 10.5px;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.Black};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${Colors.Gray200};
    font-weight: normal;
  }
`

const InputDeleteIconWrapper = styled.div`
  display: flex;
  width: 34px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SubmitButton = styled.button`
  display: flex;
  margin-top: 10px;
  width: 100%;
  height: 52px;
  border-radius: 4px;
  color: ${Colors.White};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  background-color: ${Colors.TadaNavy};
  align-items: center;
  justify-content: center;
`
