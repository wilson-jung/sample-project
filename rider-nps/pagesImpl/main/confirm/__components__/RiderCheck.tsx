import Lottie, { LottieProps, Options } from 'react-lottie'
import { memo, useEffect, useState, VoidFunctionComponent } from 'react'
import animationData from '../__lottie__/rider_check.json'

const defaultOptions: Options = {
  loop: false,
  autoplay: false,
  animationData,
}

interface RiderCheckProps {
  isPaused: boolean
}

export const RiderCheck: VoidFunctionComponent<RiderCheckProps> = memo(props => {
  const [isStoppedLottie, setStoppedLottie] = useState(true)
  useEffect(() => {
    setStoppedLottie(props.isPaused)
  }, [props.isPaused])

  return (
    <Lottie
      isClickToPauseDisabled
      options={defaultOptions}
      isStopped={false}
      isPaused={props.isPaused}
      width={48}
      height={48}
    />
  )
})
