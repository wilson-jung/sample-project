import Cookies from 'js-cookie'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@lib/store/store'
import {
  ErrorDTO,
  UserAuthenticateParams,
  UserAuthenticateResult,
  UserSubmitNpsRecordParams,
  UserSubmitNpsRecordResult,
} from '@tada-shared/proto'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'
import { ACCESS_TOKEN_KEY, GRYPHONE_ACCESS_TOKEN_KEY } from '@lib/constants'

const host = getRuntimeConfig().HOST
const useProxy = getRuntimeConfig().USE_PROXY
const baseUrl = useProxy === 'true' && typeof window !== 'undefined' ? `/api/dev/proxy?url=${host}` : `${host}`

const METHOD_TYPE = 'POST'

export type ApiErrorType = { status: number; data?: ErrorDTO }

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const { locale } = getState() as RootState

      const accessToken = Cookies.get(ACCESS_TOKEN_KEY)

      const additionalHeaders = {
        accept: 'application/json',
        'content-type': 'application/json',
        'accept-language': locale.locale,
        ...(accessToken !== undefined && { Authorization: `Bearer ${accessToken}` }),
      }

      Object.entries(additionalHeaders).forEach(([key, value]) => {
        if (value !== undefined) {
          headers.set(key, value)
        }
      })

      return headers
    },
  }),
  endpoints(builder) {
    return {
      authenticate: builder.mutation<UserAuthenticateResult, UserAuthenticateParams>({
        query(body) {
          return {
            body,
            url: `/u/Authenticate`,
            method: METHOD_TYPE,
          }
        },
        transformResponse({ data }, meta) {
          const accessToken = meta?.response?.headers?.get(GRYPHONE_ACCESS_TOKEN_KEY)
          if (accessToken) {
            Cookies.set(ACCESS_TOKEN_KEY, accessToken)
          }

          return data
        },
      }),
      submitNpsRecord: builder.query<UserSubmitNpsRecordResult, UserSubmitNpsRecordParams>({
        query: body => ({
          body,
          method: METHOD_TYPE,
          url: `/u/SubmitNpsRecord`,
        }),
      }),
    }
  },
})

export const { useAuthenticateMutation } = apiSlice
