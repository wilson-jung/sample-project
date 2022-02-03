import { uiFlagActions } from '@lib/store/ui/uiFlag/uiFlag.slice'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

export function useSetTopTextPosition() {
  const refOfTopTextTop = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(uiFlagActions.setMainStepTopPosition(refOfTopTextTop.current?.offsetTop))
  }, [dispatch])
  return {
    refOfTopTextTop,
  }
}
