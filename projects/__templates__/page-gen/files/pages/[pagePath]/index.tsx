import React from 'react'
import { PageContainer } from '@pagesImpl/<%= pagePath %>/container'
import <%= pageComponent %>Impl from '@pagesImpl/<%= pagePath %>/<%= pagePath %>Impl'

export default function <%= pageComponent %>() {
  return (
    <PageContainer.Provider>
      <<%= pageComponent %>Impl />
    </PageContainer.Provider>
  )
}
