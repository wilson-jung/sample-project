import type { ParsedUrlQuery } from 'querystring'

export enum QueryParam {
  isInitialLandingPage = 'isInitialLandingPage',
}
export const isInitialLandingPage = (query?: ParsedUrlQuery) => {
  return query?.[QueryParam.isInitialLandingPage] === '1'
}
