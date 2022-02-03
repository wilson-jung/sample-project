<% let authType = (() => {
    switch(prefix){
        case 'rider':
            return 'User'
        case 'driver':
            return 'Driver'
        default:
            return null
    }
})()
_%>
import Cookies from 'js-cookie'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@lib/store/store'
import { <%= authType %>AuthenticateParams, <%= authType %>AuthenticateResult } from '@tada-shared/proto'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'
import { ACCESS_TOKEN_KEY, GRYPHONE_ACCESS_TOKEN_KEY } from '@lib/constants'

const host = getRuntimeConfig().HOST
const useProxy = getRuntimeConfig().USE_PROXY
const baseUrl = useProxy === 'true' && typeof window !== 'undefined' ? `/api/dev/proxy?url=${host}` : `${host}`

const METHOD_TYPE = 'POST'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const {
        application: {
          accessToken: { accessToken },
        },
        locale,
      } = getState() as RootState

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
      authenticate: builder.mutation<<%= authType %>AuthenticateResult, <%= authType %>AuthenticateParams>({
        query: body => ({
          body,
          url: `/d/Authenticate`,
          method: METHOD_TYPE,
          keepUnusedDataFor: 0,
        }),
        transformResponse({ data }, meta) {
          const accessToken = meta?.response?.headers?.get(GRYPHONE_ACCESS_TOKEN_KEY)
          if (accessToken) {
            Cookies.set(ACCESS_TOKEN_KEY, accessToken)
          }

          return data
        },
      }),
    }
  },
})

export const { useAuthenticateMutation } = apiSlice
