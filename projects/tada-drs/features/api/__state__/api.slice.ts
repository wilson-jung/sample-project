import Cookies from 'js-cookie'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  UserAuthenticateParams,
  UserAuthenticateResult,
  ErrorDTO,
  UserGetUserStatusResult,
  UserGetUserStatusParams,
} from '@dragonball-shared/proto'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'
import { ACCESS_TOKEN_KEY, GRYPHONE_ACCESS_TOKEN_KEY } from '@features/api/contants'

const baseUrl = getRuntimeConfig().HOST

const METHOD_TYPE = 'POST'

export type ApiErrorType = { status: number; data: ErrorDTO }

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = Cookies.get(ACCESS_TOKEN_KEY)

      const additionalHeaders = {
        accept: 'application/json',
        'content-type': 'application/json',
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
  keepUnusedDataFor: 0,
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
      getUserStatus: builder.query<UserGetUserStatusResult, UserGetUserStatusParams>({
        query: body => ({
          body,
          method: METHOD_TYPE,
          url: `/u/GetUserStatus`,
        }),
        keepUnusedDataFor: 60,
      }),
    }
  },
})
