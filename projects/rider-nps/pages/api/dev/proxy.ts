import { NextApiRequest, NextApiResponse } from 'next'
import * as https from 'https'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'

const { PRODUCTION } = getRuntimeConfig()

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (PRODUCTION !== 'false') {
    res.status(404).end()
    return
  }
  const header = req.headers
  delete header.host
  delete header.origin
  delete header.referer
  return new Promise(resolve => {
    try {
      const request = https.request(
        // Node core http module
        req.query.url as string,
        {
          headers: header,
          method: req.method,
        },
        response => {
          response.pipe(res)
          res.status(response.statusCode ?? 500)
          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const key in response.headers) {
            const value = response.headers[key]
            if (value !== undefined) {
              res.setHeader(key, value)
            }
          }
          resolve({})
        }
      )
      request.write(JSON.stringify(req.body))
      request.end()
    } catch (error) {
      // http 자체가 실패한 케이스는 고려하지 않는다.
      res.status(500).end()
      return resolve({})
    }
  })
}
