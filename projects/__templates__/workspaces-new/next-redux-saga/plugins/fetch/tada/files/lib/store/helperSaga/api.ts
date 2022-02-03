import { getRuntimeConfig } from '@lib/utils/runtimeConfig'
import { call, put } from 'redux-saga/effects'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { select } from '@redux-saga/core/effects'
import { RootState } from '@lib/store/store'
import { accessTokenActions, selectAccessToken } from '@lib/store/user/accessToken/accessToken.slice'
import { ErrorDTO } from '@tada-shared/proto'

const host = getRuntimeConfig().HOST
const useProxy = getRuntimeConfig().USE_PROXY
export const ACCESS_TOKEN_KEY = 'x-gryphon-set-access-token'

export type ApiError = ErrorDTO | AxiosError

export type ApiResult<T> = { result: T; error?: undefined } | { error: ApiError; result?: undefined }

export type ErrorHandler = (error: ApiError) => Generator

interface ProtoObj<T> {
  fromObject: (v: any) => T
}

export const protoFactory =
  <T>(protoObj: ProtoObj<T>) =>
  ({ data }: { data: any }) => {
    return protoObj.fromObject(data)
  }

export function* apiFetcher<T>(
  apiURL: string,
  param: any,
  protoObj: ProtoObj<T>,
  errorHandler: ErrorHandler,
  factory: (v: any) => any = protoFactory
) {
  const res: ApiResult<T> = yield call(fetchManager, apiURL, param, factory(protoObj), errorHandler)
  return res
}

/**
 *
 * @example
 * function* userAuthenticate(param: UserAuthenticateParams) {
 *  return (yield call(
 *   fetchManager,
 *   '/u/Authenticate',
 *   param,
 *   ({ headers }) => headers[ACCESS_TOKEN_KEY]
 *  )) as string | undefined
 * }
 */
export function* fetchManager<T>(path: string, param: any, factory: (rawJson: any) => T, errorHandler: ErrorHandler) {
  const axiosInstance: AxiosInstance = yield call(createAxiosInstance)

  try {
    const apiURL =
      useProxy === 'true' && typeof window !== 'undefined' ? `/api/dev/proxy?url=${host + path}` : `${host}${path}`
    const bodyParam = JSON.stringify(param)
    const response: AxiosResponse = yield axiosInstance.post(apiURL, bodyParam, {
      params: {},
    })
    yield call(setToken, response)

    const result = factory(response)
    return { result }
  } catch (e) {
    let error
    if ((e as AxiosError).response?.data !== undefined) {
      try {
        error = ErrorDTO.fromObject(e.response?.data)
      } catch (e) {
        error = e as AxiosError
      }
    } else {
      error = e as AxiosError
    }
    yield call(errorHandler, error)
    return { error }
  }
}

function* createAxiosInstance() {
  const locale: string = yield select((state: RootState) => state.locale.locale)
  const accessToken: string | undefined = yield select(selectAccessToken)
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'accept-language': locale,
    ...(accessToken !== undefined && { Authorization: `Bearer ${accessToken}` }),
  }

  const axiosInstance = axios.create({ headers })
  return axiosInstance
}

function* setToken(response: AxiosResponse) {
  const token = response.headers[ACCESS_TOKEN_KEY]

  if (token === 'unset') {
    yield put(accessTokenActions.clearAccessToken())
  } else if (token) {
    yield put(accessTokenActions.setAccessToken(token))
  }
}
