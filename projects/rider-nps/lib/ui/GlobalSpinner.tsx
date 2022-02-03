import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner, State } from '@tada-shared/ui-common'
import { RiderLoading } from '@tada-shared/ui-rider'
import { selectGlobalSpinner } from '@lib/store/ui/globalSpinner/globalSpinner.slice'

export const GlobalSpinner = () => {
  const spinnerState = useSelector(selectGlobalSpinner)
  return (
    <Spinner state={spinnerState.isVisible ? State.Default : State.Hidden} withDim={spinnerState.withDim}>
      <RiderLoading />
    </Spinner>
  )
}
