import { FC } from 'react'

interface IPageView {}
export const PageView: FC<IPageView> = props => {
  return <div>{props.children}</div>
}
