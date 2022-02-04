import { VoidFunctionComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions, selectCounter } from '@features/counter/__state__/counter.slice'

export const Counter: VoidFunctionComponent = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCounter)
  const increment = () => dispatch(counterActions.addCountBy(1))
  const decrement = () => dispatch(counterActions.addCountBy(-1))

  return (
    <div>
      <div>COUNT: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
